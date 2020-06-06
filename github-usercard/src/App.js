import React from 'react';
import './App.css';
import axios from "axios";
import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowerCard";



class App extends React.Component {
   
  state = {
      userData: [],
      followerData: []
    }
  


    componentDidMount() {
      console.log("componentDidMount is running");

      axios
        .get("https://api.github.com/users/kimboyd12")
        .then(res => {
          console.log(res.data);
          this.setState({ userData: res.data});
        })
        .catch(err => console.log(err));

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
        <h1>Github Usercard Project</h1>
        <div>
        <UserCard userData={this.state.userData} />
        <FollowerCard followerData={this.state.followerData} />
        </div>
      </div>
    )
  }
}

export default App;
