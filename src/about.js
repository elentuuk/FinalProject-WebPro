import React from 'react';
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

const About = ()=>{

    return (
        <div className="App">
            <Layout className="layout">
                <Content style={{ padding: '0 50px',minHeight:'81vh',overflowY:'hidden'}}>
                    <div>
                      <h1>About the web</h1>
                      <h4>This web is contains the datas from the omdb movies API</h4>
                    </div>
                    <br/>
                    <br/>
                    <div>
                      <p>Name: Tuuk, Jennyfer Elen Permata</p>
                      <p>NIM: 105011910016</p>
                      <p>Prodi: Information System</p>
                    </div>
                </Content>
            </Layout>
        </div>
    );
}

export default About;
