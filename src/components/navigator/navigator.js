/**
 * Created by magical on 2017/6/8 0008.
 * 常用底部菜单组件
 */

import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import './navigator.scss';

@withRouter

export default class Navigator extends Component{
    // 用于检测传入的值得类型
    static propTypes = {
        data: PropTypes.array.isRequired
    };




    render(){
        const menu = [];
        const {pathname} = this.props.location;
        const navList = this.props.data.filter(v=>!v.hide);
        navList.map((nav,i) => {
            menu.push(
                <Link to={nav.url}
                      key={i}
                      className={pathname === nav.url ? 'active':'' }
                      data-index={i}>
                    <i className={nav.icon}> </i>
                    <p>{nav.text}</p>
                </Link>);
        });
        return(
            <nav className="mi-navigator">
                {menu}
            </nav>
        );
    }
}




