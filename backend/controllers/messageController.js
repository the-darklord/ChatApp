import Message from "../models/Message.js";
import User from "../models/User.js";
import Conversation from "../models/Conversation.js";

export const getMessages = async (req, res) => {
	try {
		const { id: userToChatID } = req.params;
		const senderID = req.user._id;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderID, userToChatID] },
		}).populate("messages");

		if (!conversation) {
			return res.status(200).json([]);
		}

		const messages = conversation.messages;

		res.status(200).json(messages);
	} catch (error) {
		console.log("An Error Occurred retrieving messages", error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

export const sendMessage = async (req, res) => {
	try {
		const { message } = req.body;
		const { id: receiverID } = req.params;
		const senderID = req.user._id;

		let conversation = await Conversation.findOne({
			participants: { $all: [senderID, receiverID] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderID, receiverID],
			});
		}

		const newMessage = await Message.create({
			senderID,
			receiverID,
			message,
		});

		await conversation.updateOne({ $push: { messages: newMessage._id } });

		res.status(200).json({
			message: "Message Sent Successfully",
			newMessage,
		});
	} catch (error) {
		console.log("An Error Occurred while sending message", error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
};
