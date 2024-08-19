import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className="px-4 py-2 my-4" onSubmit={handleSubmit}>
			<div className="relative w-full">
				<input
					type="text"
					className="block w-full p-2 text-lg text-white placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-lg"
					placeholder="Send a message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					type="submit"
					className="absolute inset-y-0 flex items-center right-2"
				>
					{loading ? (
						<div className="text-lg loading loading-spinner"></div>
					) : (
						<BsSend className="text-2xl" />
					)}
				</button>
			</div>
		</form>
	);
};
export default MessageInput;
