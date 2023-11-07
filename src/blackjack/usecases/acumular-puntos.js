import { valorCarta } from "./valor-carta";

/**
 * Esta función acumula los puntos de las cartas
 * @param {String} carta
 * @param {Number} turno
 * @param {Array<Number>} puntosJugadores
 * @param {Array<String>} puntosHTML
 * @returns Number que son los puntos del jugador
 */

export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
  puntosJugadores[turno] += valorCarta(carta);
  puntosHTML[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};
