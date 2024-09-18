



const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    addmovie()
});
function addmovie() {
    alert('Filme adicionado!')
    document.location.href = 'index.html'
    let movieBody = {}
    for (field of document.getElementById('form').elements) {
        movieBody[field.id] = field.value
    }
    console.log(JSON.stringify(movieBody))



    //movieBody = { name, director, imageIndex, synopsis, assessment, director, link }

    fetch(SERVER_URL, { method: 'POST', body: JSON.stringify(movieBody), headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }})


}   