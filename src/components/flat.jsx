import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { updateFunction, lng, lat, id } = this.props;
    updateFunction(lng, lat, id);
  }

  render() {
    const { selected, id, imageUrl, price, priceCurrency, name } = this.props;
    const cardClass = (selected === id) ? "card active" : "card";
    const cardStyle = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`;
    return (
      <div
        className={cardClass}
        onClick={this.handleClick}
        style={{ backgroundImage: cardStyle }}
      >
        <div className="card-category">
          {price}
          {priceCurrency}
        </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" />
      </div>
    );
  }
}

export default Flat;
