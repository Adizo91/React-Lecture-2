/* eslint-disable no-useless-constructor */
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state ={
      name: {f_name:"Adi", l_name:"Zo"},
      company: "ZIM"
    };
  }
  render(){
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi! {this.state.name.f_name} {this.state.name.l_name} works in 
          {this.state.company}
        </p>
       <button onClick={()=>{
        this.setState(
          ()=> {
            return {name: {f_name: "Dida", l_name: "Zor"}}},
            ()=> {
              console.log("state changed", this.state)
            }
          );
       }} >Change Name</button>
      </header>
    </div>
  );
  }
  
}

export default App;
