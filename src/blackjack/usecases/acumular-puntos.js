import { valorCarta } from "./valor-carta";

/**
 * Esta función acumula los puntos de las cartas
 * @param {String} carta 
 * @param {Number} turno 
 * @returns Array<Number> el cual representa los puntos del jugador en la posición del turno
 */

export const acumularPuntos = (carta, turno) => {
  puntosJugadores[turno] += valorCarta(carta);
  puntosHTML[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};
