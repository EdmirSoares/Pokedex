import styled from "styled-components/native";

interface ButtonProps {
	width: number;
}

interface ContainerItemProps {
	weight: string;
	size: string;
}

interface ContentProps {
	width: number;
}

export const Container = styled.View`
	flex: 1;
	width: 100%;
	padding: 20px;
	background-color: #fff;
	align-items: center;
	justify-content: center;
`;

export const Content = styled.View<ContentProps>`
	width: ${({ width }) => width - 40}px;
	height: "100%";
`;

export const HeaderContainer = styled.View`
	width: 100%;
	margin: 46px;
	justify-content: center;
	align-items: center;
`;
export const Title = styled.Text<ContainerItemProps>`
	font-size: ${({ size }) => size}px;
	font-weight: ${({ weight }) => weight};
`;

export const SubTitle = styled.Text`
	font-size: 16px;
	text-align: center;
	text-align: left;
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
export const ContentImage = styled.View`
	width: 100%;
	align-items: center;
`;

export const ImageData = styled.Image`
	width: 250px;
	height: 250px;
	resize: contain;
`;
export const Button = styled.TouchableOpacity<ButtonProps>`
	background-color: #173ea5;
	width: ${({ width }) => width - 200}px;
	align-items: center;
	padding: 10px;
	margin: 15px;
	border-radius: 100px;
`;

export const ButtonText = styled.Text`
	font-size: 14px;
	color: #fff;
`;
