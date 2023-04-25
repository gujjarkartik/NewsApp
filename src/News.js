import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Buffer from './Buffer';
import golu from './latest.png';
export default class News extends Component {

  
    async componentDidMount() {
    
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=eb5f395f193044beadccafacc73e467a&pagesize=8`;
    let data=await fetch(url);
    let data1=await data.json();
    this.setState({
        toDisplay:data1.articles

    });
    }
    constructor() {
      super();
      this.state={toDisplay:[] ,page:1,loading:false};
    }
    prevHandle = async() => {
        this.setState({loading:true});
        let url1=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=eb5f395f193044beadccafacc73e467a&pagesize=8&page=${this.state.page-1}`;
    let data=await fetch(url1);
    let data1=await data.json();
    this.setState({
        toDisplay:data1.articles, page:this.state.page-1,loading:false

    });
    }
    nex = async() => {
        this.setState({loading:true});
        let url1=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=eb5f395f193044beadccafacc73e467a&pagesize=8&page=${this.state.page+1}`;
    let data=await fetch(url1);
    let data1=await data.json();
    this.setState({
        toDisplay:data1.articles,page:this.state.page+1,loading:false

    });
    }
  

  render() {
    
    return (
      <div className='container my-3'>
        {this.state.loading && <Buffer/>}
        <div className='row'>
          {
            !this.state.loading && this.state.toDisplay.map((i)=> {
              return  <div className='col-sm'>
                <Newsitem key={i.url} title={i.title} description={i.description} imageUrl={i.urlToImage? i.urlToImage:golu} url={i.url} />
              </div> 
            }
          )
  }
  
        </div>
        <div className='d-flex justify-content-between'>
        <button type="button" className="btn btn-secondary" onClick={this.prevHandle} disabled={this.state.page===1}>&larr; Previous</button>
    <button type="button" className="btn btn-secondary" onClick={this.nex}>Next &rarr;</button>
        </div>
      </div>
      
    )
    
    
  }
     
}
