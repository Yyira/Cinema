import {fastify} from "fastify";
import cors from '@fastify/cors';
import { DatabaseMemory } from "./database_memory.js";

const server = fastify()

const database = new DatabaseMemory

await server.register(cors, { 
})

server.get("/filmes", (Request) =>{
    const {inputName, inputId }= Request.query
    
    
    return database.list(inputName,inputId);

    
})
console.log(database.list())
server.listen({
    port:3333
})