import React from 'react';
import './AboutCard.styles.scss';

const AboutCard = () => {
  return (
    <div className="about-card">
      <h1>About <span>Small Human</span></h1>
      <div className="about-content">
        <p>Small Human was built using React, Redux + Thunk, React Router, and Sass.</p>
        <p>Structure of the project is as follows: </p>
        <ul>
          <li>redux is split between an actions, reducers, and store folder</li>
          <li>app.js acts as the launching point for routes</li>
          <li>pages folder holds components which act as containers</li>
          <li>components folder contain components that are displayed in pages</li>
          <li>every component has its own folder which contains a sass file</li>
          <li>_assets folder contains any usable assets</li>
          <li>data does not persist, but will remain in store as long as page isn't refreshed</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCard;
