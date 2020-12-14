import "./App.css";
import { Img } from "./components/Img";
import { Answer } from "./components/Answer";

function App() {
  return (
    <>
      <section className="container">
        <section className="faq--container">
          <Img />
          <Answer />
        </section>
      </section>
    </>
  );
}

export default App;
