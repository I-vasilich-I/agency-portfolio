import logo from "../../assets/images/logo.svg";
import { NAV_LINKS } from "../../constants";
import "./Header.scss";

const Header = (): JSX.Element => (
  <header className="header">
    <div className="wrapper wrapper__header">
      <h1 className="hidden">Agency</h1>
      <div className="header__top">
        <img src={logo} alt="logo" className="header__logo" />
        <nav className="nav">
          <ul className="nav__links">
            {NAV_LINKS.map(({ href, name }, id) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={id} className="nav__link">
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button type="button" className="button">
          Contact
        </button>
      </div>
      <div className="header__bottom">
        <h2>Portfolio</h2>
        <p>Agency provides a full service range including technical skills, design, business understanding.</p>
      </div>
    </div>
  </header>
);

export default Header;
