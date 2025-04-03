const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const SERVICES = {
    imc: 'http://localhost:3001',
    dieta: 'http://localhost:3002',
    usuarios: 'http://localhost:3003'
};

app.post('/calcular-imc', async (req, res) => {
    try {
        const response = await axios.post(`${SERVICES.imc}/calcular`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error en el servicio de IMC' });
    }
});

app.post('/generar-dieta', async (req, res) => {
    try {
        const response = await axios.post(`${SERVICES.dieta}/generar`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error en el servicio de dieta' });
    }
});

app.post('/registrar-usuario', async (req, res) => {
    try {
        const response = await axios.post(`${SERVICES.usuarios}/registrar`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error en el servicio de usuarios' });
    }
});

app.listen(3000, () => console.log('API Gateway corriendo en http://localhost:3000'));
