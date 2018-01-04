import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
import {addGun, removeGun, addGunAsync} from './reduce';
import 'antd-mobile/dist/antd-mobile.css';
import logo from './logo.svg';
import './App.css';

@connect(
    state => ({num:state}),
    {addGun, removeGun, addGunAsync}
)
class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <Button onClick = {() => {this.props.addGun()}}>加商品</Button>
                <p className="App-intro">{this.props.num}</p>
                <Button onClick = {() => {this.props.removeGun()}}>减商品</Button>
                <Button onClick = {() => {this.props.addGunAsync()}}>延迟加商品</Button>
            </div>
        );
    }
}

export default App;
