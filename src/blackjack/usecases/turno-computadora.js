import { pedirCarta } from "./pedir-carta";
import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./determinar-ganador";

/**
 * Esta función simula una IA para el juego
 * @param {Number} puntosMinimos 
 * @param {Array<String>} deck 
 * @param {Array<Number>} puntosJugadores 
 */

export const turnoComputadora = (puntosMinimos, deck, puntosJugadores) => {
  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
    crearCarta(carta, puntosJugadores.length - 1);
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  determinarGanador(puntosJugadores);
};
