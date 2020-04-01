// importamos la función `example`
import {
  filtrarpokemonKm,
  filtrarPorDeb,
  filtrarPorTipo,
  BuscarPorNombre,
  OrdenarAlfabeticamente,
} from '../src/data';

describe('filtrarpokemonKm', () => {
  it('debería ser una función', () => {
    expect(typeof filtrarpokemonKm).toBe('function');
  });

  it('deberia filtrar los huevos por distancia', () => {
    const input1 = [{ egg: '2 km' }, { egg: '5 km' }, { egg: '10 km' }, { egg: '5 km' }];
    const input2 = '5 km';
    const output = [{ egg: '5 km' }, { egg: '5 km' }];
    expect(filtrarpokemonKm(input1, input2)).toEqual(output);
  });
});

describe('filtrarPorDeb', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filtrarPorDeb).toBe('function');
  });

  it('deberia filtrar los pokemon por debilidades', () => {
    const input1 = [
      { weaknesses: ['Water', 'Ground'] },
      { weaknesses: ['Electric', 'Grass'] },
      { weaknesses: ['Water', 'Rock'] },
    ];
    const input2 = 'Ground';
    const output = [
      { weaknesses: ['Water', 'Ground'] },
    ];
    expect(filtrarPorDeb(input1, input2)).toEqual(output);
  });
});

describe('filtrarPorTipo', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filtrarPorTipo).toBe('function');
  });

  it('deberia filtrar los pokemon por tipo', () => {
    const input1 = [
      { type: ['Grass', 'Poison'] },
      { type: ['Fire'] },
      { type: ['Fire', 'Flying'] },
    ];
    const input2 = 'Fire';
    const output = [
      { type: ['Fire'] },
      { type: ['Fire', 'Flying'] },
    ];
    expect(filtrarPorTipo(input1, input2)).toEqual(output);
  });
});

describe('BuscarPorNombre', () => {
  it('deberia ser una funcion', () => {
    expect(typeof BuscarPorNombre).toBe('function');
  });

  it('deberia buscar los pokemon por nombre', () => {
    const input1 = [
      { name: 'Charizard' },
      { name: 'Charmander' },
      { name: 'Bulbasaur' },
    ];
    const input2 = 'char';
    const output = [
      { name: 'Charizard' },
      { name: 'Charmander' },
    ];
    expect(BuscarPorNombre(input1, input2)).toEqual(output);
  });
});

describe('OrdenarAlfabeticamente', () => {
  it('deberia ser una funcion', () => {
    expect(typeof OrdenarAlfabeticamente).toBe('function');
  });

  it('deberia ordenar alfabeticamente', () => {
    const input1 = [
      { name: 'Charmander' },
      { name: 'Bulbasaur' },
      { name: 'Raticate' },
    ];
    const input2 = 'A-Z';
    const output = [
      { name: 'Bulbasaur' },
      { name: 'Charmander' },
      { name: 'Raticate' },
    ];
    expect(OrdenarAlfabeticamente(input1, input2)).toEqual(output);
  });
});
