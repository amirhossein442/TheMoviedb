import logoFooter from "../../img/header-logo.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logoFooter} alt="logoFooter" />
      </div>
      <div>
        <h3>The Basics</h3>
        <p>
          About TMDB Contact Us Support Forums API Documentation System Status
        </p>
      </div>
      <div>
        <h3>Get Involved</h3>
        <p>Contribution Bible Add New Movie Add New TV Show</p>
      </div>
      <div>
        <h3>Community</h3>
        <p>Guidelines Discussions Leaderboard</p>
      </div>
      <div>
        <h3>Legal</h3>
        <p>Terms of Use API Terms of Use Privacy Policy DMCA Policy</p>
      </div>
    </div>
  );
};
