import React from "react";
import FooterActionList from "./FooterActionList";
import ScrollToTopButton from './ScrollToTop/ScrollToTopButton';
import './ScrollToTop/ScrollToTopButton.css';
function Footer() {
  return (
    <footer id="Footer" className="relative z-50">
      <FooterActionList>
      </FooterActionList>
      <ScrollToTopButton/>
    </footer>
  );
}

export default Footer;
