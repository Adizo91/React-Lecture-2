/* eslint-disable no-useless-constructor */
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state ={
      monstros: [
        {
          name: "Lucius",
          id: 1
        },
        {
          name: "Bellatrix",
          id: 2
        },
        {
          name: "Tom",
          id: 3
        },
        {
          name: "Fenrir",
          id: 4
        }        
      ]
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((users)=> console.log(users));
  }
  render(){
return (
    <div className="App">
      {
      this.state.monstros.map((monstro)=>{
        return <div key={monstro.id} align="left"><h1>monster {monstro.id}: {monstro.name}</h1></div>
      })
      }
    </div>
  );
  }
  
}

export default App;
