import React from "react";

const MatchCard = props => (
    <div onClick={() => props.setClicked(props.id)} className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default MatchCard;