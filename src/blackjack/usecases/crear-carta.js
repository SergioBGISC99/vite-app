/**
 * Esta función añade una imagen con las caracteríscas enviadas al HTML en la posición del jugador
 * @param {String} carta
 * @param {Number} turno
 * @param {Array<String>} divCartasJugadores
 */

export const crearCarta = (carta, turno, divCartasJugadores) => {
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  divCartasJugadores[turno].append(imgCarta);
};
