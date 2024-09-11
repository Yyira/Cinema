import { randomUUID } from "node:crypto"
export class DatabaseMemory {
    #movies = new Map

    list(){
        this.#movies.set(1,{name:'miranha'})
        return(this.#movies)
    }
    createMovie(movie){
        const movieID = randomUUID()
        this.#movies.set(movieID,movie)
    }
}