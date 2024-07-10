import styled from "styled-components/native";

interface TextComponentProps {
	size?: number;
	weight?: number;
	color?: string;
	align?: string;
}

export const TextComponent = styled.Text<TextComponentProps>`
	font-size: ${({ size }) => (size ? size : 16)}px;
	font-weight: ${({ weight }) => (weight ? weight : 400)};
	color: ${({ color }) => (color ? color : "#1B1C20")};
	text-align: ${({ align }) => (align ? align : "left")};
`;
