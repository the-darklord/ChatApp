const Message = ({ message }) => {
	return (
		<div className={"chat chat-end"}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img
						alt="Tailwind CSS chat bubble component"
						src="https://api.lorem.space/image/face?hash=33791"
					/>
				</div>
			</div>
			<div className={"chat-bubble text-white bg-blue-500 pb-2"}>
				Message
			</div>
			<div className="flex items-center gap-1 text-xs opacity-50 chat-footer">
				Time
			</div>
		</div>
	);
};
export default Message;
