import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './about'
import Home from './home'
import {
    Layout,
    Input,
    Row,
    Col,
    Card,
    Tag,
    Spin,
    Alert,
    Modal,
    Typography
} from 'antd';
const { Header, Content, Footer } = Layout;

const App = ()=>{
    return (
      <div className="App">
          <Layout className="layout">
              <Header>
                <div style={{width:100,display:'flex',justifyContent:'space-between'}}>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                </div>
              </Header>
              <Routes>
                <Route path="/about" element={<About />}/>
                <Route path="/" element={<Home />}/>
              </Routes>
              <Footer style={{ textAlign: 'center' }}>OMDB Movies ©2021</Footer>
          </Layout>
      </div>
    );
}

export default App;
