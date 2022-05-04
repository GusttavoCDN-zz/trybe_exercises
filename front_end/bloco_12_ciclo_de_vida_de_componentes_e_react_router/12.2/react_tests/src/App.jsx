import React from 'react';

const ComponentePai = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
        </ComponentePai>
      </div>
    )
  }
}

export default App;
