import styled from "styled-components/native";

interface TextComponentProps {
	size?: number;
	weight?: number;
	color?: string;
	align?: string;
}

interface RoundButtonProps {
	padding?: number;
	radius?: number;
	backgroundColor?: string;
}

interface TypeTagProps {
	color: string;
}

export const Container = styled.KeyboardAvoidingView`
	flex: 1;
	padding: 40px 24px 24px 24px;
	position: relative;
	background-color: #fff;
`;
export const HeaderContainer = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const UserHeader = styled.View`
	flex: 1;
	flex-direction: row;
`;

export const UserHeaderContent = styled.View`
	flex: 1;
`;

export const TextComponent = styled.Text<TextComponentProps>`
	font-size: ${({ size }) => (size ? size : 16)}px;
	font-weight: ${({ weight }) => (weight ? weight : 400)};
	color: ${({ color }) => (color ? color : "#1B1C20")};
	text-align: ${({ align }) => (align ? align : "left")};
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

export const EmphasisContent = styled.View`
	margin-top: 40px;
`;

export const PokemonImage = styled.Image`
	width: 140px;
	height: 140px;
	border-radius: 10px;
	align-self: flex-start;
`;

export const RowContent = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	align-self: flex-start;
	padding: 2px 10px;
	border-radius: 99px;
	gap: 8px;
	margin-top: 8px;
	background-color: #dee0e3;
`;

export const TypeContent = styled.View`
	flex-direction: row;
	margin-top: 6px;
	width: 80%;
	gap: 8px;
`;

export const TypeTag = styled.View<TypeTagProps>`
	background-color: ${({ color }) => color};
	padding: 4px 12px;
	border-radius: 99px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const PokemonViewContainer = styled.View`
	height: 54%;
	width: 100%;
	margin-top: 20px;
	padding: 16px;
	background-color: #f6f8fa;
	border-radius: 16px;
	align-items: center;
`;

export const PokemonInfoContent = styled.View`
	flex: 1;
	margin-left: 16px;
`;

export const PokemonViewHeaderContent = styled.View`
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;
`;

export const PokemonMainContent = styled.View`
	width: 100%;
	margin-top: 16px;
	gap: 8px;
`;
