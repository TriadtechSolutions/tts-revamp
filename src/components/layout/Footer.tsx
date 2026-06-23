import Image from "next/image";
import Link from "next/link";
import { getSiteData } from "@/lib/content";

export default function Footer() {
  const { menus, settings } = getSiteData();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer_first">
            <a href={settings.logoLink} target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={settings.footerLogo}
                alt="TriadTech Solutions"
                className="footer-logo"
                width={240}
                height={70}
              />
            </a>
            <p className="footer-description">{settings.tagline}</p>
            <div className="socialmedia_icons">
              <a href={settings.instagramLink} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/images/instagram.svg"
                  alt="Instagram"
                  className="instagram-logo"
                  width={35}
                  height={35}
                />
              </a>
              <a href={settings.facebookLink} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/images/facebook.svg"
                  alt="Facebook"
                  className="facebook-logo"
                  width={35}
                  height={35}
                />
              </a>
              <a href="https://x.com/TriadtechS63725" target="_blank" rel="noopener noreferrer">
                <Image src="/images/x.svg" alt="X" className="x-logo" width={35} height={35} />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer_second">
            <h3>SERVICES</h3>
            <nav className="footer-menu" role="navigation" aria-label="services">
              <ul className="footer-menu__list">
                {menus.services.map((item) => (
                  <li key={item.title} className="footer-menu__item">
                    <Link href={item.url} className="footer-menu__link">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="col-lg-3 col-md-6 footer_third">
            <h3>COMPANY</h3>
            <nav className="footer-menu" role="navigation" aria-label="footer">
              <ul className="footer-menu__list">
                {menus.footer.map((item) => (
                  <li key={item.title} className="footer-menu__item">
                    <Link href={item.url} className="footer-menu__link">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="col-lg-3 col-md-6 footer_fourth">
            <h3>{settings.contactHeading}</h3>
            <div className="contact-info">
              <p className="phone">
                <i className="fa-solid fa-phone" />
                <a href={`tel:${settings.contactPhone}`}>{settings.contactPhone}</a>
              </p>
              <p className="email">
                <i className="fa-regular fa-envelope" />
                <a href={`mailto:${settings.contactEmail}`}>{settings.contactEmail}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
