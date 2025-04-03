exports.calcularIMC = (req, res) => {
    const { peso, altura, genero } = req.body;

    if (!peso || !altura || !genero) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    const imc = peso / (altura * altura);
    let categoria = "";

    if (imc < 18.5) categoria = "Bajo peso";
    else if (imc < 24.9) categoria = "Peso normal";
    else if (imc < 29.9) categoria = "Sobrepeso";
    else categoria = "Obesidad";

    res.json({ imc: imc.toFixed(2), categoria });
};
