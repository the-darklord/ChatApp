import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../contexts/AuthContext";

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const signup = async (
		fullname,
		username,
		email,
		password,
		confirmPassword,
		gender
	) => {
		const status = handleErrors({
			fullname,
			username,
			email,
			password,
			confirmPassword,
			gender,
		});
		if (!status) return;

		setLoading(true);

		try {
			const res = await fetch("http://localhost:5000/api/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					fullname,
					username,
					email,
					password,
					confirmPassword,
					gender,
				}),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			if (data.success) {
				toast.success(data.message);
			} else {
				toast.error(data.message);
			}

			localStorage.setItem("user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}

		return { loading, signup };
	};
};

const handleErrors = ({
	fullname,
	username,
	email,
	password,
	confirmPassword,
	gender,
}) => {
	if (
		!fullname ||
		!username ||
		!email ||
		!password ||
		!confirmPassword ||
		!gender
	) {
		toast.error("Please fill all the fields");
		return false;
	} else if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	} else if (password.length < 8) {
		toast.error("Password must be at least 8 characters long");
		return false;
	} else if (gender !== "Male" && gender !== "Female") {
		toast.error("Gender must be Male or Female");
		return false;
	}
	return true;
};

export default useSignup;
