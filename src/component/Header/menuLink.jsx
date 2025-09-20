export const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <a to="*">Movie</a>
          <ul className="submenu">
            <li>Popular</li>
            <li>Now playing</li>
            <li>Upcoming</li>
            <li>Top rated</li>
          </ul>
        </li>
        <li>
          <a to="*">Tv Show</a>
          <ul className="submenu">
            <li>Popular</li>
            <li>Airng today</li>
            <li>On tv</li>
            <li>Top rated</li>
          </ul>
        </li>
        <li>
          <a to="*">People</a>
          <ul className="submenu">
            <li>Popular people</li>
          </ul>
        </li>
        <li>
          <a to="*">More</a>
          <ul className="submenu">
            <li>Popular people</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
