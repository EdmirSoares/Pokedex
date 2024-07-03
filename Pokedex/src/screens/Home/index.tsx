import React from "react";
import useApp from "./useApp";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
	Container,
	ContainerItem,
	EmphasisContent,
	HeaderContainer,
	PokemonCard,
	PokemonImage,
	RecentSection,
	RoundButton,
	SearchBar,
	TextComponent,
	TextInput,
	TypeTag,
	UserHeader,
} from "./style";
import { Dimensions, FlatList, View } from "react-native";

type PokemonDataTestProps = {
	item: {
		id: number;
		name: string;
		typeOne: string;
		typeTwo?: string;
		description: string;
		image: any;
	};
};

const Home = () => {
	const { userData, pokemonGet, setPokemonGet, getPokemon, pokemonData } =
		useApp();
	const width = parseInt(Dimensions.get("window").width.toFixed(0));
	console.log(pokemonGet);

	const pokemonDataTest = [
		{
			id: 1,
			name: "Joltik",
			typeOne: "Grass",
			typeTwo: "Electric",
			description:
				"Joltik that live in cities have learned a technique for sucking electricity from the outlets in houses.",
			image: require("../../assets/images/Pokemons/joltik.png"),
		},
		{
			id: 2,
			name: "Bulbasaur",
			typeOne: "Grass",
			typeTwo: "Poison",
			description:
				"For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.",
			image: require("../../assets/images/Pokemons/bulbasaur.png"),
		},
		{
			id: 3,
			name: "Bulbasaur",
			typeOne: "Grass",
			description:
				"For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.",
			image: require("../../assets/images/Pokemons/bulbasaur.png"),
		},
	];

	function handleItens({ item }: PokemonDataTestProps) {
		return (
			<ContainerItem width={width}>
				<RecentSection>
					<PokemonImage source={item.image} />
					<PokemonCard>
						<TextComponent size={16} weight={700}>
							{item.name}
						</TextComponent>
						{/* <TextComponent
							size={12}
							weight={400}
							numberOfLines={1}
							ellipsizeMode="tail"
						>
							{item.description}
						</TextComponent> */}
						<TypeTag color={"#75A03E"}>
							<TextComponent
								size={12}
								weight={700}
								color={"#fff"}
							>
								{item.typeOne}
							</TextComponent>
						</TypeTag>
						{item.typeTwo && (
							<TypeTag color={"#E6D637"}>
								<TextComponent
									size={12}
									weight={700}
									align="center"
								>
									{item.typeTwo}
								</TextComponent>
							</TypeTag>
						)}
					</PokemonCard>
				</RecentSection>
			</ContainerItem>
		);
	}

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
					autoCapitalize="none"
					value={pokemonGet}
					onChangeText={(text) => setPokemonGet(text.toLowerCase())}
				/>
				<RoundButton
					onPress={() => getPokemon({ pokemonName: pokemonGet })}
				>
					<Feather name="search" size={20} color="1B1C20" />
				</RoundButton>
			</SearchBar>
			<EmphasisContent>
				<TextComponent size={16} weight={700}>
					Vistos Recentemente
				</TextComponent>
				<FlatList
					data={pokemonDataTest}
					renderItem={handleItens}
					keyExtractor={(item) => item.id.toString()}
					horizontal
					pagingEnabled
					bounces={false}
					snapToAlignment="start"
					decelerationRate={"fast"}
					showsHorizontalScrollIndicator={false}
				/>
			</EmphasisContent>
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "red",
				}}
			>
				{pokemonData.name === "" ? (
					<TextComponent>Carregando...</TextComponent>
				) : (
					<TextComponent>{pokemonData.name}</TextComponent>
				)}
			</View>
		</Container>
	);
};

export default Home;
