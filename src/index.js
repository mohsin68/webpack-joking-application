import generatejoke from "./generateJoke.js";
import "./styles/main.scss";
import laughing from './assets/laughing.svg'

const img = document.querySelector('#laughImg');
img.src = laughing;

generatejoke();

const btn = document.querySelector('#jokeBtn');
btn.addEventListener('click', generatejoke);