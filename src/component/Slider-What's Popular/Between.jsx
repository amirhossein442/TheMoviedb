import { useState } from "react";

export const Between = () => {
  const [activeTab, setActiveTab] = useState("today");
  return (
    <>
      <div className="slider-between">
        <div>
          <h3 className="Trending">What's Popular</h3>
        </div>
        <div className="sliderBetween-buttons">
          <h3
            className={`Today ${activeTab === "today" ? "active" : ""}`}
            onClick={() => setActiveTab("today")}
          >
            <a>Today</a>
          </h3>
          <h3
            className={`This-week ${activeTab === "week" ? "active" : ""}`}
            onClick={() => setActiveTab("week")}
          >
            <a>This week</a>
          </h3>
        </div>
      </div>
    </>
  );
};
