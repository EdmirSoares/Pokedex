import REact, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from ".";

export default function Provider() {
	return (
		<NavigationContainer>
			<Routes />
		</NavigationContainer>
	);
}
