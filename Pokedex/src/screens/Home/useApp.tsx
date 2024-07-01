import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

interface UserDataProps {
	userName: string;
	userAge: string;
}

export default function useApp(): { userData: UserDataProps } {
	const [userData, setUserData] = useState<UserDataProps>({
		userName: "",
		userAge: "",
	});

	async function getDadosUser() {
		try {
			const user = await AsyncStorage.getItem("@user");
			if (user) {
				setUserData(JSON.parse(user));
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getDadosUser();
	}, []);

	return {
		userData: userData,
	};
}
