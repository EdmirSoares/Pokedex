import styled from "styled-components/native";

interface TypeTagProps {
	color: string;
}

export const Container = styled.KeyboardAvoidingView`
	flex: 1;
	padding: 60px 24px 24px 24px;
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

export const SearchBar = styled.View`
	background-color: #fff;
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

export const RowContainer = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	align-self: flex-start;
	border-radius: 99px;
	margin-top: 8px;
	gap: 8px;
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
	height: 50%;
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
	gap: 6px;
`;

export const NavigationContent = styled.View`
	position: absolute;
	bottom: 16px;
	right: 16px;
	align-self: flex-end;
	flex-direction: row;
	justify-content: flex-end;
	elevation: 6;
	border-radius: 99px;
`;
