import "./App.css";
import Navbar from "./components/navbar/Navbar";

import { Route, Switch } from "react-router-dom";
import CurrentForecastPage from "./pages/CurrentForecast";
function App() {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route path="/current-forecast">
					<CurrentForecastPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
