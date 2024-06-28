import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IAuthContextData {
	loading: boolean;
	getDadosUser: () => Promise<void>;
	sign: (user: IUser) => void;
	logout: () => void;
	user: IUser;
}

interface IUser {
	nmUser: string;
	password: string;
}

interface IAuthContextProvider {
	children: React.ReactNode;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: IAuthContextProvider) {
	const [loading, setLoading] = useState(true);

	const [user, setUser] = useState<IUser>({} as IUser);

	useEffect(() => {
		getDadosUser();
	}, []);

	async function getDadosUser() {
		try {
			const user = await AsyncStorage.getItem("@user");
			if (user) {
				setUser(JSON.parse(user));
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	async function sign(user: IUser) {
		try {
			await AsyncStorage.setItem("@user", JSON.stringify(user));
			setUser(user);
		} catch (error) {
			console.log(error);
		}
	}

	async function logout() {
		try {
			await AsyncStorage.removeItem("@user");
			setUser({} as IUser);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<AuthContext.Provider
			value={{
				loading,
				getDadosUser,
				sign,
				logout,
				user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthContext, AuthProvider };
