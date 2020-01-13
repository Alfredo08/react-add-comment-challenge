import React, { Component } from 'react'

export default class CommentForm extends Component {

  render() {
    return (
      <div className='CommentForm'>
        <h3>Add a comment</h3>
        <form>
          <div>
            <label htmlFor='author'>Author:</label>
            <input type='text' id='author' name='author'/>
          </div>
          <div>
            <label htmlFor='comment'>Comment:</label>
            <textarea id='comment' name='comment' />
          </div>
          <button type='submit'>
            Post comment
          </button>
        </form>
      </div>
    )
  }
}
