import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function useApp() {
	const [currentPage, setCurrentPage] = useState(0);
	const [viewed, setViewed] = useState(false);
	const router = useRouter();

	useEffect(() => {
		checkViewStatus();
	});

	const checkViewStatus = async () => {
		try {
			const viewStatus = await AsyncStorage.getItem("screenViewed");

			if (viewStatus) {
				setViewed(true);
				router.push("SingIn");
			}
		} catch (error) {
			console.error("Erro ao verificar", error);
		}
	};

	const markAsViewed = async () => {
		try {
			await AsyncStorage.setItem("screenViewed", "true");
			setViewed(true);
		} catch (error) {
			console.error("Erro ao marcar como visualizada:", error);
		}
	};

	const onboardingData = [
		{
			id: 1,
			title: "Todos os Pokémons em um só Lugar!",
			textComplementar:
				"Acesse uma vasta lista de Pokémon de todas as gerações já feitas pela Nintendo",
			textButton: "Continuar",
			image: require("../src/assets/images/Onboarding/image135.png"),
		},
		{
			id: 2,
			title: "Mantenha sua Pokédex atualizada",
			textComplementar:
				"Cadastre-se e mantenha seu perfil, pokémon favoritos, configurações e muito mais, salvos no aplicativo, mesmo sem conexão com a internet.",
			textButton: "Continuar",
			image: require("../src/assets/images/Onboarding/sprite_hilbert 1.png"),
		},
		{
			id: 3,
			title: "Está pronto para essa aventura?",
			textComplementar:
				"Basta criar uma conta e começar a explorar o mundo dos Pokémon hoje!",
			textButton: "Criar uma conta",
			image: require("../src/assets/images/Onboarding/sprite_hilda 1.png"),
		},
	];

	const handleNext = () => {
		if (currentPage < onboardingData.length - 1) {
			setCurrentPage(currentPage + 1);
		} else {
			if (currentPage === onboardingData.length - 1) {
				console.log("foi para o SingIn");
				markAsViewed();
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
