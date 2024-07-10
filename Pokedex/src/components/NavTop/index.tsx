import { View, Text } from "react-native";
import React from "react";
import { Nav, NavBack, NavBackText } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function NavTop() {
	const navigation = useNavigation();
	return (
		<>
			<Nav>
				<NavBack
					onPress={() => {
						navigation.goBack();
					}}
				>
					<MaterialIcons
						name="chevron-left"
						size={24}
						color="black"
					/>
					<NavBackText>voltar</NavBackText>
				</NavBack>
			</Nav>
		</>
	);
}
