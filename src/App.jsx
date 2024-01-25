import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  const images = [
    "https://via.placeholder.com/800x400/ff5733/fff",
    "https://via.placeholder.com/800x400/33ff57/fff",
    "https://via.placeholder.com/800x400/5733ff/fff",
  ];
  return (
    <div className="App">
      <h1 className="title">Simple React Carousel</h1>
      <Carousel images={images} />
    </div>
  );
}
export default App;
