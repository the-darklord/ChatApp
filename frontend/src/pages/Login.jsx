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
		<div className="flex flex-col items-center justify-center mx-auto min-w-96">
			<div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
				<h1 className="text-3xl font-semibold text-center text-gray-300">
					Login
					<span className="text-blue-500"> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className="p-2 label">
							<span className="text-base label-text">
								Username or Email
							</span>
						</label>
						<input
							type="text"
							placeholder="Enter username or email"
							className="w-full h-10 input input-bordered"
							value={inputField}
							onChange={(e) => setInputField(e.target.value)}
						/>
					</div>

					<div>
						<label className="label">
							<span className="text-base label-text">
								Password
							</span>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							className="w-full h-10 input input-bordered"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link
						to="/signup"
						className="inline-block mt-2 text-sm hover:underline hover:text-blue-600"
					>
						{"Don't"} have an account?
					</Link>

					<div>
						<button
							className="mt-2 border btn btn-block btn-sm border-slate-700"
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
