import React, { Component } from 'react';
import List from './List'
import logo from './logo.svg';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './App.css';

let generateID = 1;
class App extends Component {
  state = {
    lists: [
      { name: '小康1', age: 20, school: 'school1', id: 0 },
      { name: '小康2', age: 20, school: 'school2', id: 1 },
    ],
    commentList: []
  }
  handleAddInfo = () => {
    const lists = this.state.lists.slice(0)
    generateID++
    lists.push({ name: '小康3', age: 20, school: 'school3', id: generateID })
    this.setState({
      lists
    })
  }
  
  handleListDelete = (id) => {
    console.log('父组件收到 id', id);
    const lists = this.state.lists.slice(0)
    const index = lists.findIndex(list => list.id === id)
    lists.splice(index, 1)
    this.setState({
      lists
    })
  }

  handlePublish = (userName,commentContent) => {
    // 往数组push数据，setState
    const commentList = this.state.commentList.slice()
    commentList.push({
      userName,
      commentContent
    })
    this.setState({
      commentList
    })
  }
  render() {
    const { lists, commentList } = this.state
    return (
      <>
        <ul>
          <button onClick={ this.handleAddInfo }>添加一条数据</button>
          {
            lists.map((list, i) => {
              return (
                <List key={list.id} list={list} onDelete={this.handleListDelete} />
              )
            })
          }
        </ul>
        <div>
          <CommentInput onPublish={this.handlePublish}></CommentInput>
          <CommentList commentList={commentList}></CommentList>
        </div>
      </>
    )
  }
}

export default App;
