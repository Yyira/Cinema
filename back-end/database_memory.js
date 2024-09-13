import { randomUUID } from "node:crypto"
export class DatabaseMemory {
    #movies = new Map
    
    list(inputName,inputId){
        
        this.#movies.set(1,{
            name:'OppenHeimer',
            imageIndex: 'img/oppenheimer.jpg',
            synopsis: 'Durante a Segunda Guerra Mundial, o tenente-general Leslie Groves Jr. nomeia o físico J. Robert Oppenheimer para trabalhar no ultrassecreto Projeto Manhattan. Oppenheimer e uma equipe de cientistas passam anos desenvolvendo e projetando a bomba atômica. Seu trabalho se concretiza em 16 de julho de 1945, quando testemunham a primeira explosão nuclear do mundo, mudando para sempre o curso da história.',
            assessment: 9.3,
            director: 'christopher nolan',
            link: "https://youtu.be/F3OxA9Cz17A?si=MhMWlMnzIjaG0Xrj"
        })
        this.#movies.set(2,{
            name:'The Last of Us',
            imageIndex: 'img/the_lest_of_us_card.png',
            synopsis: 'Joel e Ellie, um par conectado pela dureza do mundo em que vivem, são forçados a suportar circunstâncias brutais e assassinos implacáveis ​​em uma jornada pela América pós-pandemia.',
            assessment: 8.7,
            director: 'Craig Mazin',
            link: "https://youtu.be/lW5kiEUVlpo?si=2DXsEk4kz7Gkar7a"
        })
        this.#movies.set(3,{
            name:'Fallout',
            imageIndex: 'img/fallout_card.jpg',
            synopsis: '218 anos após o apocalipse, uma habitante pacífica de um agradável refúgio é forçada a se aventurar na superfície e fica chocada quando descobre a terra devastada que a espera.',
            assessment: 8.4,
            director: 'Jonathan Nolan',
            link: "https://youtu.be/zGyKzPsmxF8?si=-yoWlJ3etxoWEknE"
        })
        this.#movies.set(4,{
            name:'lol',
            imageIndex: 'img/card-placeholder.jpg',
            synopsis: 'lolzin',
            assessment: 8,
            director: 'zed',
            link: "https://youtu.be/dQw4w9WgXcQ?si=ce1ySmcI3mRMwz3-"
        })
        
        
       return  (Array.from(this.#movies.entries()))
        .map((movieArray)=>{
            const id = movieArray[0]
            const data = movieArray[1]

            return {
                id, ...data
            }
        })
        .filter(movie =>{
            if(inputName){
                return movie.name.toLowerCase().includes(inputName)
            }
            if(inputId){
                return movie.id == inputId
            }
            else{
                
                return true
            }
        })
        
      
        
    }
    
    createMovie(movie){
        const movieID = randomUUID()
        this.#movies.set(movieID,movie)
    }
}