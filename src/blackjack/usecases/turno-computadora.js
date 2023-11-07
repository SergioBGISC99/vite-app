import { pedirCarta } from "./pedir-carta";
import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./determinar-ganador";

/**
 * Esta función simula una IA para el juego
 * @param {Number} puntosMinimos
 * @param {Array<String>} deck
 * @param {Array<Number>} puntosJugadores
 * @param {Array<String>} puntosHTML
 * @param {Array<String>} divCartasJugadores
 */

export const turnoComputadora = (
  puntosMinimos,
  deck,
  puntosJugadores,
  puntosHTML,
  divCartasJugadores
) => {
  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(
      carta,
      puntosJugadores.length - 1,
      puntosJugadores,
      puntosHTML,
      divCartasJugadores
    );
    crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  determinarGanador(puntosJugadores);
};
