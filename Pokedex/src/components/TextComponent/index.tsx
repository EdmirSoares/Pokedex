import React from "react";
import { TextComponent } from "./styles";

interface TextComponentProps {
	children?: React.ReactNode;
	text?: string;
	size?: number;
	weight?: number;
	color?: string;
	align?: string;
}

export default function index({
	children,
	text,
	size,
	weight,
	color,
	align,
}: TextComponentProps) {
	return (
		<>
			<TextComponent
				size={size}
				weight={weight}
				color={color}
				align={align}
			>
				{children || text}
			</TextComponent>
		</>
	);
}
