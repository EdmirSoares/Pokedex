import styled from "styled-components/native";

interface ContainerItemProps {
	width: number;
}

interface ButtonProps {
	width: number;
}

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
`;

export const ContainerItem = styled.View<ContainerItemProps>`
	width: ${({ width }) => width}px;
	align-items: center;
	justify-content: center;
	padding: 18px;
	margin-bottom: 80px;
`;

export const ImageCard = styled.Image`
	height: 250px;
`;

export const Title = styled.Text`
	font-size: 32px;
	font-weight: 800;
	text-align: center;
	margin: 36px 10px 16px 10px;
`;

export const SubTitle = styled.Text`
	font-size: 16px;
	text-align: center;
	margin: 10px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
	background-color: #173ea5;
	width: ${({ width }) => width - 200}px;
	align-items: center;
	padding: 10px;
	margin: 15px;
	border-radius: 100px;
	position: absolute;
	bottom: 60px;
`;

export const ButtonText = styled.Text`
	font-size: 14px;
	color: #fff;
`;

export const Image = styled.Image`
	width: 250px;
	height: 250px;
	resize: contain;
`;
