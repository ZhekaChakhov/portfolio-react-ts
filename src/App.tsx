import SideNav from "./components/SideNav";
import Main from "./components/Main";
import Exp from "./components/Exp";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
	return (
		<>
			<div className="">
				<SideNav />
				<Main />
				<Exp />
				<Projects />
				<Resume />
			</div>
		</>
	);
}

export default App;
