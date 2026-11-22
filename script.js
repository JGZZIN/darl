// Obtem os elementos
const form = document.getElementById('login-form');

// Função que envia os dados para o servidor
function sendToServer(username, password) {
    const payload = {
        username,
        password
    };

    fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
}

// Adiciona um evento de click no botão de envio
form.addEventListener('submit', async e => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Envia os dados para o servidor
    sendToServer(username, password);
});
