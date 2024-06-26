import { View } from "react-native";

const useApp = () => {
	const onboardingData = [
		{
			id: 1,
			title: "Todos os Pokémons em um só Lugar!",
			textComplementar:
				"Acesse uma vasta lista de Pokémon de todas as gerações já feitas pela Nintendo",
			textButton: "Continuar",
			image: require("../assets/images/Onboarding/image 135.png"),
		},
		{
			id: 2,
			title: "Mantenha sua Pokédex atualizada",
			textComplementar:
				"Cadastre-se e mantenha seu perfil, pokémon favoritos, configurações e muito mais, salvos no aplicativo, mesmo sem conexão com a internet.",
			textButton: "Continuar",
			image: require("../assets/images/Onboarding/sprite_hilbert 1.png"),
		},
		{
			id: 3,
			title: "Está pronto para essa aventura?",
			textComplementar:
				"Basta criar uma conta e começar a explorar o mundo dos Pokémon hoje!",
			textButton: "Criar uma conta",
			image: require("../assets/images/Onboarding/sprite_hilda 1.png"),
		},
	];

	return {
		onboardingData,
	};
};

export default useApp;
