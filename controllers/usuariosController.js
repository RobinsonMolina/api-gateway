exports.registrarUsuario = (req, res) => {
    const { nombre, edad, peso, altura, genero } = req.body;

    if (!nombre || !edad || !peso || !altura || !genero) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    res.json({ mensaje: `Usuario ${nombre} registrado con éxito` });
};
