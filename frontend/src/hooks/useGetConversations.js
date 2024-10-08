import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await fetch("/api/users", {
					method: "GET",
					headers: { "Content-Type": "application/json" },
					credentials: "include",
				});
				const data = await res.json();
				if (!res.ok) {
					throw new Error(data.message);
				}
				setConversations(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
		getConversations();
	}, []);

	return {
		loading,
		conversations,
	};
};

export default useGetConversations;
