import { fastify } from "fastify";
import cors from '@fastify/cors';
import { DatabaseMemory } from "./database_memory.js";
import { request } from "http";


const server = fastify()

const database = new DatabaseMemory

await server.register(cors, {
})
server.get("/filmesnew", (request) => {
    database.new()
})
server.get("/filmes", (Request) => {
    const { inputName, inputId, favorite } = Request.query


    return database.list(inputName, inputId, favorite);


})
server.post("/filmes", (Request, replay) => {
    const { name, director, imageIndex, synopsis, assessment, link } = Request.body
    const favorite = false
    let movie = { name, director, imageIndex, synopsis, assessment, link, favorite }

    database.create(movie)
    return replay.status(201).send()
})
server.put("/filmes", (request) => {
    const favorite = request.body.favorite

    const movieid = request.body.movieid
    let movie = database.list('', movieid)
    movie = movie[0]
    delete movie.id

    movie.favorite = favorite

    database.favorite(movie, movieid,)
})

server.listen({
    port: 3333
})