import styled from "styled-components/native";

interface TextComponentProps {
	size?: number;
	weight?: number;
}

interface RoundButtonProps {
	padding?: number;
	radius?: number;
	backgroundColor?: string;
}

export const Container = styled.View`
	flex: 1;
	align-items: center;
	padding: 40px 24px 24px 24px;
	background-color: #fff;
`;
export const HeaderContainer = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const UserHeader = styled.View`
	flex: 1;
`;

export const TextComponent = styled.Text<TextComponentProps>`
	font-size: ${({ size }) => (size ? size : 16)}px;
	font-weight: ${({ weight }) => (weight ? weight : 400)};
	align-items: center;
`;

export const RoundButton = styled.TouchableOpacity<RoundButtonProps>`
	padding: ${({ padding }) => (padding ? padding : 0)}px;
	border-radius: ${({ radius }) => (radius ? radius : 0)}px;
	align-items: center;
	justify-content: center;
	background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const SearchBar = styled.View`
	background-color: #f6f8fa;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-radius: 99px;
	padding: 12px 16px;
	margin-top: 24px;
	width: 100%;
	color: #1b1c20;
`;

export const TextInput = styled.TextInput`
	flex: 1;
	font-size: 16px;
	color: #1b1c20;
	margin-left: 8px;
`;
