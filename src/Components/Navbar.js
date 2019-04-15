import React from 'react';

const Nav = (props) => {
    return (
        <ul>
            <li><a href="#" id="click">Click Game</a></li>
            <li>Click an image to start</li>
            <li>Score: {props.score} | Top Score: {props.topScore}</li>
        </ul>
    );
}

export default Nav;