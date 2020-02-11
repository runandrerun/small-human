import React, { Component, lazy, Suspense } from 'react';
import Loader from '../loader/Loader.component';
import { connect } from 'react-redux';
import './Directory.styles.scss';

const MenuItem = lazy(() => import('../menu-item/MenuItem.component'));

class Directory extends Component {
  render() {
    const { plants } = this.props;
    return (
    <div id="directory-menu">
      <Suspense fallback={<Loader />}>
        {
          plants.map(({ id, ...otherPlantProps }) => {
            return (
              <MenuItem
                key={id}
                {...otherPlantProps}
              />
            )
          })
        }
      </Suspense>
    </div>
    )
  };
};

const mapStateToProps= (state) => {
  return {
    plants: state.plantsState.plants
  };
};

export default connect(mapStateToProps)(Directory);
