const Message = ({ message }) => {
	return (
		<div className={"chat chat-end"}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img alt="Tailwind CSS chat bubble component" />
				</div>
			</div>
			<div className={"chat-bubble text-white bg-blue-500 pb-2"}>
				Message
			</div>
			<div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
				Time
			</div>
		</div>
	);
};
export default Message;
