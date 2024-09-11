
const SERVER_URL = "http://localhost:3333/filmes"

//#region funções da pagina principal

function loadMainPage() {
    main = document.getElementById('main')
    header = document.getElementById('header')
    main.style.paddingTop = `${Number(header.clientHeight)}px`
    cards = document.getElementById('cards')

    fetch(SERVER_URL, { method: "GET" }).then((res) => res.json()).then(movie => {

        for (index = 0; index < movie.length; index++) {

            cards.innerHTML += `<section><a href="movie.html">
                <div class="leg"><h2>${movie[index][1].name}</h2></div><img src="${movie[index][1].imageIndex}" alt="">
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
}
function search() {
    input = document.getElementById('input')
    cards.innerHTML = ''
    fetch(SERVER_URL, { method: "GET" }).then((res) => res.json()).then(movie => {

        for (index = 0; index < movie.length; index++) {
            if (movie[index][1].name.toLowerCase().includes(input.value.toLowerCase())) {
                cards.innerHTML += `<section><a href="movie.html">
                <div class="leg"><h2>${movie[index][1].name}</h2></div><img src="${movie[index][1].imageIndex}" alt="">
            </a></section>`
            }

        }

    }
    )
}

//#endregion

//#region funções da pagina dos filmes
function loadMoviePage(){
    main = document.getElementById('main')
    header = document.getElementById('header')
    main.style.paddingTop = `${Number(header.clientHeight)}px`
}

//#endregion