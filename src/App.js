import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {

  render() {
    let time = new Date();
    return (      
      <div className="App">
        {list.map((item, index) => {
          return (            
            <div key={item.objectID}>
              <p>{index}</p>
              <p>{item.author}</p>
              <p>{item.url}</p>
              <p>{time.toString()}</p>
            </div>
          )
        })}
      </div>

    );
  }
}

export default App;
