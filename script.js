let filmCard = [
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
    }
]
function lod() {
    cards = document.getElementById('cards')
    for (c = 0; c < filmCard.length; c++) {

        cards.innerHTML += `<section><div class="leg"><h2>${filmCard[c].title}</h2></div><img src="${filmCard[c].imageIndex}" alt=""></section>`
    }
}
function extend(){
    divSearch = document.getElementById('search')
    divSearch.innerHTML = '<img src="img/lupa.png" alt="lupa" onclick="unExtend()"></img><input type="text" id="input" placeholder="Pesquisar" onkeyup="search()">'
}
function unExtend(){
    divSearch = document.getElementById('search')
    divSearch.innerHTML = '<img src="img/lupa.png" alt="lupa" onclick="extend()"></img>'
}
function search() {
    input = document.getElementById('input')
    cards.innerHTML = ''
    for (c = 0; c < filmCard.length; c++) {
        if (filmCard[c].title.toLowerCase().includes(input.value.toLowerCase())) {
            cards.innerHTML += `<section><div class="leg"><h2>${filmCard[c].title}</h2></div><img src="${filmCard[c].imageIndex}" alt=""></section>`
        }
    }

}
