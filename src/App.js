import "./App.css";
import Portfolio from "./Portfolio";
import Header from "./header/Header";
import ParticleBackground from "./ParticleBackground";
import Profile from "./Profile";

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
