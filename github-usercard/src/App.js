import React from 'react';
import './App.css';
import axios from "axios";
import UserCard from "./components/UserCard";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: [],
      avatar: [],
      location: [],
      bio: []
    };
  }


    componentDidMount() {
      console.log("componentDidMount is running");

      axios
        .get("https://api.github.com/users/kimboyd12")
        .then(res => {
          console.log(res.data);
          this.setState({ name: res.data.name});
          this.setState({ picture: res.data.avatar_url});
          this.setState({ location: res.data.location});
          this.setState({ bio: res.data.bio});
        })
        .catch(err => console.log(err));
    }

  render() {
    console.log("rendering");
    return (
      <div className="App">
        <h1>Github Usercard Project</h1>
        <div>
        <UserCard 
        picture={this.state.picture}
        name={this.state.name}
        location={this.state.location}
        bio={this.state.bio}
        />
        </div>
      </div>
    )
  }
}

export default App;
