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
	const color = isSender ? "bg-blue-500" : "bg-gray-500";

	return (
		<div className={`chat ${className}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img alt="User profile" src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${color} pb-2`}>
				{message.message}
			</div>
			<div className="flex items-center gap-1 text-xs opacity-50 chat-footer">
				{formattedTime}
			</div>
		</div>
	);
};

export default Message;
