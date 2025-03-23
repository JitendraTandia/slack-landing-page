// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/marquee";
import Notification from "./components/Notification";


function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Notification/>
      <Hero/>
      <Marquee/>
    </div>
  );
}

export default App;
