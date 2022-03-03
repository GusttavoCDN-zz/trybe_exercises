const {getPokemonDetails} = require('./exercicio08.js');

const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];


test('1 - Funcioanmento', (done) => {
  const findBulbasaur = ({name}) => name === 'Bulbasaur';
  const messageExpected = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf' 

  getPokemonDetails(findBulbasaur, (error, message) => {
    try {
      expect(error).toBeNull();
      expect(message).toBe(messageExpected)
      done()
    } catch (error) {
      done(error);
    }
  });
});

test('2 - Verifica funcionmento no erro', (done) => {
  const findPikachu = ({name}) => name === 'Pikachu';

  getPokemonDetails(findPikachu, (error, message) =>{
    try {
      expect(error).not.toBeNull();
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty('message', 'Não temos esse pokémon para você :(');
      expect(error).toHaveProperty('name', 'Error');
      expect(error)
      expect(message).toBeNull();
      done();
    } catch (erro) {
      done(erro)
    }
  })
});