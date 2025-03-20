// importacion del express
import express from "express"
const app = express
//prueba de qe funciona 
app.get("/", (req, res) => {
    res.send("hola");
});
//servidor
app.listen(400, () =>{
    console.log("server corriendo en el puerto 4000");
});