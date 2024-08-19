import useConversation from "../store/useConversation";
import { useSocketContext } from "../contexts/SocketContext";

const Conversation = ({ conversation, emoji, lastIdx }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;

	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<>
			<div
				className={`flex gap-4 items-center rounded-lg p-4 py-2 cursor-pointer
				${isSelected ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"}
				${isOnline ? "border-2 border-blue-500" : ""}
				`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className="w-16 rounded-full">
						<img src={conversation.profilePic} alt="user avatar" />
					</div>
				</div>

				<div className="flex flex-col flex-1">
					<div className="flex justify-between gap-4">
						<p
							className={`font-bold text-lg ${
								isSelected ? "text-white" : "text-white"
							}`}
						>
							{conversation.fullname}
						</p>
						<span className="text-3xl">{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIdx && <div className="h-2 py-0 my-0 divider" />}
		</>
	);
};
export default Conversation;
