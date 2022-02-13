import react from 'react';
import './App.css';

class Clock extends react.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  render(){
    return(
      <div>
        <h1>Hola, Mundo!</h1>
        <h2>Son las {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <Clock></Clock>
      </main>      
    </div>
  );
}

export default App;
