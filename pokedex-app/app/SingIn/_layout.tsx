import React from "react";
import { Stack } from "expo-router";

const SingInLayout = () => {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" options={{ title: "SingIn" }} />
		</Stack>
	);
};

export default SingInLayout;
