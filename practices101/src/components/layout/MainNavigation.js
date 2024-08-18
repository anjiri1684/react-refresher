import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <u>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </u>
      </nav>
    </header>
  );
}

export default MainNavigation;
