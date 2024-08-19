import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import MessageSkeleton from "./MessageSkeleton";
import { useEffect, useRef } from "react";

const Messages = () => {
	const { loading, messages } = useGetMessages();
	const lastMsgRef = useRef(null);
	useEffect(() => {
		setTimeout(() => {
			lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
	return (
		<div className="flex-1 px-4 overflow-auto">
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMsgRef}>
						<Message message={message} />
					</div>
				))}
			{loading &&
				[...Array(3)].map((_, i) => <MessageSkeleton key={i} />)}
			{!loading && messages.length === 0 && (
				<p className="text-center">
					Send a message to start the conversation
				</p>
			)}
		</div>
	);
};
export default Messages;
