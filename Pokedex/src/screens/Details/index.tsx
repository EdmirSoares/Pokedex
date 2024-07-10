import { Dimensions, Text } from "react-native";
import React from "react";
import { Container } from "./styles";
import NavTop from "../../components/NavTop";
import { LinearGradient } from "expo-linear-gradient";

const width = parseInt(Dimensions.get("window").width.toFixed(0));
const height = parseInt(Dimensions.get("window").height.toFixed(0));

export default function Details() {
	return (
		<Container>
			<LinearGradient
				colors={["rgba(224, 239, 255, 1)", "#9fbbda"]}
				locations={[0.2, 0.9]}
				style={{
					position: "absolute",
					width: width,
					height: height,
				}}
			/>
			<NavTop />
			<Text style={{ color: "black" }}>Details</Text>
		</Container>
	);
}
