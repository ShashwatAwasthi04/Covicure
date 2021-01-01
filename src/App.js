import React, {Component} from 'react';
import './App.css';
import Homepage from './components/Home/homepage';
import Ticket from './components/Ticket Replacer/ticketreplacer';
import Navbar from './components/navbar';

class App extends Component {
  render(){
  return (
    <div>
    <Navbar />
    <div className="App">
      <h3>Welcome to the E-Ticketing System</h3>
      <p>Please enter your name and age below for the ticket recognizer</p>
      <Homepage />
      <Ticket />
    </div>
    </div>
  );
  };
}

export default App;
