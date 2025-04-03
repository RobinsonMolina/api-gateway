const express = require("express");
const router = express.Router();

const imcController = require("../controllers/imcController");
const dietaController = require("../controllers/dietaController");
const usuariosController = require("../controllers/usuariosController");

router.post("/imc", imcController.calcularIMC);
router.post("/dieta", dietaController.generarDieta);
router.post("/usuarios", usuariosController.registrarUsuario);

module.exports = router;
