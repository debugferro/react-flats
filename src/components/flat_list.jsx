import React, { Component } from 'react';

import Flat from './flat';

class FlatList extends Component {
  renderList = () => {
    const { flatsData, updateFunction, selected } = this.props;
    return flatsData.map((data, index) => {
      return (
        <Flat key={index}
          id={index}
          name={data.name}
          price={data.price}
          currency={data.priceCurrency}
          imageUrl={data.imageUrl}
          lng={data.lng}
          lat={data.lat}
          updateFunction={updateFunction}
          selected={selected}
        />);
    });
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
