import React from 'react';
import AboutCard from '../../components/about-card/AboutCard.component';
// import history from '../../history';
import './AboutPage.styles.scss';

const AboutPage = () => {
  return (
    <section id="about-page">
      <AboutCard />
    </section>
  );
};

export default AboutPage;

// history.push({ pathname: "/small-human/" });
