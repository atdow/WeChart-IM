/*
 * @Author: atdow
 * @Date: 2021-03-24 08:06:24
 * @LastEditors: null
 * @LastEditTime: 2021-03-26 23:21:15
 * @Description: file content
 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';

const Hello = () => {
  return (
    <div>
      dddd
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
