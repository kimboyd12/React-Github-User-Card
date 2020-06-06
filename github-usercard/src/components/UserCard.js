import React from "react";

function UserCard(props) {
    return (
        <div className="user-card">
            <img width="200" src={props.picture} alt="user picture" />
            <h4>{props.name}</h4>
            <p>{props.location}</p>
            <p>{props.bio}</p>
        </div>
    )
}


export default UserCard;