import { About, Contact, Header, Skills } from "./container";
import { Nav } from "./components";
import "./app.scss";
function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <About />
      <Skills />
      <Contact/>
    </div>
  );
}

export default App;
