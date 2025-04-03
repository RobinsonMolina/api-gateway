const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Importar rutas
const routes = require("./routes/index");
app.use("/api", routes);

// Ruta principal
app.get("/", (req, res) => {
    res.send("API funcionando correctamente 🚀");
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`API corriendo en http://localhost:${PORT}`);
});
