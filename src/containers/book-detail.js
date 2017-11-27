import React, { Component } from 'react'
import {connect} from 'react-redux';
class BookDetail extends Component {
  render() {
    if(!this.props.book){
      return <div>Select a book to get started.</div>
    }
    console.log(this.props.book.price);
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Price: ${this.props.book.price}</div>
        <div><img height="300" className=" img-fluid img-rounded book-thumb" src={this.props.book.img} /></div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
