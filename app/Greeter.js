// var config = require('./config.json');
// module.exports = function(){
//     var greet = document.createElement('div');
//     // greet.textContent = "Hi doudoumao";
//     greet.textContent = config.greetText;
//     return greet
// };

import React, { Component } from 'react';
import config from './config.json';
// !!!使用cssModule添加类名的方法
import styles from './Greeter.css';

class Greeter extends Component {
    render(){
        return (
        // !!!使用cssModule添加类名的方法
        <div className={styles.root}> 
                {config.greetText}
            </div>
        );
    }
}

export default Greeter