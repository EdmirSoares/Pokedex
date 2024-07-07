import axios from "axios";

interface GetPokemonDataProps {
	pokemonName: string;
}

interface GetPokemonSpeciesProps {
	pokemonId: number;
}

export async function getPokemonData({ pokemonName }: GetPokemonDataProps) {
	try {
		const response = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching Pokémon data:", error);
		throw error;
	}
}

export async function getPokemonSpecies({ pokemonId }: GetPokemonSpeciesProps) {
	try {
		const response = await axios.get(
			`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching Pokémon species:", error);
		throw error;
	}
}
