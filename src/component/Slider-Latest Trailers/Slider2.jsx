import { useState } from "react";
import { Between } from "./Between";
import { Slider } from "./slider";

export const Sliders2 = () => {
  const [imgBg, setimgBg] = useState(null);
  return (
    <div
      style={{
        width: "100%",
        height: "20em",
        padding: "0 0",
        backgroundImage: imgBg
          ? `linear-gradient(to right, #000000be, #54646372), url(${imgBg})`
          : "linear-gradient(to right, #0d253f, #0d253f94)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
      }}
    >
      <Between />
      <Slider setimgBg={setimgBg} />
    </div>
  );
};
