import { useAuthContext } from "../contexts/AuthContext";
import useConversation from "../store/useConversation";
import { extractTime } from "../utils/extractTime";

const Message = ({ message }) => {
	const { user } = useAuthContext();
	const { selectedConversation } = useConversation();
	const isSender = user._id === message.senderID;
	const className = isSender ? "chat-end" : "chat-start";
	const formattedTime = extractTime(message.createdAt);
	const profilePic = isSender
		? user.profilePic
		: selectedConversation?.profilePic || "";
	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${className} mb-4`}>
			<div className="chat-image avatar">
				<div className="w-12 h-12 rounded-full">
					<img
						alt="User profile"
						src={profilePic}
						className="object-cover"
					/>
				</div>
			</div>
			<div className={`chat-bubble text-white text-lg ${shakeClass} p-4`}>
				{message.message}
			</div>
			<div className="flex items-center gap-1 text-sm opacity-60 chat-footer">
				{formattedTime}
			</div>
		</div>
	);
};

export default Message;
