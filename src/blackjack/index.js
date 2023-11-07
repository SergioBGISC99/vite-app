import _ from "underscore";

import { crearDeck, pedirCarta, valorCarta } from "./usecases";

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



//
const determinarGanador = () => {
  const [puntosMinimos, puntosComputadora] = puntosJugadores;

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) alert("Empate 😢");
    else if (puntosMinimos > 21) alert("Computadora gana 😖");
    else if (puntosComputadora > 21) alert("Has ganado 🥳");
    else alert("Gana el jugador 2 😖");
  }, 100);
};

// Turno de de la computadora
const turnoComputadora = (puntosMinimos) => {
  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
    crearCarta(carta, puntosJugadores.length - 1);
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  determinarGanador();
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
    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21) {
    console.warn("¿21? Genial");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  }
});

btnDetener.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugadores[0]);
});

btnNuevo.addEventListener("click", () => {
  inicializarJuego();
});
