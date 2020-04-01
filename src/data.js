/* eslint-disable linebreak-style */
/* Manejo de data */

// filtro Huevos por kilometro
export const filtrarpokemonKm = (datosPokemon, string) => {
  const nuevoArray = datosPokemon.filter((obj) => obj.egg === string);
  return nuevoArray;
};

// filtro por debilidades
export const filtrarPorDeb = (datosPokemon, string) => {
  const nuevoArray = datosPokemon.filter((obj) => obj.weaknesses.includes(string));
  return nuevoArray;
};

// filtro por tipo
export const filtrarPorTipo = (datosPokemon, string) => {
  const nuevoArray = datosPokemon.filter((obj) => obj.type.includes(string));
  return nuevoArray;
};

// buscador por nombre
export const BuscarPorNombre = (datosPokemon, string) => {
  const filtrarNombre = datosPokemon.filter((obj) => (obj.name.toLowerCase().startsWith(string)));
  return filtrarNombre;
};

// ordenar de A-Z y Z-A
export const OrdenarAlfabeticamente = (datosPokemon, string) => {
  const ordenarDeAZ = datosPokemon.sort((nom1, nom2) => ((nom1.name > nom2.name) ? 1 : -1));
  if (string === 'A-Z') {
    return ordenarDeAZ;
  }
  if (string === 'Z-A') {
    return ordenarDeAZ.reverse();
  }
  return ordenarDeAZ;
};
