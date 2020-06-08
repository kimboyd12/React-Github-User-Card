import React from "react";
import styled from "styled-components";

const Card = styled.div`
    border: 2px solid #AC3B61;
    border-radius: 2px;
    background-color: #EEE2DC; 
    width: 350px;
    margin: 0 auto;
    padding-top: 20px;
    margin-bottom: 75px;
    margin-top: 50px;
`
const Info = styled.div`
    border: 1px solid #AC3B61;
    border-radius: 2px;
    margin: 20px;
    padding: 10px;

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

class UserCard extends React.Component {
    render() {
        return (
            <div>
            <Card>
                <Image width="250" src={this.props.userData.avatar_url} />
                <Info>
                <Github href={this.props.userData.html_url}>{this.props.userData.name}</Github>
                <p>{this.props.userData.location}</p>
                <p>{this.props.userData.bio}</p>
                </Info>
            </Card>
            <Image width="800" src="https://grass-graph.moshimo.works/images/kimboyd12.png"></Image>
            </div>
        )
    }
}

export default UserCard;