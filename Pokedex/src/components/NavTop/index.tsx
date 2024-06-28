import { View, Text } from "react-native";
import React from "react";
import { Nav, NavBack, NavBackText } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function NavTop() {
	return (
		<>
			<Nav>
				<NavBack>
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
