
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
        sliderContent = document.getElementById('slider-content')
        for (index = 0; index < movie.length && index < 11; index++) {
            sliderContent.innerHTML += (`
                <input type="radio" name="btn-radio" id="radio${index + 1}" onclick="newRadio(${index})"></input>
            `)

        } sliderContent.innerHTML += '<h1 class="sliderName" id="sliderName">Slider Name</h1>'
        sliderContent.innerHTML += `<div class="slide-box fist" >
                    <img src="${movie[0].imageIndex}" alt="img1" id="slide-box1">
                </div>`
        document.getElementById('sliderName').innerText = movie[0].name

        for (index = 0; index < movie.length && index < 11; index++) {
            sliderContent.innerHTML += `<div class="slide-box">
                    <img src="${movie[index].imageIndex}" alt="img${index + 1}" id="slide-box${index + 1}" style="width: 100%">
                </div>`
        }
        sliderContent.innerHTML += `<div class="navigation-auto" id="navigation-auto"></div>`
        navAuto = document.getElementById('navigation-auto')
        for (index = 0; index < movie.length && index < 11; index++) {
            navAuto.innerHTML += `<div class="auto-btn${index + 1}"></div>`
        }
        sliderContent.innerHTML += `<div class="navigation-manual" id="navigation-manual"></div>`
        navManual = document.getElementById('navigation-manual')
        for (index = 0; index < movie.length && index < 11; index++) {
            navManual.innerHTML += `<label for="radio${index + 1}" class="manual-btn"></label>`
        }
        document.getElementById('radio1').checked = true
        function nextImg() {
            cont++
            if (cont > movie.length) {
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
    fetch(SERVER_URL + 'new')
    header()
    slideFunc()


    cards = document.getElementById('cards')

    fetch(SERVER_URL, { method: "GET" }).then((res) => res.json()).then(movie => {

        for (index = 0; index < movie.length; index++) {

            cards.innerHTML += `<section class ="card"><a  href="movie.html" onclick="setMovie(${String(movie[index].id)})">
                <div class="leg"><h2>${movie[index].name}</h2></div><img src="${movie[index].imageIndex}" alt="${movie[index].name}" onerror="this.onerror = null;'https://media.istockphoto.com/id/1500807425/pt/vetorial/image-not-found-icon-vector-design.jpg?s=612x612&w=0&k=20&c=5MzkyhRPAx0G3pl9-C7vLxPHcXxU4mOBay3d8Xkhdwg='">
            </a></section>`
        }

    }
    ).catch(erro => { document.location.href = 'error.html' })

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

            cards.innerHTML += `<section class ="card"><a href="movie.html" onclick="setMovie(${(movie[index].id)})">
                <div class="leg"><h2>${movie[index].name}</h2></div><img src="${movie[index].imageIndex}" alt="${movie[index].name}" onerror="this.onerror = null;'https://media.istockphoto.com/id/1500807425/pt/vetorial/image-not-found-icon-vector-design.jpg?s=612x612&w=0&k=20&c=5MzkyhRPAx0G3pl9-C7vLxPHcXxU4mOBay3d8Xkhdwg='">
            </a></section>`


        }

    }
    ).catch(erro => { document.location.href = 'error.html' })
}

//#endregion

//#region funções da pagina dos filmes
function loadMoviePage() {
    header()
    movieContent = document.getElementById('movieContent')
    footerLink = document.getElementById('footerLink')
    movieImage = document.getElementById('movieImg')
    let movieid = localStorage.getItem(1)


    fetch(`${SERVER_URL}?inputId=${movieid}`, { method: "GET" }).then((res) => res.json()).then(movie => {





        movieImage.innerHTML = `<img src="${movie[0].imageIndex}" alt="">`

        movieContent.innerHTML = (`
                    <h1>${movie[0].name}</h1>
                    <h2>Sinopse:</h2>
                    <p>${movie[0].synopsis}</p>
                    <h2>Avaliação:${movie[0].assessment}/10</h2>
                    <h2>Diretor:${movie[0].director}</h2>
                    <img src="img/star.png" alt="star" id="star" class="star" onclick="favorite()">
                    `)
        footerLink.innerHTML = (
            `
                    <a href="index.html"><button class="back" id="back"><h2>Voltar</h2></button></a>
        <a href="${movie[0].link}" target="_blank" id="youtubeLink"><button class="youtube" id="youtube"><img src="img/youtube icon.png" alt="Youtube"><h2>Trailer no Youtube</h2></button></a>
                    `
        )
        
        if (movie[0].favorite) {
            document.getElementById('star').src = 'img/star2.png'
        } else {
            document.getElementById('star').src = 'img/star.png'
        }



    }).catch(erro => { document.location.href = 'error.html' })

}
function favorite() {
    let movieid = localStorage.getItem(1)
    fetch(`${SERVER_URL}?inputId=${movieid}`, { method: "GET" }).then((res) => res.json()).then(movie => {

        if (movie[0].favorite) {
            let favorite = false
            fetch(SERVER_URL, {
                method: 'PUT', body: JSON.stringify({ favorite, movieid }), headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
        }
        else {
            let favorite = true
            fetch(SERVER_URL, {
                method: 'PUT', body: JSON.stringify({ favorite, movieid }), headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
        }
        loadMoviePage()
    })
}
function setMovie(id) {


    localStorage.setItem(1, id)


}
//#region Top 10
function favoriteLoad(){
    header()
    main = document.getElementById('main')
    fetch(`${SERVER_URL}?favorite=true`, { method: "GET" }).then((res) => res.json()).catch(erro => { document.location.href = 'error.html' }).then(movie => {
        for (index = 0; index < movie.length; index++) {
            main.innerHTML += (
            `<a href="movie.html" onclick="setMovie(${movie[index].id})">
                <section class="favoriteCard" id="favoriteCard">
                 <div class="favoriteImg" id="favoriteImg">
                <img src="${movie[index].imageIndex}" alt="miranha">
            </div>
            <div class="favoriteContent" id="favoriteContent">
                <h2>${movie[index].name}</h2>
                <p>${movie[index].synopsis.substring(0, 200)}${movie[index].synopsis.length > 200 ? '...' : ''}</p>
                <p>Diretor: ${movie[index].director}</p>
                <h2>Nota:${movie[index].assessment}/10</h2>
            </div>
            </section>
            </a>`)
        }
    })
}
function top10Load() {
    header()
    main = document.getElementById('main')
    fetch(SERVER_URL, { method: "GET" }).then((res) => res.json()).catch(erro => { document.location.href = 'error.html' }).then(movie => {
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
                <p>${movie[index].synopsis.substring(0, 200)}${movie[index].synopsis.length > 200 ? '...' : ''}</p>
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

function movieAddLoad() {
    header()
}
