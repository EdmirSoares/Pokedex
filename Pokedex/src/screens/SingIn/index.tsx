import React from "react";
import useApp from "./useApp";
import {
	TouchableWithoutFeedback,
	FlatList,
	Dimensions,
	View,
} from "react-native";

import {
	Button,
	ButtonText,
	Container,
	Content,
	ContentImage,
	HeaderContainer,
	ImageData,
	SubTitle,
	TextInput,
	Title,
} from "./styles";

type handleItemsProps = {
	item: {
		id: number;
		titleHeader: string;
		title: string;
		subTitle: string;
		placeholder: string;
		subTitleName: string;
		image: any;
		value: string;
		function: (value: string) => void;
	};
};

export default function SingIn() {
	const { data, currentPage, handleNext } = useApp();
	const width = Dimensions.get("window").width.toFixed(0);

	function handleItems({ item }: handleItemsProps) {
		return (
			<Content width={parseInt(width)}>
				<Title size="26" weight="400">
					{item.title}
				</Title>
				<Title size="26" weight="700">
					{item.subTitle}
				</Title>
				<TextInput
					placeholder={item.placeholder}
					value={item.value}
					onChangeText={(value) => item.function(value)}
					keyboardType={item.id === 1 ? "numeric" : "default"}
				/>
				{item.value.length > 3 && (
					<SubTitle>{item.subTitleName}</SubTitle>
				)}
				<ContentImage>
					<ImageData source={item.image} />
				</ContentImage>
			</Content>
		);
	}

	return (
		<TouchableWithoutFeedback>
			<Container>
				<HeaderContainer>
					<Title size="26" weight="700">
						Primeiro Passo
					</Title>
				</HeaderContainer>
				<FlatList
					data={[data[currentPage]]}
					renderItem={handleItems}
					keyExtractor={(item) => item.id.toString()}
					horizontal
					alwaysBounceHorizontal={false}
					snapToAlignment="start"
					decelerationRate={"fast"}
					showsHorizontalScrollIndicator={false}
				/>
				<Button onPress={handleNext} width={400}>
					<ButtonText>Continuar</ButtonText>
				</Button>
			</Container>
		</TouchableWithoutFeedback>
	);
}
