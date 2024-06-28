import React from "react";
import { AuthContext } from "../context/auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, StatusBar } from "react-native";
import Logged from "./Logged";
import LoggedOut from "./LoggedOut";

const Stack = createNativeStackNavigator();

StatusBar.setBarStyle("dark-content");

function LoadingScreen() {
	return <ActivityIndicator />;
}

export default function Routes() {
	const { user, loading } = React.useContext(AuthContext);
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{loading ? (
				<Stack.Screen name="Loading" component={LoadingScreen} />
			) : user ? (
				<Stack.Screen name="Logged" component={Logged} />
			) : (
				<Stack.Screen name="LoggedOut" component={LoggedOut} />
			)}
		</Stack.Navigator>
	);
}
