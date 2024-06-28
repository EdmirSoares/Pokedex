import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { AuthProvider } from "../context";
import Routes from ".";
import { useCallback, useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function Provider() {
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		onLayoutRootView();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		try {
			setAppIsReady(true);
			await SplashScreen.hideAsync();
		} catch (error) {
			console.error("Error setting up app:", error);
		}
	}, []);

	if (!appIsReady) {
		return null;
	}

	return (
		<NavigationContainer>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</NavigationContainer>
	);
}
