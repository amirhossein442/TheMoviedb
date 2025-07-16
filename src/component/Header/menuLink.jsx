import { Link } from "react-router-dom";
export const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link to="/">Movie</Link>
          <ul className="submenu">
            <li>Popular</li>
            <li>Now playing</li>
            <li>Upcoming</li>
            <li>Top rated</li>
          </ul>
        </li>
        <li>
          <Link to="/tvShow">Tv Show</Link>
          <ul className="submenu">
            <li>Popular</li>
            <li>Airng today</li>
            <li>On tv</li>
            <li>Top rated</li>
          </ul>
        </li>
        <li>
          <Link to="/people">People</Link>
          <ul className="submenu">
            <li>Popular people</li>
          </ul>
        </li>
        <li>
          <Link to="/more">More</Link>
          <ul className="submenu">
            <li>Popular peopless</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
