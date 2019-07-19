import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      STATIC_MAP_API_KEY: 'AIzaSyB9xDbZ44YCk37fQ3SZxQe7ERqXKki8XE4',
    }
  }
  render() {
    return (
      <React.Fragment>
        <div>

        <img id="map" alt="Map of search query" src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.location.latitude}%2c%20${this.props.location.longitude}&zoom=13&size=600x300&maptype=roadmap
  &key=AIzaSyB9xDbZ44YCk37fQ3SZxQe7ERqXKki8XE4`}></img>
        </div>
      </React.Fragment>
    );
  }
}

export default Map;
