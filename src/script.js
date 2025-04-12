const button = document.querySelector("button");

button.addEventListener("click", () => {
  const emojis = ["🍕", "🍣", "🍔", "🍎", "🍇", "🥗", "🍪", "🍩", "🍰", "🥟"];
  for (let i = 0; i < 20; i++) {
    const emoji = document.createElement("span");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = "fixed";
    emoji.style.left = `${button.offsetLeft + button.offsetWidth / 2}px`;
    emoji.style.top = `${button.offsetTop + button.offsetHeight / 2}px`;
    emoji.style.fontSize = "24px";
    emoji.style.zIndex = 1000;
    emoji.style.pointerEvents = "none";
    document.body.appendChild(emoji);

    const x = (Math.random() - 0.5) * 500;
    const y = Math.random() * -300 - 100;

    emoji.animate(
      [
        { transform: "translate(0, 0)", opacity: 1 },
        { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
      ],
      {
        duration: 2500, // было 1500 — стало медленнее
        easing: "ease-out"
      }
    );

    setTimeout(() => {
      emoji.remove();
    }, 2500);
  }
});
