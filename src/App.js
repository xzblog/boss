import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import {addGun, removeGun, addGunAsync} from './reduce';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
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
                <Button onClick = {() => {this.props.removeGun()}}>加商品</Button>
                <Button onClick = {() => {this.props.addGunAsync()}}>延迟加商品</Button>
            </div>
        );
    }
}
const mapStatetoProps = (state) =>{
    return {num: state}
}
const actionCreators = {addGun, removeGun, addGunAsync}
App = connect(mapStatetoProps, actionCreators)(App)
export default App;
