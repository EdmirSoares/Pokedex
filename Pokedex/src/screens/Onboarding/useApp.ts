import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function useApp() {
	const [currentPage, setCurrentPage] = useState(1);
	const navigation = useNavigation();

	const onboardingData = [
		{
			id: 1,
			title: "Bem vindo ao mundo maravilhoso dos pokemons!",
			textComplementar:
				"Aqui você encontra todos os pokemons, suas habilidades, fraquezas e muito mais!",
			textButton: "Continuar",
			image: require("../../assets/images/Onboarding/image135.png"),
		},
		{
			id: 2,
			title: "Mantenha sua Pokédex atualizada",
			textComplementar:
				"Cadastre-se e mantenha seu perfil, pokémon favoritos, configurações e muito mais, salvos no aplicativo, mesmo sem conexão com a internet.",
			textButton: "Continuar",
			image: require("../../assets/images/Onboarding/sprite_hilbert 1.png"),
		},
		{
			id: 3,
			title: "Está pronto para essa aventura?",
			textComplementar:
				"Basta criar uma conta e começar a explorar o mundo dos Pokémon hoje!",
			textButton: "Criar uma conta",
			image: require("../../assets/images/Onboarding/sprite_hilda 1.png"),
		},
	];

	const handleNext = () => {
		if (currentPage < onboardingData.length - 1) {
			setCurrentPage(currentPage + 1);
		} else {
			if (currentPage === onboardingData.length - 1) {
				navigation.navigate("SignIn");
			}
		}
	};

	return {
		onboardingData,
		currentPage,
		setCurrentPage,
		handleNext,
	};
}
