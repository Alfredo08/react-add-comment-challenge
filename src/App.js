import React, { Component } from 'react';
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import './App.css';

class App extends Component {
  state = {
    comments: [],
  };

  render() {
    return (
        <div className="App">
          <main>
            <h1>Comment section</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae labore officiis vitae! Quasi maxime, minima a doloribus soluta earum voluptates aspernatur, alias dicta assumenda esse iste repellat et. Cum, quia.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aliquid quis minima quo aperiam similique amet dicta? Cumque libero magnam animi tenetur quis deleniti quisquam eveniet ut beatae molestias? Repudiandae?
            </p>
            <section>
              <CommentList />
              <CommentForm />
            </section>
          </main>
        </div>
    );
  }
}

export default App;
