
document.addEventListener("DOMContentLoaded", () => {
  const robos = document.querySelectorAll(".robo");

  robos.forEach((robo) => {
    const status = robo.querySelector("span");

    const botao = document.createElement("button");
    botao.textContent = "Ativar robô";
    botao.className = "botao-robo";
    botao.type = "button";

    botao.style.cssText = `
      display: block;
      margin-top: 18px;
      padding: 10px 16px;
      border: 0;
      border-radius: 8px;
      background: #16c7e8;
      color: #101827;
      font-weight: bold;
      cursor: pointer;
    `;

    botao.addEventListener("click", () => {
      const ativo = botao.dataset.ativo === "true";

      if (ativo) {
        botao.dataset.ativo = "false";
        botao.textContent = "Ativar robô";
        status.textContent = "Desativado";
        status.style.color = "#facc15";
      } else {
        botao.dataset.ativo = "true";
        botao.textContent = "Desativar robô";
        status.textContent = "Ativo (demonstração)";
        status.style.color = "#4ade80";
      }
    });

    robo.appendChild(botao);
  });

  console.log("Roby Robots AI iniciado!");
});
