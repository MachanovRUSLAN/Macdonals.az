import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faSquareInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

function Footer() {
  const [active, setActive] = useState(false);
  const [call, setCall] = useState(false);
  const [service, setService] = useState(false);
  const [contact, setContact] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const toggleCall = () => {
    setCall(!call);
  };

  const toggleService = () => {
    setService(!service);
  };

  const toggleContact = () => {
    setContact(!contact);
  };

  return (
    <div className="Footer">
      <div className="footer-mobile">
        <div className="footerMobMenu">
          <h1>
            Haqqimizda
            <div className={`AboutUsDown ${active ? "ActiveDown" : ""}`}>
              <h1 className="downh1">Haqqimizda Sehifesi</h1>
              <h1 className="downh1">Tariximiz</h1>
              <h1 className="downh1">Xeberler ve Bildirisler</h1>
              <h1 className="downh1">Siz soruşursunuz:Biz cavablandırırıq</h1>
              <h1 className="downh1">Deyerlerimiz</h1>
            </div>
          </h1>
          <span onClick={toggleActive}>
            <FontAwesomeIcon icon={active ? faMinus : faPlus} />
          </span>
        </div>
        <div className="footerMobMenu">
          <h1>
            Karyera
            <div className={`CarrerDown ${call ? "ActiveDown" : ""}`}>
              <h1 className="downh1">Karyera Sehifesi</h1>
              <h1 className="downh1">
                Insanlarimizla tanis olun:Heyet ve Idareteme
              </h1>
              <h1 className="downh1">Indi muraciet edn</h1>
            </div>
          </h1>
          <span onClick={toggleCall}>
            <FontAwesomeIcon icon={call ? faMinus : faPlus} />
          </span>
        </div>
        <div className="footerMobMenu">
          <h1>
            Xidmetler
            <div className={`ServicesDown ${service ? "ActiveDown" : ""}`}>
              <h1 className="downh1">Xidmetler Sehifesi</h1>
              <h1 className="downh1">Wi-Fi</h1>
              <h1 className="downh1">McDelivery</h1>
              <h1 className="downh1">MacAvto</h1>
              <h1 className="downh1">Mobil Tetbiqi yukleyn</h1>
            </div>
          </h1>
          <span onClick={toggleService}>
            <FontAwesomeIcon icon={service ? faMinus : faPlus} />
          </span>
        </div>
        <div className="footerMobMenu">
          <h1>
            Bizimle Elaqe
            <div className={`contactUs ${contact ? "ActiveDown" : ""}`}>
              <h1 className="downh1">Mobil Tetbiq haqqinda fikirleriniz</h1>
            </div>
          </h1>
          <span onClick={toggleContact}>
            <FontAwesomeIcon icon={contact ? faMinus : faPlus} />
          </span>
        </div>
      </div>

      <div className="head-footer">
        <ul className="about">
          Haqimizda<li> Tariximiz</li>
          <li>Xəbərlər və bildirişlər</li>
          <li>Siz soruşursunuz. Biz cavablandırırıq</li>
          <li>Dəyərlərimiz</li>
        </ul>
        <ul className="carrer">
          Karyera <li> İnsanlarımızla tanış olun: Heyət və idarəetmə</li>
          <li>ndi müraciət edin</li>
        </ul>
        <ul className="services">
          Xidmətlər
          
            <li>Wi-Fi</li>
            <li>McDelivery®</li>
            <li>MakAvto®</li>
            <li>Mobil tətbiqi yükləyin</li>
          
        </ul>

        <ul className="mobile-op">
          Mobil tətbiq haqqında fikirləriniz
          <li>Restoran haqqında fikirləriniz</li>
        </ul>
      </div>

      <div className="play-apps">
        <div className="social-icons">
          <span className="facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </span>
          <span className="youtube">
            <FontAwesomeIcon icon={faYoutube} />
          </span>
          <span className="insta">
            <FontAwesomeIcon icon={faSquareInstagram} />
          </span>
          <span className="linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </span>
        </div>
        <div className="apps-imgs">
          <img
            src="https://www.mcdonalds.az/images/static/app_store_badge.png"
            alt=""
          />
          <img
            src="https://www.mcdonalds.az/images/static/google_play_badge.png"
            alt=""
          />
        </div>
      </div>
      <div className="footer-footer">
        <img
          src="https://www.mcdonalds.az/images/static/mcdonalds-logo.jpg"
          alt=""
        />

        <p>© 2021 McDonald's Bütün hüquqlar qorunur</p>
      </div>
    </div>
  );
}

export default Footer;
