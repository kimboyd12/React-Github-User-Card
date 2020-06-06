import React from "react";

class FollowerCard extends React.Component {
    render() {
        console.log("followers");
        return (
            <div className="f-card">
                <h3>My Followers:</h3>
                {this.props.followerData.map(follower => {
                    return (
                    <div className="follower-card">
                        <img width="200" src={follower.avatar_url} />
                        <a href={follower.html_url}><p>{follower.login}</p></a>
                    </div> )
                })}
            </div>
        )
    }
}

export default FollowerCard;