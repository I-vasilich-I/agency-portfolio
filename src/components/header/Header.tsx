import logo from '../../assets/images/logo.svg'; 
import './Header.scss';

const Header = (): JSX.Element => {
  const links = [
    {
      href: '/',
      name: 'About',
    },
    {
      href: '/',
      name: 'Services',
    },
    {
      href: '/',
      name: 'Pricing',
    },
    {
      href: '/',
      name: 'Blog',
    },
  ];

  return (
    <header className="header">
      <div className="wrapper wrapper__header">
        <h1 className="hidden">Agency</h1>
        <div className="header__top">
          <img src={logo} alt="logo" className="header__logo" />
          <nav className="nav">
            <ul className="nav__links">
              {links.map(({href, name}, id) => (
                <li key={id} className="nav__link">
                  <a href={href}>{name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="header__button">Contact</button>
        </div>
        <div className="header__bottom">
          <h2>Portfolio</h2>
          <p>Agency provides a full service range including technical skills, design, business understanding.</p>
        </div>
      </div>
    </header>
  )
}

export default Header;