import "./App.css";
import Header from "./components/Header";
import Experience from "./components/Experience";
import data from "./data";

function App() {
  const experiences = data.map((experience) => (
    <Experience key={experience.id} info={experience} />
  ));
  return (
    <>
      <Header />
      <section className="experiences">{experiences}</section>
    </>
  );
}

export default App;
