import fastify from "fastify";


const app = fastify()

app.listen({
    port:3333,
    host:"0.0.0.0",

}).then(()=> {
    console.log("server running at http://localhost:3333")
})

app.get('/',()=>{
    return{
        status:"ok",
        code: 200,
    }
})