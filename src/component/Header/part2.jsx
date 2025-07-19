
export const Header2 = () => {
  return (
    <div className="pic-search" >
      <h1>
        Welcome.
        <br /> Millions of movies, TV shows and people to discover. Explore now.
      </h1>
      <div className="search-box">
        <input 
          type="text"
          placeholder="Search for a movie, tv show, person..."
        />
        <button>Search</button>
      </div>
    </div>
  );
};
