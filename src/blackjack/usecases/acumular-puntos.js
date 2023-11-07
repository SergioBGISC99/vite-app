import { valorCarta } from "./valor-carta";

export const acumularPuntos = (carta, turno) => {
  puntosJugadores[turno] += valorCarta(carta);
  puntosHTML[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};
