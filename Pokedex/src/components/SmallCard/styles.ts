import styled from "styled-components/native";

interface ContainerItemProps {
	width: number;
}

interface TextComponentProps {
	size?: number;
	weight?: number;
	color?: string;
	align?: string;
}

interface TypeTagProps {
	color: string;
}

export const ContainerItem = styled.View<ContainerItemProps>`
	width: ${({ width }) => width - 160}px;
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

export const PokemonImageSmall = styled.Image`
	width: 80px;
	height: 80px;
	border-radius: 10px;
`;

export const PokemonCard = styled.View`
	flex: 1;
	gap: 8px;
`;

export const TextComponent = styled.Text<TextComponentProps>`
	font-size: ${({ size }) => (size ? size : 16)}px;
	font-weight: ${({ weight }) => (weight ? weight : 400)};
	color: ${({ color }) => (color ? color : "#1B1C20")};
	text-align: ${({ align }) => (align ? align : "left")};
`;

export const TypeTag = styled.View<TypeTagProps>`
	background-color: ${({ color }) => color};
	padding: 4px 12px;
	border-radius: 99px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;
