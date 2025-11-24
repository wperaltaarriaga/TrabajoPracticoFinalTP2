import express from "express"
import CancionesRouter from "./routes/canciones.router.js"

const server = express()
server.use(express.json()) 

server.use("/api/spotify", CancionesRouter)


server.use((request,response,next) => {
    response.status(404).send('No está disponible este endpoint' + request.url);
})    

export default server
