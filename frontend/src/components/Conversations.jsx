import useGetConversations from "../hooks/useGetConversations";
import Conversation from "./Conversation";
import { getRandomEmoji } from "../utils/emojis";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
	return (
		<div className="flex flex-col px-2 py-4 space-y-4 overflow-auto">
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))}

			{loading ? (
				<span className="mx-auto text-3xl loading loading-spinner"></span>
			) : null}
		</div>
	);
};
export default Conversations;
