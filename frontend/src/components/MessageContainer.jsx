import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import useConversation from "../store/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const noChatSelected = selectedConversation === null;

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className="flex flex-col w-full h-full sm:min-w-[400px] md:min-w-[650px] lg:min-w-[800px] rounded-xl rounded-l-none shadow-lg">
			{noChatSelected ? (
				<NoChatSelected />
			) : (
				<>
					<div className="px-4 py-3 bg-gray-900 rounded-l-none rounded-t-xl">
						<span className="text-lg font-semibold text-yellow-300">
							To:
						</span>{" "}
						<span className="text-lg font-bold text-yellow-50">
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
	const { user } = useAuthContext();
	return (
		<div className="flex items-center justify-center w-full h-full p-6 text-center rounded-lg">
			<div className="flex flex-col items-center gap-4 text-gray-200">
				<p className="text-lg sm:text-xl md:text-2xl">
					Welcome 👋 {user.fullname} ❄
				</p>
				<p className="text-sm sm:text-lg md:text-xl">
					Select a chat to start messaging
				</p>
				<TiMessages className="text-4xl sm:text-5xl md:text-7xl" />
			</div>
		</div>
	);
};

export default MessageContainer;
