const button = document.getElementById("mostrarMensagem");
const mensagemBotao = document.getElementById("mensagemBotao");

const mensagens = [
  "Você pode realizar seus sonhos!",
  "Acredite no seu potencial!",
  "Bem-vindo ao site do Léo!",
  "Faça o bem para colher coisas boas!",
];

button.addEventListener("click", () => {
  const randomMensagem = Math.floor(Math.random() * mensagens.length);
  const mensagem = mensagens[randomMensagem];
  mensagemBotao.textContent = mensagem;
});
