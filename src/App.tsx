import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ConfigProvider} from "antd";
import {Login} from "./component/user/Login";
const App = (props:any)=> {
  return (
      <ConfigProvider locale={props.local}>
          <Router>
              <Routes>
                  <Route path='/' element={<Login/>}/>
              </Routes>
          </Router>
      </ConfigProvider>
  );
}

export default App;
