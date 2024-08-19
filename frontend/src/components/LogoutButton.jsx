import { BiLogOut } from "react-icons/bi";
import useLogout from "../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className="flex items-center justify-center mt-auto">
			{!loading ? (
				<div
					className="flex items-center space-x-3 cursor-pointer"
					onClick={logout}
				>
					<BiLogOut className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
					<span className="text-xl text-white sm:text-2xl lg:text-3xl">
						Logout
					</span>
				</div>
			) : (
				<span className="loading loading-spinner"></span>
			)}
		</div>
	);
};
export default LogoutButton;
