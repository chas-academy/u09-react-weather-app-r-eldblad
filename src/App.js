import "./App.css";
import Navbar from "./components/navbar/Navbar";
import CurrentForecast from "./components/current-forecast/CurrentForecast";
function App() {
  return (
    <div>
      <Navbar />
      <CurrentForecast />
    </div>
  );
}

export default App;
