import React from 'react';
import './AboutCard.styles.scss';

const AboutCard = () => {
  return (
    <div className="about-card">
      <h1>About <span>Small Human</span></h1>
      <div className="about-content">
        <p>Small Human was built using React, Redux + Thunk, React Router, Flexbox and Sass – no CSS libraries were used.</p>
        <p>Structure of the project is as follows: </p>
        <ul>
          <li>redux is split between an actions, reducers, and store folder</li>
          <li>app.js acts as the launching point for routes – due to the way how gh-pages works, I added edge cases for links</li>
          <li>pages folder holds components which act as containers</li>
          <li>components folder contain components that are displayed in pages</li>
          <li>every component has its own folder which contains a sass file</li>
          <li>components were created to be as reusable as possible – heart-like item-content components are two examples</li>
          <li>_assets folder contains any usable assets</li>
          <li>data does not persist, but will remain in the redux store as long as the page isn't refreshed</li>
        </ul>
        <p>If you wish to run the app locally, please clone it down from my <a href="https://github.com/runandrerun/small-human" target="_blank" rel="noopener noreferrer">repo</a>. Once cloned, please cd into the folder (cd small-human), and run npm install. Afterwards, run npm start.</p>
      </div>
    </div>
  );
};

export default AboutCard;
