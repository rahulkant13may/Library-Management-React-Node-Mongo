import React from 'react';
import './App.css';

class BookDetail extends  React.Component {
  constructor(props){
    super(props);
    this.state = {

      posts : []

    }
  }
  render() {
    console.log("111",this.props.location.state)
  return (
    <div className="row">
      <h1 style={{display:"flex",justifyContent:"center"}}>Book Detail page</h1>
      <div style={{display:"flex",justifyContent:"center"}}>
        <div className="card" style={{display:"flex", flexDirection:"column",width:"15%"}}>
          <div>Name: {this.props.location.state.book.name}</div>
          <div>Description: {this.props.location.state.book.name}</div>
        </div>
      </div>
    </div>
  );
}
}

export default BookDetail;
