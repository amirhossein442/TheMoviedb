import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import "swiper/css";
export const Slider = ({ setimgBg }) => {
  const [movies2, setMovies2] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=c749ba85a95fb5a1032d6cc9d8bf39a0"
    )
      .then((res) => res.json())
      .then((data) => setMovies2(data.results))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);
  return (
    <div>
      <Swiper spaceBetween={15} slidesPerView={4} className="slider-swiper">
        {movies2.map((movie, index) => (
          <SwiperSlide key={index} className="slider2">
            <img
                onMouseOver={() => setimgBg(`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`)}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
