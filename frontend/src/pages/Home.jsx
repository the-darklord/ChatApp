import Sidebar from "../components/Sidebar";
import MessageContainer from "../components/MessageContainer";

const Home = () => {
	return (
		<div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto h-[55vh] md:h-[60vh] lg:h-[65vh] rounded-xl overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
