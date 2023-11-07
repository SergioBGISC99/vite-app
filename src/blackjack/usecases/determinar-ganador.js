/**
 * Esta función determina quien es el ganador
 * @param {Array<Number>} puntosJugadores 
 */

export const determinarGanador = (puntosJugadores) => {
  const [puntosMinimos, puntosComputadora] = puntosJugadores;

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) alert("Empate 😢");
    else if (puntosMinimos > 21) alert("Computadora gana 😖");
    else if (puntosComputadora > 21) alert("Has ganado 🥳");
    else alert("Gana el jugador 2 😖");
  }, 100);
};
