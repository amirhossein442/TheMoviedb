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
        backgroundImage: imgBg
          ? `linear-gradient(to right, #e6efef7a, #196b6a72), url(${imgBg})`
          : "linear-gradient(to right, #7af4ff93, #196b6ade)",
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
