import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import useConversation from "../store/useConversation";
import { useEffect } from "react";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const noChatSelected = selectedConversation === null;

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className="sm:min-w-[450px] md:min-w-[850px] flex flex-col">
			{noChatSelected ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className="px-4 py-2 mb-2 bg-slate-500">
						<span className="label-text">To:</span>{" "}
						<span className="font-bold text-gray-900">
							{selectedConversation.fullname}
						</span>
					</div>

					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

const NoChatSelected = () => {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="flex flex-col items-center gap-2 px-4 font-semibold text-center text-gray-200 sm:text-lg md:text-xl">
				<p>Welcome 👋 John Doe ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className="text-3xl text-center md:text-6xl" />
			</div>
		</div>
	);
};

export default MessageContainer;
