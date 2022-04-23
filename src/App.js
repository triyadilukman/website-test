import { BrowserRouter } from "react-router-dom";
import Header from "components/Header";
import Routes from "./routes";
import "utils/share.css";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header />
				<Routes />
			</div>
		</BrowserRouter>
	);
}

export default App;
