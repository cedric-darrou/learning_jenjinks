import "./App.css";
import Converter from "./components/Converter";

function App() {
  return (
    <div>
      <div className="App">Transmission de props</div>
      <Converter country='France' />
    </div>
  );
}

export default App;
