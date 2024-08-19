import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import MessageSkeleton from "./MessageSkeleton";
import { useEffect, useRef } from "react";
import useListenMessages from "../hooks/useListenMessages";

const Messages = () => {
	const { loading, messages } = useGetMessages();
	const lastMsgRef = useRef(null);
	useListenMessages();
	useEffect(() => {
		setTimeout(() => {
			lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className="flex-1 px-6 py-4 overflow-auto">
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMsgRef} className="mb-4">
						<Message message={message} />
					</div>
				))}
			{loading &&
				[...Array(3)].map((_, i) => (
					<MessageSkeleton key={i} className="mb-4" />
				))}
			{!loading && messages.length === 0 && (
				<p className="text-lg text-center text-gray-600">
					Send a message to start the conversation
				</p>
			)}
		</div>
	);
};
export default Messages;
