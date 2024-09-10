
movies = [
    {   
        title: 'Homem Aranha no Aranhaverso',
        imageIndex: 'img/card-placeholder.jpg'
    },
    {
        title: 'Lolzin',
        imageIndex: 'img/card-placeholder.jpg'
    },
    {
        title: 'Miranha',
        imageIndex: 'img/card-placeholder.jpg'
    },
   
]
function lod() {
    main = document.getElementById('main')
    header = document.getElementById('header')
    main.style.paddingTop = `${Number(header.clientHeight)}px`
    cards = document.getElementById('cards')
    for (c = 0; c < movies.length; c++) {

        cards.innerHTML += `<section><div class="leg"><h2>${movies[c].title}</h2></div><img src="${movies[c].imageIndex}" alt=""></section>`
    }
}
function extend(){
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
function unExtend(){
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
    for (c = 0; c < movies.length; c++) {
        if (movies[c].title.toLowerCase().includes(input.value.toLowerCase())) {
            cards.innerHTML += `<section><div class="leg"><h2>${movies[c].title}</h2></div><img src="${movies[c].imageIndex}" alt=""></section>`
        }
    }

}
