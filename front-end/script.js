
const SERVER_URL = "http://localhost:3333/filmes"

//#region funções da pagina principal
function header() {
    let main = document.getElementById('main')
    let header = document.getElementById('header')
    main.style.paddingTop = `${Number(header.clientHeight)}px`
}
function newRadio(radioNew) {
    fetch(SERVER_URL, { method: "GET" }).then((res) => res.json()).then(movie => {

        movie.sort((a, b) => {
            if (a.assessment > b.assessment) {
                return -1;
            }
            if (a.assessment < b.assessment) {
                return 1;
            }
            if (a.assessment == b.assessment) {
                return 0;


            }
        })
        document.getElementById('sliderName').innerText = movie[radioNew].name
    })
}
function slideFunc() {
    fetch(SERVER_URL, { method: "GET" }).then((res) => res.json()).then(movie => {

        movie.sort((a, b) => {
            if (a.assessment > b.assessment) {
                return -1;
            }
            if (a.assessment < b.assessment) {
                return 1;
            }
            if (a.assessment == b.assessment) {
                return 0;


            }
        })
        let cont = 1
        document.getElementById('radio1').checked = true
        document.getElementById('sliderName').innerText = movie[0].name
        document.getElementById('slide-box1').src = movie[0].imageIndex
        document.getElementById('slide-box2').src = movie[1].imageIndex
        document.getElementById('slide-box3').src = movie[2].imageIndex

        function nextImg() {
            cont++
            if (cont > 3) {
                cont = 1
            }
            document.getElementById(`radio${cont}`).checked = true
            document.getElementById('sliderName').innerText = movie[cont - 1].name



        }
        setInterval(() => {
            nextImg()
        }, 5000)
    })
}
function loadMainPage() {
    header()
    slideFunc()
    cards = document.getElementById('cards')

    fetch(SERVER_URL, { method: "GET" }).then((res) => res.json()).then(movie => {
        console.log(movie[0].id)
        for (index = 0; index < movie.length; index++) {

            cards.innerHTML += `<section class ="card"><a  href="movie.html" onclick="setMovie(${movie[index].id})">
                <div class="leg"><h2>${movie[index].name}</h2></div><img src="${movie[index].imageIndex}" alt="">
            </a></section>`
        }

    }
    )

}
function extend() {
    let divSearch = document.getElementById('search')
    divSearch.classList.remove('hidden-search')
    divSearch.classList.add('show-search')
    let open = document.getElementById('open')
    let close = document.getElementById('close')
    open.classList.remove('show-img')
    open.classList.add('no-show-img')
    close.classList.remove('no-show-img')
    close.classList.add('show-img')
}
function unExtend() {
    let divSearch = document.getElementById('search')
    divSearch.classList.remove('show-search')
    divSearch.classList.add('hidden-search')
    let open = document.getElementById('open')
    let close = document.getElementById('close')
    open.classList.remove('no-show-img')
    open.classList.add('show-img')
    close.classList.remove('show-img')
    close.classList.add('no-show-img')
    document.getElementById('input').value = ''

    search()
}
function search() {
    input = document.getElementById('input')
    cards.innerHTML = ''
    fetch(`${SERVER_URL}?inputName=${input.value.toLowerCase()}`, { method: "GET" },).then((res) => res.json()).then(movie => {


        for (index = 0; index < movie.length; index++) {

            cards.innerHTML += `<section class ="card"><a href="movie.html" onclick="setMovie(${movie[index].id})">
                <div class="leg"><h2>${movie[index].name}</h2></div><img src="${movie[index].imageIndex}" alt="">
            </a></section>`


        }

    }
    )
}

//#endregion

//#region funções da pagina dos filmes
function loadMoviePage() {
    header()
    movieContent = document.getElementById('movieContent')
    footerLink = document.getElementById('footerLink')
    movieImage = document.getElementById('movieImg')
    id = localStorage.getItem(1)
    fetch(`${SERVER_URL}?inputId=${id}`, { method: "GET" }).then((res) => res.json()).then(movie => {





        movieImage.innerHTML = `<img src="${movie[0].imageIndex}" alt="">`
        movieContent.innerHTML = (`
                    <h1>${movie[0].name}</h1>
                    <h2>Sinopse:</h2>
                    <p>${movie[0].synopsis}</p>
                    <h2>Avaliação:${movie[0].assessment}/10</h2>
                    <h2>Diretor:${movie[0].director}</h2>
                    `)
        footerLink.innerHTML = (
            `
                    <a href="index.html"><button class="back" id="back"><h2>Voltar</h2></button></a>
        <a href="${movie[0].link}" target="_blank" id="youtubeLink"><button class="youtube" id="youtube"><img src="img/youtube icon.png" alt="Youtube"><h2>Trailer no Youtube</h2></button></a>
                    `
        )




    })

}
function setMovie(id) {
    localStorage.setItem(1, id)

}
//#region Top 10
function top10Load() {
    header()
    main = document.getElementById('main')
    fetch(SERVER_URL, { method: "GET" }).then((res) => res.json()).then(movie => {
        movie.sort((a, b) => {
            if (a.assessment > b.assessment) {
                return -1;
            }
            if (a.assessment < b.assessment) {
                return 1;
            }
            if (a.assessment == b.assessment) {
                return 0;


            }
        })

        for (index = 0; index < 10; index++) {
            main.innerHTML += (
                `
                <a href="movie.html" onclick="setMovie(${movie[index].id})">
                <section class="top10Card" id="top10Card">
                 <div class="top10Img" id="top10Img">
                <img src="${movie[index].imageIndex}" alt="miranha">
            </div>
            <div class="top10Content" id="top10Content">
                <h1>TOP ${index + 1}</h1>
                <h2>${movie[index].name}</h2>
                <p>${movie[index].synopsis}</p>
                <p>Diretor: ${movie[index].director}</p>
                <h2>Nota:${movie[index].assessment}/10</h2>
            </div>
            </section>
            </a>
                `
            )
        }

    })
}

function movieAddLoad(){
    header()
}