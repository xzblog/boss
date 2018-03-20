import React, {Component} from 'react';

export default class Home extends Component{
    componentDidMount(){
        const wHeight = window.screen.height;
        this.refs.root.style.height = wHeight + 'px';
    }
    render(){
        return(
            <div ref='root' style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column', width:'100%'}}>
                <h1>嘿嘿招聘</h1>
                <p>@Author：张盛帆</p>
            </div>
        )
    }
}