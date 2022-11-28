import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';

export default class News extends Component {

    constructor(){
        super();
        this.state={
            articles:[],
            loading:false
        }
    }

async componentDidMount(){
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=462100516e324d3b911e2ebe3a8bb577&page=1"
    let data =await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
}
  OnNextClick= async () =>{
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=462100516e324d3b911e2ebe3a8bb577&page=${this.state.page+1}`;
    let data =await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page+1,
      articles: parsedData.articles
  })
  console.log("b");
  
    }
  OnPreviousClick= async () =>{
      console.log("a");
      // this.setState({
      //   page: page+1;
      // })
    }



  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>Top Newstoday</h1>
        {/* <Spinner/> */}
        <div className="row">
            
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                    <Newsitem title={element.title?element.title:"News title doesn't exist"} description={element.description?element.description.slice(0,120):element.title.slice(0.20)} imageUrl={element.urlToImage?element.urlToImage:"https://www.infidigit.com/wp-content/uploads/2022/01/LATEST-NEWS.png"} newsUrl={element.url}/>
                </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} className="btn btn-outline-success btn-md me-2 mx-2" onClick={this.OnPreviousClick} type="button">&#60; Previous</button>
        <button className="btn btn-outline-success btn-md me-2 mx-2" onClick={this.OnNextClick} type="button">Next  &#62;</button>
        </div>
      </div>
    )
  }
}
