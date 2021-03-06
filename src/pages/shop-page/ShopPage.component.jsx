import React from 'react';
import ShopItem from '../../components/shop-item/ShopItem.component';
import { withRouter } from 'react-router-dom';
import './ShopPage.styles.scss';

const ShopPage = ({ history }) => {
  return (
    <section id="shop-page">
      <div
        className="back-arrow"
        onClick={() => {
          history.push(`/small-human/`)
        }}
      >
        <img
          className="arrow"
          alt="Back arrow"
          src={require('../../_assets/img/back.png')}
        />
      </div>
      <ShopItem />
    </section>
  );
};

export default withRouter(ShopPage);
