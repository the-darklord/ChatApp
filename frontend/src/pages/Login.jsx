import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
	const [inputField, setInputField] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(inputField, password);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-8 md:p-12 lg:p-16">
			<div className="w-full max-w-lg p-8 bg-opacity-50 shadow-md rounded-xl md:p-12 bg-clip-padding backdrop-filter backdrop-blur-lg">
				<h1 className="mb-6 text-4xl font-semibold text-center text-gray-100 md:text-5xl">
					Login
					<span className="text-yellow-500"> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="p-2 pl-1 label">
							<span className="text-lg text-gray-200 md:text-xl label-text">
								Username or Email
							</span>
						</label>
						<input
							type="text"
							placeholder="Enter username or email"
							className="w-full h-12 text-lg md:h-14 input input-bordered md:text-xl"
							value={inputField}
							onChange={(e) => setInputField(e.target.value)}
						/>
					</div>

					<div className="mb-4">
						<label className="label">
							<span className="text-lg text-gray-200 md:text-xl label-text">
								Password
							</span>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							className="w-full h-12 text-lg md:h-14 input input-bordered md:text-xl"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link
						to="/signup"
						className="inline-block mt-4 text-base text-gray-300 md:text-lg hover:underline hover:text-yellow-400"
					>
						{"Don't"} have an account?
					</Link>

					<div>
						<button
							className="mt-4 text-lg text-gray-100 bg-yellow-500 border border-yellow-700 btn btn-block btn-lg md:btn-xl md:text-xl hover:bg-yellow-600"
							disabled={loading}
						>
							{loading ? (
								<span className="loading loading-spinner"></span>
							) : (
								"Login"
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
