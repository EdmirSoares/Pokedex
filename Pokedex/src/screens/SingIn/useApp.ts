import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Keyboard } from "react-native";

export default function useApp() {
	const [currentPage, setCurrentPage] = useState(0);
	const [userName, setuserName] = useState("");
	const [userAge, setuserAge] = useState("");

	const data = [
		{
			id: 0,
			titleHeader: "Primeiro Passo",
			title: "Vamos começar!",
			subTitle: "Nos diga o seu nome",
			placeholder: "Qual o seu nome?",
			subTitleName: "Parece um belo nome!",
			image: require("../../assets/images/Onboarding/image135.png"),
			value: userName,
			function: setuserName,
		},
		{
			id: 1,
			titleHeader: "Primeiro Passo",
			title: "Ótimo!",
			subTitle: "E qual é a sua idade?",
			placeholder: "Qual a sua idade?",
			subTitleName: "Estamos quase concluindo!",
			image: require("../../assets/images/Onboarding/image135.png"),
			value: userAge,
			function: setuserAge,
		},
	];

	async function saveData() {
		try {
			await AsyncStorage.setItem(
				"@user",
				JSON.stringify({ userName, userAge })
			);
		} catch (error) {
			console.log(error);
		}
	}

	const handleNext = () => {
		if (currentPage === 0) {
			if (userName.length > 3) {
				setCurrentPage(currentPage + 1);
			} else {
				alert("Preencha o campo corretamente");
			}
		} else if (currentPage === 1) {
			if (userAge.length > 0) {
				saveData();
				console.log("Salvou");
			} else {
				alert("Preencha o campo corretamente");
			}
		} else {
			Keyboard.dismiss();
		}
	};

	return {
		data,
		handleNext,
		currentPage,
		userName,
		userAge,
	};
}
