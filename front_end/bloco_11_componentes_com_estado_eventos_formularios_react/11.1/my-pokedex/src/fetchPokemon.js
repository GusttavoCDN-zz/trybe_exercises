const pokemons = [];

const getPokemons = async (pokeNumber) => {
	const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`);
	const pokemon = await response.json();

	const pokeObject = {
		id: pokemon.id,
		name: pokemon.forms[0].name,
		type: pokemon.types[0].type.name,
		averageWeight: {
			value: pokemon.weight,
			measurementUnit: 'kg',
		},
		image: pokemon.sprites.front_default,
	}

	pokemons.push(pokeObject);
}
const fetchPokemons = async () => {
	for (let i = 1; i <= 898; i+= 1) {
		getPokemons(i);
	}

}

fetchPokemons();

export default pokemons;
