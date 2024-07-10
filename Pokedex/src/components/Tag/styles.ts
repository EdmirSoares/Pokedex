import styled from "styled-components/native";

interface TypeTagProps {
	color?: string;
}
export const TypeTag = styled.View<TypeTagProps>`
	background-color: ${({ color }) => (color ? color : "#dee0e3")};
	padding: 4px 12px;
	border-radius: 99px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;
