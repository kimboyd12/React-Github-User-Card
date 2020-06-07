import React from "react";
import styled from "styled-components";

const Followers = styled.div`
    display: flex;
    flex-direction: row;
    width: 1100px;
    flex-wrap: wrap;
    margin: 0 auto;

`
const FollowCard = styled.div`
    border: 2px solid #AC3B61;
    border-radius: 2px;
    width: 250px;
    margin: 40px;
    padding: 15px;
    padding-top: 35px;
    background-color: #EEE2DC; 
`
const Header = styled.div`
    width: 1100px;
    margin-bottom: -30px;
    color: #AC3B61;
`
const Github = styled.a`
    text-decoration: none;
    color: black;
    font-size: 1.2rem;

    &:hover {
        color: #123C69;
    }
`
const Image = styled.img`
    border: 2px solid #123C69;
    border-radius: 2px;
`

class FollowerCard extends React.Component {
    render() {
        console.log("followers");
        return (
            <Followers>
                <Header>
                <h1>My Followers</h1>
                </Header>
                {this.props.followerData.map(follower => {
                    return (
                      <FollowCard>
                        <Image width="200" src={follower.avatar_url} />
                        <Github href={follower.html_url}><p>{follower.login}</p></Github>
                      </FollowCard>
                    )})}
            </Followers>
        )
    }
}

export default FollowerCard;