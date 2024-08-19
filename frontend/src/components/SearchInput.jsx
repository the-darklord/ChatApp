import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../store/useConversation";
import useGetConversations from "../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search.trim()) return;
		if (search.length < 3) {
			return toast.error("Please enter at least 3 characters");
		}
		const conversation = conversations.find((c) =>
			c.fullname.toLowerCase().includes(search.toLowerCase())
		);
		if (!conversation) {
			return toast.error("No conversation found");
		}
		setSelectedConversation(conversation);
		setSearch("");
	};

	return (
		<form onSubmit={handleSubmit} className="flex items-center gap-4 p-3">
			<input
				type="text"
				placeholder="Search…"
				className="w-full max-w-3xl px-6 py-3 text-xl border rounded-full border-slate-400"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button
				type="submit"
				className="p-3 text-xl border rounded-full border-slate-400"
			>
				<IoSearchSharp className="w-10 h-10" />
			</button>
		</form>
	);
};
export default SearchInput;
