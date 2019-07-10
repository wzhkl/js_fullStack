import React, { Component } from 'react';

class CommentList extends Component {
  state = {  }
  render() { 
    const { commentList } = this.props
    return (
      <div>
        <ul>
          {
            commentList.map((comment, i) => {
              return (
                <li key={comment.userName}>
                name: {comment.userName},
                commentContent: {comment.commentContent}
                </li>
              )
            })
          }
        </ul>
        
      </div>
    );
  }
}
 
export default CommentList;