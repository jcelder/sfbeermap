import React, { Component } from 'react';
import Map from '../Map/map';
import '../../../node_modules/normalize.css/normalize.css';
import sampleData from '../../../sampleOpenBreweryDB.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breweries: [],
    };
  }

  componentDidMount() {
    this.setState({
      breweries: sampleData,
    });
  }

  render() {
    const { breweries } = this.state;
    console.log(breweries);
    return (
      <div>
        <h1>San Francisco Brewery Map</h1>
        <Map breweries={breweries} />
      </div>
    );
  }
}

export default App;
