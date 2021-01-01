import React,{ Component } from 'react';
import './ticketreplacer.css';
import travel from './img1.jpg';

class ticket extends Component{
    state={
        persons:[
            {name:'xyz', age:0}
        ],
        Ticket:[
            {from: 'Kashmir', to:'kanyakumari'}
        ]
    }

    ticketHandlerName = (event) =>{
        this.setState({
            persons:[
                {name:event.target.value, age:this.state.persons[0].age}
            ] 
        })
    }

    ticketHandlerAge = (event) =>{
        this.setState({
            persons:[
                {name:this.state.persons[0].name, age:event.target.value}
            ] 
        })
    }

    ticketHandlerStart= (event) =>{
        this.setState({
            Ticket:[
                {from:event.target.value, to:this.state.Ticket[0].to}
            ] 
        })
    }

    ticketHandlerDest = (event) =>{
        this.setState({
            Ticket:[
                {from:this.state.Ticket[0].from, to:event.target.value}
            ] 
        })
    }
    render(){
    return(
        <div>
            <form>
                <input type="text" placeholder="Enter your name" onChange={this.ticketHandlerName}/>
                <input type="text" placeholder="Enter your age" onChange={this.ticketHandlerAge}/>
                <input type="text" placeholder="Your Current Station" onChange={this.ticketHandlerStart}/>
                <input type="text" placeholder="Your Destination" onChange={this.ticketHandlerDest}/>
            </form>
            <div className="ticketshow">
                <h1>Welcome to Spurs City Travels</h1>
                <p>This is your ticket, For a Print copy, press print below</p>
                <h6>Name: {this.state.persons[0].name} Age: {this.state.persons[0].age}</h6>
                <img src={travel} alt="Location Image"/>
                <h4>Your Travel Information</h4>
                <h6>Source : {this.state.Ticket[0].from} Destination:{this.state.Ticket[0].to}</h6>
            </div>
        </div>
        
    );
};
}
export default ticket;