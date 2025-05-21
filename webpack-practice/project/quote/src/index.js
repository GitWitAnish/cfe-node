import "./styles.css";
import bgImage from "./assets/bg.jpg";

const quotes = [
  "Don't cry because it's over, smile because it happened.",
  "Be yourself; everyone else is already taken.",
  "So many books, so little time.",
  "You only live once, but if you do it right, once is enough."
];

const app = document.getElementById("app");

const img = document.createElement("img");
img.src = bgImage;
img.alt = "Background";
img.className = "bg";

const quoteText = document.createElement("p");
quoteText.className = "quote";

const button = document.createElement("button");
button.textContent = "Get Quote";
button.onclick = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
};

app.appendChild(img);
app.appendChild(quoteText);
app.appendChild(button);
