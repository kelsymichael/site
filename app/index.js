import React from 'react';
import ReactDOM from 'react-dom'
require('./index.css');

// state
// lifecycle event
// UI <-- required

class App extends React.Component {
  render(){
    return <h1> helloworld </h1>
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);