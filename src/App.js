import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import {addGun, removeGun, addGunAsync} from './reduce';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        const store = this.props.store;
        console.log(store);
        const num = store.getState();
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <Button onClick = {() => {store.dispatch(addGun())}}>加商品</Button>
                <p className="App-intro">{num}</p>
                <Button onClick = {() => {store.dispatch(removeGun())}}>加商品</Button>
                <Button onClick = {() => {store.dispatch(addGunAsync())}}>延迟加商品</Button>
            </div>
        );
    }
}

export default App;
