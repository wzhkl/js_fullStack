import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import App from './component/App.jsx'

// mapStateToProps
const a = (state) => {
  // 过滤
  return {
    commentList: state
  }
}
// mapDispatchToProps
const b = (dispatch) => {
  return {
    addComment: (userName, content) => {
      dispatch({
        type: 'ADD_COMMENT',
        userName,
        content
      })
    }
  }
}
export default connect(a, b)(App);
