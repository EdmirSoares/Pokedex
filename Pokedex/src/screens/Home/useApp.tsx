import AsyncStorage from "@react-native-async-storage/async-storage";
import { getPokemonData } from "../../../services/request/index";
import { useEffect, useState } from "react";

interface UserDataProps {
	userName: string;
	userAge: string;
}

interface GetPokemonProps {
	pokemonName: string;
}

interface PokemonDataProps {
	name: string;
}

export default function useApp(): {
	pokemonGet: string;
	setPokemonGet: (value: string) => void;
	pokemonData: {};
	userData: UserDataProps;
	getPokemon: (pokemonName: GetPokemonProps) => void;
} {
	const [pokemonGet, setPokemonGet] = useState("");
	const [pokemonData, setPokemonData] = useState<PokemonDataProps>({
		name: "",
	});
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

	async function getPokemon(pokemonName: GetPokemonProps) {
		try {
			const response = await getPokemonData(pokemonName);
			if (response) {
				setPokemonData(response);
			}
		} catch (error) {
			console.error("Error fetching Pokémon data:", error);
			throw error;
		}
	}

	useEffect(() => {
		console.log(pokemonData);
	}, [pokemonData]);

	return {
		pokemonGet,
		setPokemonGet,
		userData,
		getPokemon,
		pokemonData,
	};
}
