import "./App.css";

import { Header } from "./component/Header/header";
import { Sliders2 } from "./component/Slider-Latest Trailers/Slider2";
import { Sliders1 } from "./component/Slider-Tranding/slider";
//install css

function App() {
  return (
    <div>
      <Header />
      <Sliders1 />
      <Sliders2 />
    </div>
  );
}
export default App;
