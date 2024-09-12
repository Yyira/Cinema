import { randomUUID } from "node:crypto"
export class DatabaseMemory {
    #movies = new Map

    list(){
        this.#movies.set(1,{
            name:'miranha1',
            imageIndex: 'img/card-placeholder.jpg',
            synopsis: 'Uma aranha muito da doida 1',
            assessment: 10,
            director: 'Yira',
            link: "https://youtu.be/dQw4w9WgXcQ?si=ce1ySmcI3mRMwz3-"
        })
        this.#movies.set(2,{
            name:'miranha2',
            imageIndex: 'img/card-placeholder.jpg',
            synopsis: 'Uma aranha muito da doida 2',
            assessment: 10,
            director: 'Marcílio',
            link: "https://youtu.be/dQw4w9WgXcQ?si=ce1ySmcI3mRMwz3-"
        })
        this.#movies.set(3,{
            name:'miranha3',
            imageIndex: 'img/card-placeholder.jpg',
            synopsis: 'Uma aranha muito da doida 3',
            assessment: 10,
            director: 'Kevyn',
            link: "https://youtu.be/dQw4w9WgXcQ?si=ce1ySmcI3mRMwz3-"
        })
        return(Array.from(this.#movies))
    }
    createMovie(movie){
        const movieID = randomUUID()
        this.#movies.set(movieID,movie)
    }
}