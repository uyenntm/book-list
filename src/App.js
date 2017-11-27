import React, { Component } from 'react';
import BookList from './containers/book-list';
import BookDetail from './containers/book-detail';
import './App.css';
class App extends Component {
  render() {
    return (
      <div class="container">
        <h1>Welcome to uBook!</h1>
       <BookList/>
       <BookDetail />
      </div>
    );
  }
}

export default App;
