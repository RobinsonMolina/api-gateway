exports.generarDieta = (req, res) => {
    const { imc } = req.body;

    if (!imc) {
        return res.status(400).json({ error: "IMC no proporcionado" });
    }

    let dieta = "";

    if (imc < 18.5) {
        dieta = "Alta en calorías, proteínas y carbohidratos saludables.";
    } else if (imc >= 25) {
        dieta = "Baja en calorías, con más verduras y proteínas magras.";
    } else {
        dieta = "Dieta equilibrada con todos los grupos de alimentos.";
    }

    res.json({ recomendacion: dieta });
};
