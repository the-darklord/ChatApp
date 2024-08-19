import { useEffect } from "react";
import { useSocketContext } from "../contexts/SocketContext";
import useConversation from "../store/useConversation";
import notificationSound from "../assets/sounds/message-notification.mp3";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();
	const sound = new Audio(notificationSound);
	sound.preload = "auto";

	const playNotificationSound = () => {
		sound.currentTime = 0;
		sound.play();
	};

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;
			playNotificationSound();
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, messages, setMessages]);
};

export default useListenMessages;
