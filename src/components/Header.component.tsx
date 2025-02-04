export const Header = () => {
  return (
    <header className="header">
      <figure className="header__logo">
        <img
          className="header__logo-image"
          src="/img/logo_nathalia_completo.png"
        />
        <figcaption className="header__logo-text hidden">
          Logo Nathalia Correia - Fisioterapeuta Neurofuncional
        </figcaption>
      </figure>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a
              className="nav__link"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#"
            >
              Atuação
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__social">
        <a href="#">
          <img
            className="header__social-icon"
            src="/img/icons/icon_instagram.svg"
            alt="instagram"
          />
        </a>
        <a href="#">
          <img
            className="header__social-icon"
            src="/img/icons/icon_linkedin.svg"
            alt="linkedin"
          />
        </a>
        <a href="#">
          <img
            className="header__social-icon"
            src="/img/icons/icon_whatsapp.svg"
            alt="whatsapp"
          />
        </a>
      </div>
    </header>
  );
};
