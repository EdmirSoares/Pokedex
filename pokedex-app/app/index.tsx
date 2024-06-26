import React, { useState } from "react";
import { View, Text, FlatList, Image, Dimensions } from "react-native";
import useApp from "./_useApp";
import {
	Button,
	ButtonText,
	Container,
	ContainerItem,
	SubTitle,
	Title,
} from "./styles";

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
	const [currentPage, setCurrentPage] = useState(0);
	const { onboardingData } = useApp();

	const width = Dimensions.get("window").width.toFixed(0);

	const handleNext = () => {
		if (currentPage < onboardingData.length - 1) {
			setCurrentPage(currentPage + 1);
		} else {
			if (currentPage === onboardingData.length - 1) {
				console.log("fim");
				setCurrentPage(0);
			}
		}
	};

	function handleItems({ item }: handleItemsProps) {
		return (
			<ContainerItem width={width}>
				<Image source={item.image} resizeMode="contain" />
				<Title>{item.title}</Title>
				<SubTitle>{item.textComplementar}</SubTitle>
				<Button onPress={handleNext} width={parseInt(width)}>
					<ButtonText>{item.textButton}</ButtonText>
				</Button>
			</ContainerItem>
		);
	}

	return (
		<Container>
			<Image
				source={require("../assets/images/Onboarding/logoOnboarding.png")}
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
				keyExtractor={(item) => item.id.toString()}
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
