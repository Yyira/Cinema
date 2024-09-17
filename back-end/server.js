import { fastify } from "fastify";
import cors from '@fastify/cors';
import { DatabaseMemory } from "./database_memory.js";


const server = fastify()

const database = new DatabaseMemory

await server.register(cors, {
})

server.get("/filmes", (Request) => {
    const { inputName, inputId } = Request.query


    return database.list(inputName, inputId);


})
server.post("/filmes", (Request, replay) => {
    const { name, director, imageIndex, synopsis, assessment, link } = Request.body
    let movie = { name, director, imageIndex, synopsis, assessment, link }
    
    database.create(movie)
    return replay.status(201).send()
})

server.listen({
    port: 3333
})