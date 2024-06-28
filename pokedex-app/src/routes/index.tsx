import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/Home";
import SingIn from "../screens/SingIn";

const Stack = createNativeStackNavigator();

export default function Routes() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Onboarding" component={Onboarding} />
			<Stack.Screen name="SingIn" component={SingIn} />
		</Stack.Navigator>
	);
}
