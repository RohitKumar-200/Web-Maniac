import React from "react";
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__headingContainer">
        <div className="footer__line"></div>
        <h2 className="footer__heading">GET IN TOUCH</h2>
        <div className="footer__line"></div>
      </div>
      <p className="footer__details">
        The Smart Mall, India
      </p>
      <p className="footer__details">
        184-D N2 Road, Lal Bangla, Kanpur, Uttar Pradesh 208007
      </p>
      <p className="footer__details">
        Phone : +91 93593XXXXX
        <br />
        Email : info@thesmartbookstore.in
      </p>
      <div class="footer__socialMediaContainer">
              <div class="footer__socialMedia">
                <FacebookIcon />
              </div>
              <div class="footer__socialMedia">
                <TwitterIcon />
              </div>
              <div class="footer__socialMedia">
                <LinkedInIcon />
              </div>
            </div>
    </div>
  );
}

export default Footer;
