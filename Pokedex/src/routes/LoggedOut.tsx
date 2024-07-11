import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import SingIn from "../screens/SingIn";

const Stack = createNativeStackNavigator();

export default function LoggedOut() {
	return (
		<Stack.Navigator
			initialRouteName="Onboarding"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="SingIn" component={SingIn} />
			<Stack.Screen name="Onboarding" component={Onboarding} />
		</Stack.Navigator>
	);
}
