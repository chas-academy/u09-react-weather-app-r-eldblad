import "./App.css";
import Navbar from "./components/navbar/Navbar";

import { Route, Switch } from "react-router-dom";
import CurrentForecastPage from "./pages/CurrentForecast";
import HourlyForecastPage from "./pages/HourlyForecastPage";
import FiveDayForecastPage from "./pages/FiveDayForecastPage";
function App() {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route path="/current-forecast">
					<CurrentForecastPage />
				</Route>
				<Route path="/hourly-forecast">
					<HourlyForecastPage />
				</Route>
				<Route path="/fiveday-forecast">
					<FiveDayForecastPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
