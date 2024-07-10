import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
	getPokemonData,
	getPokemonSpecies,
} from "../../../services/request/index";

interface UserDataProps {
	userName: string;
	userAge: string;
}

interface GetPokemonProps {
	pokemonName: string;
}

interface GetPokemonSpeciesProps {
	pokemonId: number;
}

interface PokemonType {
	type: {
		name: string;
	};
}

interface PokemonSprite {
	other: {
		"official-artwork": {
			front_default: string;
		};
	};
}

interface PokemonStats {
	base_stat: number;
	stat: {
		name: string;
	};
}

interface PokemonAbilities {
	ability: {
		name: string;
	};
}

interface PokemonData {
	name: string;
	id: number;
	weight: number;
	sprites: PokemonSprite;
	types: PokemonType[];
	stats: PokemonStats[];
	abilities: PokemonAbilities[];
}

interface PokemonSpecies {
	flavor_text_entries: [
		{
			flavor_text: string;
			language: {
				name: string;
			};
		}
	];
}

export default function useApp(): {
	pokemonGet: string;
	setPokemonGet: (value: string) => void;
	pokemonData: PokemonData | null;
	pokemonBio: PokemonSpecies | null;
	userData: UserDataProps;
	getPokemon: (pokemonName: GetPokemonProps) => void;
	getPokemonSpeciesData: (pokemonId: GetPokemonSpeciesProps) => void;
} {
	const [pokemonGet, setPokemonGet] = useState("");
	const [pokemonBio, setPokemonBio] = useState<PokemonSpecies | null>(null);
	const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
	const [userData, setUserData] = useState<UserDataProps>({
		userName: "",
		userAge: "",
	});

	useEffect(() => {
		getDadosUser();
	}, []);

	async function getDadosUser() {
		try {
			const user = await AsyncStorage.getItem("@user");
			if (user) {
				setUserData(JSON.parse(user));
			}
		} catch (error) {
			console.log(error);
		}
	}

	async function getPokemonSpeciesData(pokemonId: GetPokemonSpeciesProps) {
		try {
			const response = await getPokemonSpecies(pokemonId);
			if (response) {
				setPokemonBio(response);
			}
		} catch (error) {
			console.error("Error fetching Pokémon species:", error);
			throw error;
		}
	}

	async function getPokemon(pokemonName: GetPokemonProps) {
		try {
			const response = await getPokemonData(pokemonName);
			if (response) {
				setPokemonData(response);
				getPokemonSpeciesData({ pokemonId: response.id });
				setPokemonGet("");
			}
		} catch (error) {
			console.error("Error fetching Pokémon data:", error);
			throw error;
		}
	}

	useEffect(() => {
		console.log(pokemonBio);
	}, [pokemonData]);

	return {
		pokemonGet,
		setPokemonGet,
		userData,
		getPokemon,
		getPokemonSpeciesData,
		pokemonData,
		pokemonBio,
	};
}
