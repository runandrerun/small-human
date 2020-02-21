import React from 'react';
import Directory from '../../components/directory/Directory.component';
import history from '../../history';
import './Homepage.styles.scss';


const Homepage = () => {
  return (
    <section id="homepage">
        <Directory />
    </section>
  );
};

export default Homepage;

history.push({ pathname: "/small-human/" });
