import NavBar from "./components/header/navBar";
import Main from "./components/main/combinedSection/main";
import BottomHeader from "./components/header/bottomHeader";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BottomHeader />
      <Main />
    </div>
  );
}

export default App;
