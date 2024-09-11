import {fastify} from "fastify";
import { DatabaseMemory } from "./database_memory.js";

const server = fastify()

const database = new DatabaseMemory

console.log(database.list())
server.listen({
    port:3333
})