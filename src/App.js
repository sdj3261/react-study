import logo from './logo.svg';
import './App.css';
import { Component, Fragment } from 'react';

class App2 extends Component {
  render() {
    const name = 'react';
    return <div className="react"> {name} </div>;
  }
}

function App() {
  const name = '리엑트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };
  return (
    <>
      <div className="react" style={style}>
        {name} 입니다.
      </div>
      <img src={logo} alt="My logo" height="300" width="200" />
      <br />
      <input />
    </>
  );
}

export default App;
