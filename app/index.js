import React from 'react';
import ReactDOM from 'react-dom'
require('./index.css');
require('!raw!stylus!./index.styl');

// state
// lifecycle event
// UI <-- required

const Test = () => <h2> hererer </h2>

class App extends React.Component {
  render(){
    return(
      <div>
        <h1> helloworld </h1>
        <Test />
        <style jsx> {`
          
          h1 {
            font-size: 22px;
          }

        `}
        </style>
      </div>
    ) 
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);