import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import useApp from "./_useApp";

import {
	Button,
	ButtonText,
	Container,
	Content,
	SubTitle,
	TextInput,
	Title,
} from "./styles";

export default function SingIn() {
	const { userName, setuserName } = useApp();

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<Container>
				<Title size="26" weight="700" marginTop="46">
					Primeiro Passo
				</Title>
				<Content>
					<Title size="26" weight="400">
						Vamos começar!
					</Title>
					<Title size="26" weight="700">
						Nos diga o seu nome
					</Title>
					<TextInput
						placeholder="Qual o seu nome?"
						value={userName}
						onChangeText={(value) => setuserName(value)}
					/>
					{userName.length > 3 && (
						<SubTitle>Parece um belo nome!</SubTitle>
					)}
				</Content>
				<Button width={400}>
					<ButtonText>Continuar</ButtonText>
				</Button>
			</Container>
		</TouchableWithoutFeedback>
	);
}
