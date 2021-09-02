import "./App.css";
import Navbar from "./components/navbar/Navbar";

import { Route } from "react-router-dom";
import CurrentForecastPage from "./pages/CurrentForecast";
function App() {
  return (
    <div>
      <Navbar />
      <Route path="/">
        <CurrentForecastPage />
      </Route>
    </div>
  );
}

export default App;
