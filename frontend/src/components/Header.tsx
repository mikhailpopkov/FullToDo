import "../scss/main.scss";
import React from "react";
import { Link } from "react-router";

const Header: React.FC = () => {
  return (
    <div className="b-header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src="/img/ToDo-logo.png" alt="Logo" />
          <p className="header__title">
            ToDo List
          </p>
        </Link>
        <div className="header__menu">
          <ul className="header__list">
              <li><Link to="/">Список дел</Link></li>
              <li><Link to="/finance">Финансы</Link></li>
              <li><Link to="/goals">Цели</Link></li>
              <li><Link to="/job">Работа</Link></li>
          </ul>
      </div>
      </div>
    </div>
  )
}

export default Header;
