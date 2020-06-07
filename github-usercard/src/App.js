import React from 'react';
import './App.css';
import axios from "axios";
import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowerCard";
import styled from "styled-components";

const Header = styled.h1`
  color: #AC3B61;
`



class App extends React.Component {
   
  state = {
      userData: [],
      followerData: []
    }
  
    componentDidMount() {
      console.log("componentDidMount is running");

      // API call for my data
      axios
        .get("https://api.github.com/users/kimboyd12")
        .then(res => {
          console.log(res.data);
          this.setState({ userData: res.data});
        })
        .catch(err => console.log(err));

        // API call for follower data
        axios
        .get("https://api.github.com/users/kimboyd12/followers")
        .then(res => {
          console.log(res.data);
          this.setState({ followerData: res.data});
        })
        .catch(err => console.log(err));
    }


  render() {
    return (
      <div className="App">
        <Header>Github Usercard Project</Header>
        <div>
        <UserCard userData={this.state.userData} />
        <FollowerCard followerData={this.state.followerData} />
        </div>
      </div>
    )
  }
}

export default App;
