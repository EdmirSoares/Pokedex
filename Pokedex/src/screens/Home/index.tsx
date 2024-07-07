import React from "react";
import useApp from "./useApp";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import typeColors from "../../../types/pokemonTypes";
import {
	Container,
	EmphasisContent,
	HeaderContainer,
	PokemonImage,
	PokemonInfoContent,
	PokemonMainContent,
	PokemonViewContainer,
	PokemonViewHeaderContent,
	RoundButton,
	RowContent,
	SearchBar,
	TextComponent,
	TextInput,
	TypeContent,
	TypeTag,
	UserHeader,
	UserHeaderContent,
} from "./style";
import { Dimensions, FlatList, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SmallCard from "../../components/SmallCard";
import { StatusBar } from "expo-status-bar";

const Home = () => {
	const {
		userData,
		pokemonGet,
		setPokemonGet,
		getPokemon,
		pokemonData,
		pokemonBio,
	} = useApp();
	const width = parseInt(Dimensions.get("window").width.toFixed(0));
	const height = parseInt(Dimensions.get("window").height.toFixed(0));

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
	return (
		<Container>
			<StatusBar style="dark" backgroundColor="#E0EFFF" />
			<LinearGradient
				colors={["rgba(224, 239, 255, 1)", "#9fbbda"]}
				locations={[0.2, 0.9]}
				style={{
					position: "absolute",
					width: width,
					height: height,
				}}
			/>
			<HeaderContainer>
				<UserHeader>
					<UserHeaderContent>
						<TextComponent size={24} weight={700}>
							{`Olá, `}
							<TextComponent size={24} weight={400}>
								{userData.userName.charAt(0).toUpperCase() +
									userData.userName.slice(1) +
									"! "}
								<MaterialIcons
									name="catching-pokemon"
									size={16}
									color="#aa1a1a"
								/>
							</TextComponent>
						</TextComponent>

						<TextComponent size={14} weight={500}>
							É um prazer te ver aqui!
						</TextComponent>
					</UserHeaderContent>
				</UserHeader>
			</HeaderContainer>
			<SearchBar>
				<TextInput
					placeholder="Buscar um pokemon..."
					placeholderTextColor={"#c4c4c4"}
					autoCapitalize="none"
					value={pokemonGet}
					onChangeText={(text) => setPokemonGet(text.toLowerCase())}
					onSubmitEditing={() => {
						pokemonGet.length >= 3
							? getPokemon({ pokemonName: pokemonGet })
							: null;
					}}
				/>
				<RoundButton
					onPress={() => {
						getPokemon({ pokemonName: pokemonGet });
					}}
				>
					<Feather name="search" size={20} color="#1B1C20" />
				</RoundButton>
			</SearchBar>
			<EmphasisContent>
				<TextComponent size={16} weight={700}>
					Vistos Recentemente
				</TextComponent>
				<FlatList
					data={pokemonDataTest}
					renderItem={SmallCard}
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
				{pokemonData && pokemonBio ? (
					<>
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
										{pokemonData.weight
											.toString()
											.slice(0, -1)}
										{pokemonData.weight.toString().length >=
										2
											? ","
											: ""}
										{pokemonData.weight
											.toString()
											.slice(-1)}{" "}
										kg
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
													pokemonData.types[1].type
														.name
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
						<PokemonMainContent>
							<TextComponent size={16} weight={700}>
								Descrição
							</TextComponent>
							<TextComponent
								size={12}
								weight={400}
								numberOfLines={3}
								ellipsizeMode="tail"
							>
								{"     "}
								{pokemonBio.flavor_text_entries.map((entry) => {
									if (entry.language.name === "en") {
										return entry.flavor_text
											.split("\n")
											.join(" ");
									}
								})}
							</TextComponent>
						</PokemonMainContent>
					</>
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
