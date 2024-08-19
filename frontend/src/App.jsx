import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./contexts/AuthContext.jsx";

function App() {
	const { user } = useAuthContext();
	return (
		<div className="flex items-center justify-center p-6 min-h-min md:p-12 lg:p-16">
			<div className="w-full p-8 rounded-lg shadow-lg max-w-max md:p-12 lg:p-16">
				<Routes>
					<Route
						path="/"
						element={user ? <Home /> : <Navigate to="/login" />}
					/>
					<Route
						path="/login"
						element={user ? <Navigate to="/" /> : <Login />}
					/>
					<Route
						path="/signup"
						element={user ? <Navigate to="/" /> : <Signup />}
					/>
				</Routes>
			</div>
			<Toaster />
		</div>
	);
}

export default App;
