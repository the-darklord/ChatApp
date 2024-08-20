import { useState, useEffect } from "react";
import useConversation from "../store/useConversation";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { selectedConversation, messages, setMessages } = useConversation();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(
					`/api/messages/${selectedConversation._id}`,
					{
						method: "GET",
						headers: { "Content-Type": "application/json" },
						credentials: "include",
					}
				);
				const data = await res.json();
				if (!res.ok) throw new Error(data.message);
				setMessages(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (selectedConversation) getMessages();
	}, [selectedConversation, setMessages]);

	return { loading, messages };
};

export default useGetMessages;
