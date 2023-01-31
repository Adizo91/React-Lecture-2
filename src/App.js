/* eslint-disable no-useless-constructor */
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
              /*{
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
      }   */
class App extends Component{
  constructor(){
    super();
    this.state ={
      monstros: [],
      searchStringLower: ""
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((users)=> {
      this.setState(()=> {
        return {monstros: users};
      },
      () => {
        console.log(this.state)
      });
    });
  }

  SearchOnChange = (event)=> {
    const searchStringLower = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return {searchStringLower: searchStringLower};
      });
  }

  render(){
    const {monstros, searchStringLower} = this.state;
    //const FilterList = this.state.monstros.filter(
    const FilterList = monstros.filter(
      (monstro) => {
        //return monstro.name.toLocaleLowerCase().includes(this.state.searchStringLower);
        return monstro.name.toLocaleLowerCase().includes(searchStringLower);
      });
return (
    <div className="App">
      <input className="search_box" type="search" placeholder="search monster name"
      //onChange={(event)=>{console.log(event.target.value)}
      onChange={this.SearchOnChange}
      />
      {
        //this.state.monstros.map
      FilterList.map((monstro)=>{
        return <div key={monstro.id} align="left"><h1>monster {monstro.id}: {monstro.name}</h1></div>
      })
      }
    </div>
  );
  }
  
}

export default App;
