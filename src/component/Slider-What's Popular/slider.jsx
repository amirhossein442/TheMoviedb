import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Between } from "./Between";

export const Sliders3 = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=c749ba85a95fb5a1032d6cc9d8bf39a0"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);
  console.log(movies)
  return (
    <>
      <Between />
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={5}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="slider">
              <img
                onClick={() =>
                  window.open(`https://www.themoviedb.org/movie/${movie.id}`)
                }
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{Math.round(movie.vote_average * 10)}</p>
              <h3>{movie.title}</h3>
              <h4>{new Date(movie.release_date).toLocaleDateString()}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
