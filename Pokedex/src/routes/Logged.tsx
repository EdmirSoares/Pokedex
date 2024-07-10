import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Details from "../screens/Details";

const Stack = createNativeStackNavigator();

export default function Logged() {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="Details" component={Details} />
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	);
}
