import "./App.css";
import { Footer } from "./component/Footer/footer";

import { Header } from "./component/Header/header";
import { Sliders2 } from "./component/Slider-Latest Trailers/Slider2";
import { Sliders1 } from "./component/Slider-Tranding/slider";
import { Sliders3 } from "./component/Slider-What's Popular/slider";
//install css

function App() {
  return (
    <div>
      <Header />
      <Sliders1 />
      <Sliders2 />
      <Sliders3 />
      <Footer />
    </div>
  );
}
export default App;
