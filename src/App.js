import { About, Contact, Header, Skills, Work } from "./container";
import { Nav } from "./components";
import "./app.scss";
function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <About />
      <Work />
      <Skills />
      <Contact/>
    </div>
  );
}

export default App;
