import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const tabs = ["Popular", "Streaming", "On TV", "For Rent", "In Theaters"];

export const Between = () => {
  const [activeTab, setActiveTab] = useState("Popular");

  return (
    <div className="beetwen-container2">
      <h2 className="slider-title">Latest Trailers</h2>
      <div className="tab-wrapper">
        <Swiper spaceBetween={5} slidesPerView={5} className="tab-swiper">
          {tabs.map((tab, index) => (
            <SwiperSlide key={index}>
              <li
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
