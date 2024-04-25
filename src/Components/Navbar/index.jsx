import React, { useState } from "react";
import "./navbar.css";
import "./responsive.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faXmark,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [down, setDown] = useState(false);

  const [menu, setMenu] = useState(false);

  const [bar, setBar] = useState(false);

  const [langBarOpen, setLangBarOpen] = useState(false);

  const [langMenuOpen, setlangMenuOpen] = useState(false);

  const toggleLangMenu = () => {
    setlangMenuOpen(!langMenuOpen);
  };

  const toggleMenu = () => {
    setDown(!down);
  };

  const clickMenu = () => {
    setMenu(!menu);
  };

  const openMenu = () => {
    setBar(true);
  };

  const closeMenu = () => {
    setBar(false);
  };

  const toggleLangBar = () => {
    setLangBarOpen(!langBarOpen);
  };

  return (
    <div className="container">
      <div className="img-logo">
        <img src="https://mcdonalds.az/images/static/mcdonalds-logo.jpg" />
        <div className="bars">
          <FontAwesomeIcon icon={faBars} onClick={openMenu} />
          <div className={`bar-menu ${bar ? "BarOpen" : ""}`}>
            <div className="bar-logo">
              <img
                src="https://mcdonalds.az/images/static/mcdonalds-logo.jpg"
                alt=""
              />
              <span className="close-bar">
                <FontAwesomeIcon icon={faXmark} onClick={closeMenu} />
              </span>
            </div>

            <div className="lang">
              <p>
                Dil
                <div className={`bar-lang ${langBarOpen ? "lang-open " : ""}`}>
                  <p>Azerbaijan</p>
                  <p>Russian</p>
                  <p>Englis</p>
                </div>
              </p>
              <span className="open-langBar" onClick={toggleLangBar}>
                <FontAwesomeIcon icon={langBarOpen ? faMinus : faPlus} />
              </span>
            </div>
            <div className="main-bar">
              <p>Ana sehife</p>
              <p onClick={toggleLangMenu}>
                Menyumuz
                <ul className={`down-list-mob ${langMenuOpen ? "close" : ""}`}>
                  <li className="list-item-mob">
                    <a href="#">
                      <img
                        src="https://mcdonalds.az/images/11a5954fd4ef6b2b418eb3d41aa84a8f.png"
                        alt=""
                      />{" "}
                      <p className="food-name-mob">Seher yemeyi</p>
                    </a>
                  </li>

                  <li className="list-item-mob">
                    <a href="#">
                      <img
                        src="https://mcdonalds.az/images/5d61dc895b83f47eafc0f6cbfb353bad.png"
                        alt=""
                      />{" "}
                      <p className="food-name-mob">Seher yemeyi</p>
                    </a>
                  </li>

                  <li className="list-item-mob">
                    <a href="#">
                      <img
                        src="https://mcdonalds.az/images/bf93706e65a4eb7a0bec356f94053f4e.jpg"
                        alt=""
                      />{" "}
                      <p className="food-name-mob">Seher yemeyi</p>
                    </a>
                  </li>

                  <li className="list-item-mob">
                    <a href="#">
                      <img
                        src="https://mcdonalds.az/images/867cff5309d79402a604b6b8b6f6fcce.jpg"
                        alt=""
                      />{" "}
                      <p className="food-name-mob">Seher yemeyi</p>
                    </a>
                  </li>

                  <li className="list-item-mob">
                    <a href="#">
                      <img
                        src="https://mcdonalds.az/images/d53a391310a492a79740d611bbfd53b9.jpg"
                        alt=""
                      />{" "}
                      <p className="food-name-mob">Seher yemeyi</p>
                    </a>
                  </li>

                  <li className="list-item-mob">
                    <a href="#">
                      <img
                        src="https://mcdonalds.az/images/5226794fdd6873f66f37ae0397286b8c.png"
                        alt=""
                      />{" "}
                      <p className="food-name-mob">Seher yemeyi</p>
                    </a>
                  </li>

                  <li className="list-item-mob">
                    <a href="#">
                      <img
                        src="https://mcdonalds.az/images/11a5954fd4ef6b2b418eb3d41aa84a8f.png"
                        alt=""
                      />{" "}
                      <p className="food-name-mob">Seher yemeyi</p>
                    </a>
                  </li>

                  <li className="list-item-mob">
                    <a href="#">
                      <img
                        src="https://mcdonalds.az/images/5465ab8529156a71e76c3d569863862b.png"
                        alt=""
                      />{" "}
                      <p className="food-name-mob">Seher yemeyi</p>
                    </a>
                  </li>

                  <li className="list-item-mob">
                    <a href="#">
                      <img
                        src="https://mcdonalds.az/images/fed86781205af0e755e7553dbf0da55b.jpg"
                        alt=""
                      />{" "}
                      <p className="food-name-mob">Seher yemeyi</p>
                    </a>
                  </li>

                  <li className="list-item-mob">
                    <a href="#">
                      <img
                        src="https://mcdonalds.az/images/879d7da33c37647f84a6a22e87c658b3.png"
                        alt=""
                      />{" "}
                      <p className="food-name-mob">Seher yemeyi</p>
                    </a>
                  </li>
                  <div className="wiew-button-mob">
                    <button className="wiew-mob">Wiew Full Menu</button>
                  </div>
                </ul>
              </p>
              <span className="open-langMenu" onClick={toggleLangMenu}>
                <FontAwesomeIcon icon={langMenuOpen ? faMinus : faPlus} />
              </span>
              <p>Yemeklerimiz Haqqinda</p>
              <p>Restoranlarin unvanlari</p>
            </div>

            <div className="karyer">
              <p>e-mektublara abonelik</p>
              <p>Karyera</p>
            </div>
          </div>
        </div>
        <div className="menu">
          <ul className="list">
            <li>
              Dil
              <span className="down-icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
              <ul className={`language-part ${down ? "active" : ""}`}>
                <li>azerbaycan</li>
                <li>rus</li>
                <li>english</li>
              </ul>
            </li>
            <li>E-məktublara abunəlik</li>
            <li>Karyera</li>
          </ul>
          <ul className="bottom-menu">
            <li className="menu-item" onClick={clickMenu}>
              Menyumuz
              <span className="menu-icon">
                {" "}
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
              <div className={`down-menu ${menu ? "open" : ""}`}>
                <div className="down-part">
                  <ul className="down-list">
                    <li className="list-item">
                      <a href="#">
                        <img
                          src="https://mcdonalds.az/images/11a5954fd4ef6b2b418eb3d41aa84a8f.png"
                          alt=""
                        />{" "}
                        <p className="food-name">Seher yemeyi</p>
                      </a>
                    </li>

                    <li className="list-item">
                      <a href="#">
                        <img
                          src="https://mcdonalds.az/images/5d61dc895b83f47eafc0f6cbfb353bad.png"
                          alt=""
                        />{" "}
                        <p className="food-name">Seher yemeyi</p>
                      </a>
                    </li>

                    <li className="list-item">
                      <a href="#">
                        <img
                          src="https://mcdonalds.az/images/bf93706e65a4eb7a0bec356f94053f4e.jpg"
                          alt=""
                        />{" "}
                        <p className="food-name">Seher yemeyi</p>
                      </a>
                    </li>

                    <li className="list-item">
                      <a href="#">
                        <img
                          src="https://mcdonalds.az/images/867cff5309d79402a604b6b8b6f6fcce.jpg"
                          alt=""
                        />{" "}
                        <p className="food-name">Seher yemeyi</p>
                      </a>
                    </li>

                    <li className="list-item">
                      <a href="#">
                        <img
                          src="https://mcdonalds.az/images/d53a391310a492a79740d611bbfd53b9.jpg"
                          alt=""
                        />{" "}
                        <p className="food-name">Seher yemeyi</p>
                      </a>
                    </li>

                    <li className="list-item">
                      <a href="#">
                        <img
                          src="https://mcdonalds.az/images/5226794fdd6873f66f37ae0397286b8c.png"
                          alt=""
                        />{" "}
                        <p className="food-name">Seher yemeyi</p>
                      </a>
                    </li>

                    <li className="list-item">
                      <a href="#">
                        <img
                          src="https://mcdonalds.az/images/11a5954fd4ef6b2b418eb3d41aa84a8f.png"
                          alt=""
                        />{" "}
                        <p className="food-name">Seher yemeyi</p>
                      </a>
                    </li>

                    <li className="list-item">
                      <a href="#">
                        <img
                          src="https://mcdonalds.az/images/5465ab8529156a71e76c3d569863862b.png"
                          alt=""
                        />{" "}
                        <p className="food-name">Seher yemeyi</p>
                      </a>
                    </li>

                    <li className="list-item">
                      <a href="#">
                        <img
                          src="https://mcdonalds.az/images/fed86781205af0e755e7553dbf0da55b.jpg"
                          alt=""
                        />{" "}
                        <p className="food-name">Seher yemeyi</p>
                      </a>
                    </li>

                    <li className="list-item">
                      <a href="#">
                        <img
                          src="https://mcdonalds.az/images/879d7da33c37647f84a6a22e87c658b3.png"
                          alt=""
                        />{" "}
                        <p className="food-name">Seher yemeyi</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="wiew-button">
                  <button className="wiew">Wiew Full Menu</button>
                </div>
              </div>
            </li>
            <li className="menu-item">Yeməklərimiz haqqında</li>
            <li className="menu-item">Restoranların ünvanları</li>
          </ul>
        </div>
      </div>

      <div className="button-order">
        <button className="order-now">indi sifaris et</button>
      </div>
    </div>
  );
}

export default Navbar;
