import { randomUUID } from "node:crypto"
export class DatabaseMemory {
    #movies = new Map

    list(){
        this.#movies.set(1,{name:'miranha1', imageIndex: 'img/card-placeholder.jpg',})
        this.#movies.set(2,{name:'miranha2',imageIndex: 'img/card-placeholder.jpg',})
        this.#movies.set(3,{name:'miranha3',imageIndex: 'img/card-placeholder.jpg',})
        return(Array.from(this.#movies))
    }
    createMovie(movie){
        const movieID = randomUUID()
        this.#movies.set(movieID,movie)
    }
}