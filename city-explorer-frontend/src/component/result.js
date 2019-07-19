import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResults: {
        weathers: [],
        yelp: [],
        hiking: [],
        events: [],
        movies: []
      }
    }
  }

// getAllData = async (value) => {
//   this.setState({apiResults: {
//     weathers: weathersResults.body,
//     movies: moviesResults.body,
//     hiking: trailsResults.body,
//     yelp: yelpResults.body
//   } })
// }


  render() {
    return (
      <React.Fragment>
        <div class="column-container ">
          {/* <!-- Section for weather data --> */}
          <section>
            <h3>Results from the Dark Sky API</h3>
            <ul class="weather-results">{this.state.apiResults.weathers.map(weathers => {
              JSON.stringify(weathers);
            })}</ul>
            {/* <ul>hello</ul> */}
          </section>

          {/* /* <!-- Section for Yelp data --> */}
          <section class="yelp-container">
            <h3>Results from the Yelp API</h3>
            <ul class="yelp-results">{this.state.apiResults.yelp.map(yelp =>
              JSON.stringify(yelp)
            )}</ul>
            {/* <ul>hello</ul> */}
          </section>

          {/* <!-- Section for Eventbrite data --> */}
          <section>
            <h3>Results from the Eventbrite API</h3>
            <ul class="events-results"> {this.state.apiResults.events.map(events => {
              JSON.stringify(events);
            })}</ul>
            {/* <ul>heloo</ul> */}
          </section>

          {/* <!-- Section for movie data --> */}
          <section class="movie-container">
            <h3>Results from The Movie DB API</h3>
            <ul class="movies-results"> {this.state.apiResults.movies.map(movies => {
          JSON.stringify(movies);
        })}</ul>
        {/* <ul>hello</ul> */}
          </section>
          {/* 
          <!-- Section for trails data --> */}
          <section>
            <h3>Results from the Hiking Project API</h3>
            <ul class="trails-results"> {this.state.apiResults.hiking.map(hiking => {
          JSON.stringify(hiking);
        })}</ul>
        {/* <ul>hello</ul> */}
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Result;