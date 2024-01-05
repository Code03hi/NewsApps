import './App.css';
import React, { Component } from 'react';
import Navbar from './Component/Navbar'
import News from './Component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apiKey = process.env.REACT_NEWS_APP_KEY;

  state = {
    progress: 0,
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    })
  }

  render() {
    return (
      <Router>
        <Navbar></Navbar>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          height={3}
        />
        <Routes>
          <Route path='/' element={<News apiKey={this.apiKey}  setProgress={this.setProgress} pageSize={6} country="in" category="general"></News>}></Route>
          <Route path='/business' element={<News apiKey={this.apiKey}  setProgress={this.setProgress} pageSize={6} country="in" category="business"></News>}></Route>
          <Route path='/entertainment' element={<News apiKey={this.apiKey}  setProgress={this.setProgress} pageSize={6} country="in" category="entertainment"></News>}></Route>
          <Route path='/general' element={<News apiKey={this.apiKey}  setProgress={this.setProgress} pageSize={6} country="in" category="general"></News>}></Route>
          <Route path='/health' element={<News apiKey={this.apiKey}  setProgress={this.setProgress} pageSize={6} country="in" category="health"></News>}></Route>
          <Route path='/science' element={<News apiKey={this.apiKey}  setProgress={this.setProgress} pageSize={6} country="in" category="science"></News>}></Route>
          <Route path='/sports' element={<News apiKey={this.apiKey}  setProgress={this.setProgress} pageSize={6} country="in" category="sports"></News>}></Route>
          <Route path='/technology' element={<News apiKey={this.apiKey}  setProgress={this.setProgress} pageSize={6} country="in" category="technology"></News>}></Route>
        </Routes>
      </Router>
    )
  }
}

