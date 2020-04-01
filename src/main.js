/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/extensions
import POKEMON from './data/pokemon/pokemon.js';
import {
  filtrarpokemonKm,
  filtrarPorDeb,
  filtrarPorTipo,
  BuscarPorNombre,
  OrdenarAlfabeticamente,
} from './data.js';


const containerElement = (obj) => {
  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'div-Element');
  divElement.innerHTML = `
  <div class="contenedorAdelante">
    <p>${obj.id}</p>
    <h2>${obj.name}</h2>
    <img src='${obj.img}'/>
  </div>
  <div class="contenedorModal">
    <span class="close">&times;</span>
    <h2>${obj.name}</h2>
    <img src="${obj.img}"/>
    <p> Tipo: ${obj.type}</p>
    <p> Tamaño: ${obj.height}</p>
    <p> Peso: ${obj.weight}</p>
    <p> Debilidades: ${obj.weaknesses}</p>
  </div>`;
  divElement.querySelector('.contenedorAdelante').addEventListener('click', () => {
    divElement.querySelector('.contenedorModal').style.display = 'block';
    document.querySelector('.miModal').style.display = 'block';
  });

  divElement.querySelector('.close').addEventListener('click', () => {
    divElement.querySelector('.contenedorModal').style.display = 'none';
    document.querySelector('.miModal').style.display = 'none';
  });

  return divElement;
};

const insertAllPokemon = document.querySelector('#datos-de-pokemon');
 /*console.log( typeof insertAllPokemon);*/

const verPokemon = (data) => {
  data.forEach((obj) => {
    insertAllPokemon.appendChild(containerElement(obj));
  });
};
verPokemon(POKEMON);


// filtro Huevos por kilometro
const filtrarHuevos = document.querySelector('#filtrar-huevos-km');
filtrarHuevos.addEventListener('change', () => {
  insertAllPokemon.innerHTML = '';
  verPokemon(filtrarpokemonKm(POKEMON, filtrarHuevos.value));
});

// filtro por debilidades
const filtrarDebilidad = document.querySelector('#filtrar-debilidad');
filtrarDebilidad.addEventListener('change', () => {
  insertAllPokemon.innerHTML = '';
  verPokemon(filtrarPorDeb(POKEMON, filtrarDebilidad.value));
});

// filtro por tipo
const filtrarTipo = document.querySelector('#filtrar-tipo');
filtrarTipo.addEventListener('change', () => {
  insertAllPokemon.innerHTML = '';
  verPokemon(filtrarPorTipo(POKEMON, filtrarTipo.value));
});

// filtrar por Nombres
document.querySelector('#buscar-por-nombre').addEventListener('input', () => {
  insertAllPokemon.innerHTML = '';
  const buscarNombre = document.querySelector('#buscar-por-nombre').value.toLowerCase();
  verPokemon(BuscarPorNombre(POKEMON, buscarNombre));
});

// ordenar A-Z y Z-A
const OrdenarAlfabetic = document.querySelector('#OrdenAlfabetico');
OrdenarAlfabetic.addEventListener('change', () => {
  insertAllPokemon.innerHTML = '';
  verPokemon(OrdenarAlfabeticamente(POKEMON, OrdenarAlfabetic.value));
});
