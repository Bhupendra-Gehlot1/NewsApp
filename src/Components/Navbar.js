import React, { Component } from 'react'


export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">Newsizz</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <form className="d-flex">
    <button className="btn btn-outline-success btn-md me-2 mx-2" type="button">India</button>
    <button className="btn btn-md btn-outline-secondary mx-2"  type="button">World</button>
    <button className="btn btn-outline-success btn-md me-2 mx-2" type="button">Business</button>
    <button className="btn btn-md btn-outline-secondary mx-2"  type="button">Sport</button>
    <button className="btn btn-outline-success btn-md me-2 mx-2" type="button">technology</button>
    {/* <button className="btn btn-md btn-outline-secondary mx-2"  type="button">World</button> */}
  </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
