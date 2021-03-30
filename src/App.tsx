/*
 * @Author: atdow
 * @Date: 2021-03-24 08:06:24
 * @LastEditors: null
 * @LastEditTime: 2021-03-30 23:30:18
 * @Description: file content
 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './views/main/index'


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}
