import React, { Component } from 'react'
import Navbar from './Navbar'
import News from './News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  handleClick=()=> {
    if(this.state.theme==="Dark") {
      document.body.style.backgroundColor="green";
      this.setState({theme:"Light"})
    }
    else {
      document.body.style.backgroundColor="gray";
      this.setState({theme:"Dark"})
    }
  }
  constructor() 
  {
    super();
    this.state={
      theme: "Light"
    }
  }
  render() {
    return (
      <div>
        <Navbar handletheme={this.handleClick}/>
        <BrowserRouter>
        
          <Routes>
          <Route path="/" element={<News category="general"/>} />
        <Route path="/sports" element={<News category="sports"/>} />
        <Route path="/business" element={<News category="business"/>} />
        <Route path="/entertainment" element={<News category="entertainment"/>} />
        <Route path="/health" element={<News category="health"/>} /> 
        <Route path="/science" element={<News category="science"/>} />
        <Route path="/technology" element={<News category="technology" />} /> 
        </Routes>
        
        </BrowserRouter>     
      </div>
    )
  }
}
