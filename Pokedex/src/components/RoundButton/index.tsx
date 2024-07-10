import { RoundButtonContainer } from "./styles";
import React from "react";

interface RoundButtonProps {
	onPress: () => void;
	children?: React.ReactNode;
	padding?: string;
	radius?: number;
	backgroundColor?: string;
}

export default function RoundButton({
	onPress,
	children,
	padding,
	radius,
	backgroundColor,
}: RoundButtonProps) {
	return (
		<RoundButtonContainer
			onPress={onPress}
			padding={padding}
			radius={radius}
			backgroundColor={backgroundColor}
		>
			{children}
		</RoundButtonContainer>
	);
}
