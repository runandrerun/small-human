import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar.component';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop-page/ShopPage.component';
import AboutPage from './pages/about-page/AboutPage.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' />
          <Route exact path='/shop/:shopId' component={ShopPage}/>
          <Route exact path='/about' component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
