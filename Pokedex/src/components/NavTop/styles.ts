import styled from "styled-components/native";

export const Nav = styled.SafeAreaView`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-right: 20px;
	align-self: flex-start;
`;

export const NavBack = styled.TouchableOpacity`
	margin-left: 10px;
	flex-direction: row;
	align-items: center;
`;

export const NavBackText = styled.Text`
	color: #000;
	font-size: 12px;
	font-weight: 700;
`;
