import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Newsitem extends Component {

  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div>
       
<div className="card text-center" style={{width: "24rem", height:"32.3rem", margin:"10px auto" , overflow: "auto"}}>
  <img src={imageUrl} className="card-img-top justify-content-center img-fluid" style={{padding:"0px 11px",width:"390px", height:"250px"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target='_blank' className="btn btn-primary">Read More...</a>
  </div>
</div>
      </div>
    )
  }
}
