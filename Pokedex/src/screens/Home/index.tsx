import React from "react";
import useApp from "./useApp";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
	Container,
	HeaderContainer,
	RoundButton,
	SearchBar,
	TextComponent,
	TextInput,
	UserHeader,
} from "./style";

const Home = () => {
	const { userData } = useApp();
	//
	return (
		<Container>
			<HeaderContainer>
				<UserHeader>
					<TextComponent size={24} weight={700}>
						Olá, {userData.userName}{" "}
						<MaterialIcons
							name="catching-pokemon"
							size={16}
							color="#aa1a1a"
						/>
					</TextComponent>
					<TextComponent size={14}>
						É um prazer te ver aqui!
					</TextComponent>
				</UserHeader>
				<RoundButton
					padding={12}
					radius={99}
					backgroundColor={"#f6f8fa"}
				>
					<Feather name="bell" size={20} color="#1B1C20" />
				</RoundButton>
			</HeaderContainer>
			<SearchBar>
				<TextInput
					placeholder="Buscar um pokemon..."
					placeholderTextColor={"#c4c4c4"}
				/>
				<RoundButton>
					<Feather name="search" size={20} color="1B1C20" />
				</RoundButton>
			</SearchBar>
		</Container>
	);
};

export default Home;
