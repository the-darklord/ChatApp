import React from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../hooks/useSignup";

const Signup = () => {
	const [inputs, setInputs] = useState({
		fullname: "",
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const onCheckboxChange = (gender) => {
		setInputs({
			...inputs,
			gender,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className="flex flex-col items-center justify-center p-8 mx-auto min-w-96 md:p-12 lg:p-16">
			<div className="w-full max-w-lg p-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
				<h1 className="mb-6 text-4xl font-semibold text-center text-gray-100 md:text-5xl">
					Sign Up <span className="text-yellow-500">ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="label">
							<span className="text-lg text-gray-200 md:text-xl label-text">
								Full Name
							</span>
						</label>
						<input
							type="text"
							placeholder="John Doe"
							className="w-full h-12 text-lg md:h-14 input input-bordered md:text-xl"
							value={inputs.fullname}
							onChange={(e) =>
								setInputs({
									...inputs,
									fullname: e.target.value,
								})
							}
						/>
					</div>

					<div className="mb-4">
						<label className="label">
							<span className="text-lg text-gray-200 md:text-xl label-text">
								Username
							</span>
						</label>
						<input
							type="text"
							placeholder="johndoe"
							className="w-full h-12 text-lg md:h-14 input input-bordered md:text-xl"
							value={inputs.username}
							onChange={(e) =>
								setInputs({
									...inputs,
									username: e.target.value,
								})
							}
						/>
					</div>

					<div className="mb-4">
						<label className="label">
							<span className="text-lg text-gray-200 md:text-xl label-text">
								Email
							</span>
						</label>
						<input
							type="email"
							placeholder="johndoe@gmail.com"
							className="w-full h-12 text-lg md:h-14 input input-bordered md:text-xl"
							value={inputs.email}
							onChange={(e) =>
								setInputs({
									...inputs,
									email: e.target.value,
								})
							}
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
							value={inputs.password}
							onChange={(e) =>
								setInputs({
									...inputs,
									password: e.target.value,
								})
							}
						/>
					</div>

					<div className="mb-4">
						<label className="label">
							<span className="text-lg text-gray-200 md:text-xl label-text">
								Confirm Password
							</span>
						</label>
						<input
							type="password"
							placeholder="Confirm Password"
							className="w-full h-12 text-lg md:h-14 input input-bordered md:text-xl"
							value={inputs.confirmPassword}
							onChange={(e) =>
								setInputs({
									...inputs,
									confirmPassword: e.target.value,
								})
							}
						/>
					</div>

					<GenderCheckbox
						onCheckboxChange={onCheckboxChange}
						selectedGender={inputs.gender}
					/>

					<Link
						to={"/login"}
						className="inline-block mt-4 text-base text-gray-300 md:text-lg hover:underline hover:text-yellow-400"
					>
						Already have an account?
					</Link>
					<div>
						<button
							className="mt-4 text-lg text-gray-100 bg-yellow-500 border border-yellow-700 btn btn-block btn-lg md:btn-xl md:text-xl hover:bg-yellow-600"
							disabled={loading}
						>
							{loading ? (
								<span className="loading loading-spinner"></span>
							) : (
								"Sign Up"
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
