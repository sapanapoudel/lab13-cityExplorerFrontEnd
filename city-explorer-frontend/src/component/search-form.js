import React from 'react';
import Form from './form';
import Map from './map';
import superagent from 'superagent';

export default class SearchFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      backEndUrl: 'https://city-explorer-backend.herokuapp.com',
      STATIC_MAP_API_KEY: '',
      googleResults: {
        search_query: "seattle",
        formatted_query: "Seattle, WA, USA",
        latitude: "47.606210",
        longitude: "-122.332071"
      },
    }
  }

  getApiKey = (value) => {
    this.setState({ STATIC_MAP_API_KEY: value});
    localStorage.setItem('STATIC_MAP_API_KEY', value);
  }

  getBackendUrl = (value) => {
    this.setState({ backEndUrl: value });
  }


  getAllData = async (value) => {
    const googleResults = await superagent.get(this.state.backEndUrl + '/location').query({data: value})
    console.log(googleResults);
    this.setState({ googleResults: googleResults.body });

    const weathersResults = await superagent.get(this.state.backEndUrl + '/weather').query({ data: googleResults.body });
    const moviesResults = await superagent.get(this.state.backEndUrl + '/movies').query({ data: googleResults.body });
    const trailsResults = await superagent.get(this.state.backEndUrl + '/trails').query({ data: googleResults.body });
    const yelpResults = await superagent.get(this.state.backEndUrl + '/yelp').query({ data: googleResults.body });
    const eventsResults = await superagent.get(this.state.backEndUrl + '/event').query({ data: googleResults.body });

    this.setState({apiResults: {
      weathers: weathersResults.body,
      movies: moviesResults.body,
      hiking: trailsResults.body,
      yelp: yelpResults.body,
      events: eventsResults.body
    } })
  
  }
  render(){
    return (
      <React.Fragment> 
        {!this.state.STATIC_MAP_API_KEY && 
        <Form id="geocode-form"  onClick={this.getApiKey} formName="Maps key"></Form>}
        <Form  id="url-form" onClick={this.getBackendUrl} formName="Backend Url"></Form> 
        <Form id="search-form" onClick={this.getAllData} formName="Search Location"></Form> 
        <Map location= {this.state.googleResults} STATIC_MAP_API_KEY={this.state.STATIC_MAP_API_KEY}/>
      </React.Fragment>
    );
  }


}