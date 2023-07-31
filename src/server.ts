import fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./controller/customersController/controller";

const app = fastify()


app.register(appRoutes)
app.register(cors, {
    origin: true
    
})


app.listen({
    port:3333,
    host:"0.0.0.0",

}).then(()=> {
    console.log("server running at http://localhost:3333")
})

