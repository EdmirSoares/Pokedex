import React from "react";
import useApp from "./useApp";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import typeColors from "../../../types/pokemonTypes";
import {
	Container,
	ContainerItem,
	EmphasisContent,
	HeaderContainer,
	PokemonCard,
	PokemonImage,
	PokemonImageSmall,
	PokemonInfoContent,
	PokemonViewContainer,
	PokemonViewHeaderContent,
	RecentSection,
	RoundButton,
	RowContent,
	SearchBar,
	TextComponent,
	TextInput,
	TypeContent,
	TypeTag,
	UserHeader,
} from "./style";
import { Dimensions, FlatList } from "react-native";

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
					<PokemonImageSmall source={item.image} />
					<PokemonCard>
						<TextComponent size={16} weight={700}>
							{item.name}
						</TextComponent>
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
					onSubmitEditing={() => {
						getPokemon({ pokemonName: pokemonGet });
						setPokemonGet("");
					}}
				/>
				<RoundButton
					onPress={() => {
						getPokemon({ pokemonName: pokemonGet });
						setPokemonGet("");
					}}
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
			<PokemonViewContainer>
				{pokemonData ? (
					<PokemonViewHeaderContent>
						<PokemonImage
							source={{
								uri: pokemonData.sprites.other[
									"official-artwork"
								].front_default,
							}}
							resizeMode="contain"
						/>
						<PokemonInfoContent>
							<TextComponent size={24} weight={700}>
								{pokemonData.name.charAt(0).toUpperCase() +
									pokemonData.name.slice(1)}
							</TextComponent>
							<RowContent>
								<TextComponent size={12} weight={700}>
									Id:
								</TextComponent>
								<TextComponent size={12} weight={700}>
									{pokemonData.id}
								</TextComponent>
							</RowContent>
							<RowContent>
								<TextComponent size={12} weight={700}>
									Peso:
								</TextComponent>
								<TextComponent size={12} weight={700}>
									{pokemonData.weight} kg
								</TextComponent>
							</RowContent>
							<TypeContent>
								<TypeTag
									color={
										typeColors[
											pokemonData.types[0].type.name
										]
									}
								>
									<TextComponent
										size={12}
										weight={700}
										color={"#fff"}
									>
										{pokemonData.types[0].type.name
											.charAt(0)
											.toUpperCase() +
											pokemonData.types[0].type.name.slice(
												1
											)}
									</TextComponent>
								</TypeTag>
								{pokemonData.types[1] && (
									<TypeTag
										color={
											typeColors[
												pokemonData.types[1].type.name
											]
										}
									>
										<TextComponent
											size={12}
											weight={700}
											color={"#fff"}
										>
											{pokemonData.types[1].type.name
												.charAt(0)
												.toUpperCase() +
												pokemonData.types[1].type.name.slice(
													1
												)}
										</TextComponent>
									</TypeTag>
								)}
							</TypeContent>
						</PokemonInfoContent>
					</PokemonViewHeaderContent>
				) : (
					<>
						<TextComponent>Busque por um Pokemon!</TextComponent>
					</>
				)}
			</PokemonViewContainer>
		</Container>
	);
};

export default Home;
