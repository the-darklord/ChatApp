import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
	return (
		<div className="border-r border-slate-500 p-4 flex flex-col w-full sm:w-80 md:w-96 lg:w-[650px] h-full">
			<SearchInput />
			<div className="my-4 border-t border-slate-500"></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;
