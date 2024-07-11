import React from "react";
import { AuthContext } from "../context/auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dimensions, StatusBar } from "react-native";
import LottieView from "lottie-react-native";
import Logged from "./Logged";
import LoggedOut from "./LoggedOut";
import { View } from "moti";
import { LinearGradient } from "expo-linear-gradient";

const Stack = createNativeStackNavigator();
const width = parseInt(Dimensions.get("window").width.toFixed(0));
const height = parseInt(Dimensions.get("window").height.toFixed(0));

StatusBar.setBarStyle("dark-content");

function LoadingScreen() {
	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<LinearGradient
				colors={["rgba(224, 239, 255, 1)", "#9fbbda"]}
				locations={[0.2, 0.9]}
				style={{
					position: "absolute",
					width: width,
					height: height,
				}}
			/>
			<LottieView
				source={require("../assets/animations/loading.json")}
				autoPlay
				speed={0.8}
				hardwareAccelerationAndroid={false}
				style={{ width: "100%", aspectRatio: 16 / 9 }}
			/>
		</View>
	);
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
