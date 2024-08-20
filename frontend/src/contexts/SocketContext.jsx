import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { user } = useAuthContext();

	useEffect(() => {
		if (user) {
			const socket = io("http://localhost:5000", {
				query: {
					userID: user._id,
				},
			});
			setSocket(socket);

			socket.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});

			return () => socket.close();
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [user]);

	return (
		<SocketContext.Provider value={{ socket, onlineUsers, setOnlineUsers }}>
			{children}
		</SocketContext.Provider>
	);
};
