import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

const App = () => {
  // window.navigator.geolocation.getCurrentPosition(console.log, console.log);
  // new Date().getMonth();
  window.navigator.geolocation.getCurrentPosition((pos)=>{
    return (
      <div>
        Hello World! ${pos}
        <SeasonDisplay />
      </div>
    );
  }, (err)=>{
    return (
      <div>
        Hello World! ${err}
        <SeasonDisplay />
      </div>
    );
  });
  // return (
  //   <div>
  //     Hello World!
  //     <SeasonDisplay />
  //   </div>
  // );
}

ReactDOM.render(<App />, document.querySelector('#root'));