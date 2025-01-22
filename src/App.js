import "./App.css";
import Portfolio from "./components/portfolio/Portfolio";
import Header from "./components/header/Header";
import ParticleBackground from "./components/ParticleBackground";
import Profile from "./components/profile/Profile";

const App = () => {
  return (
    <div>
      <Header />
      <ParticleBackground />
      <Profile />
      <Portfolio />
    </div>
  );
};

export default App;
