import fastify from "fastify";
import cors from "@fastify/cors";
import { sheduleRoute } from "./controller/shedulesController/controller";
import { customerRoute } from "./controller/customersController/controller";

const app = fastify()



app.register(cors, {
    origin: true
    
})

app.register(sheduleRoute)
app.register(customerRoute)

app.listen({
    port:3333,
    host:"0.0.0.0",

}).then(()=> {
    console.log("server running at http://localhost:3333")
})


