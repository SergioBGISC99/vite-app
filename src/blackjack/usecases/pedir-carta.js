/**
 * Esta función retorna una carta del deck
 * @param {Array<String>} baraja es un arreglo de string
 * @returns{String} retorna la carta del deck
 */

export const pedirCarta = (baraja) => {
  if (!baraja || baraja.length === 0) {
    throw "No hay cartas en el deck";
  }
  return baraja.pop();
};
