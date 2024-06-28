import { useState } from "react";
import { Keyboard } from "react-native";

export default function useApp() {
	const [currentPage, setCurrentPage] = useState(0);
	const [userName, setuserName] = useState("");
	const [userAge, setuserAge] = useState("");
	console.log(userName, userAge);

	const data = [
		{
			id: 0,
			titleHeader: "Primeiro Passo",
			title: "Vamos começar!",
			subTitle: "Nos diga o seu nome",
			placeholder: "Qual o seu nome?",
			subTitleName: "Parece um belo nome!",
			image: require("../../src/assets/images/Onboarding/image135.png"),
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
			image: require("../../src/assets/images/Onboarding/image135.png"),
			value: userAge,
			function: setuserAge,
		},
	];

	const handleNext = () => {
		if (currentPage === 0) {
			if (userName.length > 3) {
				setCurrentPage(currentPage + 1);
			} else {
				alert("Preencha o campo corretamente");
			}
		} else if (currentPage === 1) {
			if (userAge.length > 0) {
				//setCurrentPage(currentPage + 1);
				//colocar chamada para próxima página
				alert("Finalizado");
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
