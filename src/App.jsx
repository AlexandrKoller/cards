import Card from "./Card";
import ImgCard from "./ImgCrad";

function App() {
  const props1 = {
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    textBtn: "Go somewhere",
    src: "...",
  };
  const props2 = {
    title: "Card title",
    text: "With supporting text below as a natural lead-in to additional content",
    textBtn: "Go somewhere",
    src: "https://camo.githubusercontent.com/5708bb5678fb14134a9ab89699d97880589ce7884fb7288ed36a75e2b38e8be9/68747470733a2f2f612e642d63642e6e65742f364541414167494f6f4f412d313932302e6a7067",
    ImgCard,
  };
  return (
    <div className="container">
      <Card props={props1} />
      <Card props={props2} />
    </div>
  );
}

export default App;
