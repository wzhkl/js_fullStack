import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// hashRouter  #  hashChange
// historyRouter  没有#  BrowserRouter 实现方式是通过 h5 的 History api
import PageLayout from './page/Layout';
import 'antd/dist/antd.css'

function App() {
  return (
    <Router>
      <Route path="/" component={PageLayout} />
    </Router>
  );
}

export default App;
