import styled from "styled-components/native";

interface ButtonProps {
	width: number;
}

interface ContainerItemProps {
	weight: string;
	size: string;
	marginTop?: string;
}

export const Container = styled.View`
	flex: 1;
	width: 100%;
	gap: 64px;
	padding: 20px;
	background-color: #fff;
	align-items: center;
`;

export const Content = styled.View`
	width: 100%;
	justify-content: center;
	align-items: flex-start;
`;
export const Title = styled.Text<ContainerItemProps>`
	font-size: ${({ size }) => size}px;
	font-weight: ${({ weight }) => weight};
	text-align: center;
	margin-top: ${({ marginTop }) => marginTop}px;
`;

export const SubTitle = styled.Text`
	font-size: 16px;
	text-align: center;
`;

export const TextInput = styled.TextInput`
	width: 100%;
	height: 62px;
	border: 2px solid #ccc;
	border-radius: 10px;
	padding: 16px;
	margin: 20px 0 10px;
	font-size: 16px;
	color: #000;
	background-color: #fff;
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
