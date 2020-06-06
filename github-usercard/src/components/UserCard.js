import React from "react";

class UserCard extends React.Component {
    render() {
        return (
            <div className="card">
                <img width="200" src={this.props.userData.avatar_url} />
                <h3>{this.props.userData.name}</h3>
                <p>{this.props.userData.location}</p>
                <p>{this.props.userData.bio}</p>
            </div>
        )
    }
}

export default UserCard;