import React from 'react';
import './style.css';

const Button = (props) => {
    let cls = 'addnews';
    if(props.modifier == 'item') {
        cls += ' addnews__item'
    }
    const newProps = {};
    if(props.clickButton) {
        newProps.onClick = props.clickButton
    }
    return(
        <button 
            className={cls}
            {...newProps}
        >
            {props.children}
        </button>
    )
}

export default Button;