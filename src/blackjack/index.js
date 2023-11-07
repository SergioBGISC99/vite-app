import _ from "underscore";

import {
  crearDeck,
  pedirCarta,
  crearCarta,
  turnoComputadora,
} from "./usecases";

let deck = [],
  puntosJugadores = [];

const tipos = ["C", "D", "H", "S"],
  especiales = ["A", "J", "Q", "K"];

// Referencuas del HTML
const btnPedir = document.querySelector("#btnPedir"),
  btnDetener = document.querySelector("#btnDetener"),
  btnNuevo = document.querySelector("#btnNuevo");

const divCartasJugadores = document.querySelectorAll(".divCartas"),
  puntosHTML = document.querySelectorAll("small");

// Esta función inicializa el juego
const inicializarJuego = (numJugadores = 2) => {
  deck = crearDeck(tipos, especiales);

  puntosJugadores = [];
  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);
  }

  puntosHTML.forEach((elem) => (elem.innerText = 0));
  divCartasJugadores.forEach((elem) => (elem.innerHTML = ""));

  btnPedir.disabled = false;
  btnDetener.disabled = false;
};

// Eventos
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta(deck);
  const puntosJugador = acumularPuntos(carta, 0);

  crearCarta(carta, 0);

  if (puntosJugador > 21) {
    console.warn("Has perdido");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, deck, puntosJugadores);
  } else if (puntosJugador === 21) {
    console.warn("¿21? Genial");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, deck, puntosJugadores);
  }
});

btnDetener.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugadores[0], deck);
});

btnNuevo.addEventListener("click", () => {
  inicializarJuego();
});
