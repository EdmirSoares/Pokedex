import { useState } from "react";

export default function useApp() {
	const [userName, setuserName] = useState("");
	console.log(userName);

	return {
		userName,
		setuserName,
	};
}
