import styled from "styled-components/native";

interface RoundButtonContainerProps {
	padding?: string;
	radius?: number;
	backgroundColor?: string;
}

export const RoundButtonContainer = styled.TouchableOpacity<RoundButtonContainerProps>`
	padding: ${({ padding }) => padding || 0};
	border-radius: ${({ radius }) => (radius ? radius : 0)}px;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	background-color: ${({ backgroundColor }) =>
		backgroundColor ? backgroundColor : ""};
	gap: 6px;
`;
