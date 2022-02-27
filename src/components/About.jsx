import React from 'react';
import githubIcon from '../img/github.svg';
import facebookIcon from '../img/facebook.svg';
import instagramIcon from '../img/instagram.svg';

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="icons">
        <a rel="noreferrer" target="_blank" href="https://github.com/IlyaEru"><img src={githubIcon} alt="github" /></a>
        <img src={facebookIcon} alt="facebook" />
        <img src={instagramIcon} alt="instagram" />
      </div>
    </div>
  );
}
