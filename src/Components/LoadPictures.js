import React from 'react';

const Image = (props) => {
    return (
        <div className="card">
            <img src={props.picture} className="card-img-top" alt="..." onClick={props.randomizer}/>
        </div>
        );
}

export default Image;