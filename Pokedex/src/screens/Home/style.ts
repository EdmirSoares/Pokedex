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

interface ContainerItemProps {
	width: number;
}

export const Container = styled.View`
	flex: 1;
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
	color: ${({ color }) => (color ? color : "#1b1c20")};
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

export const RecentSection = styled.View`
	flex-direction: row;
	background-color: #f6f8fa;
	margin-top: 10px;
	margin-right: 20px;
	border-radius: 16px;
	padding: 16px;
	gap: 16px;
`;

export const ContainerItem = styled.View<ContainerItemProps>`
	width: ${({ width }) => width - 160}px;
`;

export const PokemonCard = styled.View`
	flex: 1;
	gap: 8px;
`;

export const PokemonImage = styled.Image`
	width: 80px;
	height: 80px;
	background-color: bisque;
	border-radius: 10px;
`;

export const TypeContent = styled.View`
	flex-direction: row;
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
	width: 80%;
`;
