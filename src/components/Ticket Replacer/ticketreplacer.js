import React,{ Component } from 'react';
import './ticketreplacer.css';

class ticket extends Component{
    state={
        persons:[
            {name:'xyz', age:0}
        ],
        Ticket:[
            {from: 'Kasmir', to:'kanyakumari'}
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
            <h1>{this.state.persons[0].name}{this.state.persons[0].age}{this.state.Ticket[0].from}{this.state.Ticket[0].to}</h1>
            <form>
                <input type="text" placeholder="Enter your name" onChange={this.ticketHandlerName}/>
                <input type="text" placeholder="Enter your age" onChange={this.ticketHandlerAge}/>
                <input type="text" placeholder="Your Current Station" onChange={this.ticketHandlerStart}/>
                <input type="text" placeholder="Your Destination" onChange={this.ticketHandlerDest}/>
            </form>
        </div>

    );
};
}
export default ticket;