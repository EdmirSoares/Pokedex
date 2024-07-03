import axios from "axios";

interface GetPokemonDataProps {
	pokemonName: string;
}

export async function getPokemonData({ pokemonName }: GetPokemonDataProps) {
	try {
		const response = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
		);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error("Error fetching Pokémon data:", error);
		throw error;
	}
}
