import Sidebar from "../components/Sidebar";
import MessageContainer from "../components/MessageContainer";

const Home = () => {
	return (
		<div className="flex sm:h-[600px] md:h-[700px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
