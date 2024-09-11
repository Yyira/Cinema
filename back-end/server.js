import {fastify} from "fastify";
import cors from '@fastify/cors';
import { DatabaseMemory } from "./database_memory.js";

const server = fastify()

const database = new DatabaseMemory

await server.register(cors, { 
})

server.get("/filmes", () =>{
    return database.list()
})
console.log(database.list())
server.listen({
    port:3333
})