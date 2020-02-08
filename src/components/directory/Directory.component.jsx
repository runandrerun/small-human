import React, { Component } from 'react';
import MenuItem from '../menu-item/MenuItem.component';
import { connect } from 'react-redux';
import './Directory.styles.scss';

class Directory extends Component {
  render() {
    const { plants } = this.props;
    return (
    <div id="directory-menu">
      {
        plants.map(({ id, ...otherPlantProps }) => {
          return <MenuItem key={id} {...otherPlantProps} />
        })
      }
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
