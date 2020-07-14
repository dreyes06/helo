import React from 'react';
import Routes from './routes'
import Nav from './components/Nav/Nav'
import './App.css';


function App(props) {
  return (
    <div className="App">
      {/* <Routes render={props => (
        <Nav {...props}
        url={this.props.location.path}
        />
      )} /> */}
      <Routes/>
      <Nav/>
    </div>
  );
}

export default App;
