// importacion del express
import express from "express"
const app = express()


//servir archivos del public
app.use(express.static("public"));

//probar que el servidor funciona
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" }); 
});

//servidor
app.listen(400, () =>{
    console.log("server corriendo en el puerto 4000");
});