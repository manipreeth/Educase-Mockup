import "./App.css";
import Navbar from "./Component/Navbar";
import Navlinks from "./Component/Navlinks";
import Home from "./Component/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <Navlinks />
    </div>
  );
}

export default App;
