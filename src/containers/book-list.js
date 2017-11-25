import React, { Component } from 'react'
import {connect } from 'react-redux';

import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList(){
      return this.props.books.map((book)=>{
          return (
              <li key={book.title} 
              onClick={()=> this.props.selectBook(book)}
              className="list-group-item">{book.title}</li>
          );
      });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <ul className="list-group col-sm-4">
            {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  //show as props inside of booklist
  return{
    books: state.books
  };
}
//anything return from this function will end up as props on the Booklist container
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({selectBook:selectBook}, dispatch);
}
//promote booklist from a component to a container - it needs to know 
//about this new dispatch method, selectBook, Make it available as a props
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
