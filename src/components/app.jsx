import React, { Component } from 'react';

import FlatList from './flat_list';
import flats from '../data/flats';
import Map from './map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allFlats: flats,
      selectedLat: 0,
      selectedLng: 0,
      selected: null
    };
  }

  updateSelected = (lng, lat, id) => {
    this.setState({
      selectedLat: lat,
      selectedLng: lng,
      selected: id
    });
  }

  render() {
    const { allFlats, selected, selectedLng, selectedLat } = this.state;
    return (
      <div>
        <FlatList flatsData={allFlats} updateFunction={this.updateSelected} selected={selected} />
        <Map flatsData={allFlats} lng={selectedLng} lat={selectedLat} />
      </div>
    );
  }
}

export default App;
