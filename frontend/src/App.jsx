import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./contexts/AuthContext.jsx";

function App() {
	const { user } = useAuthContext();
	return (
		<div className="flex items-center justify-center h-screen p-4">
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
			<Toaster />
		</div>
	);
}

export default App;
