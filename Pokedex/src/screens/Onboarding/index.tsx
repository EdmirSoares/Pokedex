import React from "react";
import { FlatList, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useApp from "./useApp";
import {
	Button,
	ButtonText,
	Container,
	ContainerItem,
	SubTitle,
	Title,
} from "./styles";
import { StatusBar } from "expo-status-bar";
type handleItemsProps = {
	item: {
		id: number;
		title: string;
		textComplementar: string;
		textButton: string;
		image: any;
	};
};

export default function Onboarding() {
	const { onboardingData, currentPage, handleNext } = useApp();
	const width = Math.round(Dimensions.get("window").width);
	const height = Math.round(Dimensions.get("window").height);

	function handleItems({ item }: handleItemsProps) {
		return (
			<ContainerItem width={width}>
				<Image source={item.image} resizeMode="contain" />
				<Title>{item.title}</Title>
				<SubTitle>{item.textComplementar}</SubTitle>
				<Button onPress={handleNext} width={width}>
					<ButtonText>{item.textButton}</ButtonText>
				</Button>
			</ContainerItem>
		);
	}

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
			<Image
				source={require("../../assets/images/Onboarding/logoOnboarding.png")}
				style={{
					width: 80,
					height: 80,
					position: "absolute",
					bottom: 10,
				}}
				resizeMode="contain"
			/>
			<FlatList
				data={[onboardingData[currentPage]]}
				renderItem={handleItems}
				keyExtractor={(item) => item.id}
				horizontal
				pagingEnabled
				bounces={false}
				snapToAlignment="start"
				decelerationRate={"fast"}
				showsHorizontalScrollIndicator={false}
			/>
		</Container>
	);
}
