import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../scss/_base.scss';
import '../scss/_core.scss';
import '../scss/_layout.scss';
import '../scss/_module.scss';
import '../scss/_vars.scss';
import Header from './header';
import SearchFrom from './search-form';
import Map from './map';
import SearchResult from './search-results';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      location: {},
    }
  }

  render() {
    return (
      <div className="App">
      <Header />
      <SearchFrom />
      <SearchResult />
    </div>
    );
  }
}

