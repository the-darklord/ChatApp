import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../contexts/AuthContext";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setUser } = useAuthContext();

	const login = async (inputField, password) => {
		const status = handleErrors({ inputField, password });
		if (!status) {
			setLoading(false);
			return;
		}

		setLoading(true);

		try {
			const res = await fetch("http://localhost:5000/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ inputField, password }),
			});

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.message || "Login failed");
			}

			toast.success(data.message);
			localStorage.setItem("user", JSON.stringify(data));
			setUser(data);
		} catch (error) {
			console.log("An error occurred during login", error.message);
			toast.error(error.message || "An error occurred during login");
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};

const handleErrors = ({ inputField, password }) => {
	if (!inputField || !password) {
		toast.error("Please fill in all fields");
		return false;
	}
	return true;
};

export default useLogin;
