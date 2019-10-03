import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Comments from "../Comments/index.jsx";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.params.username,
      bio: ""
    };
  }

  componentDidMount() {
    axios
      .get("/users/bio", {
        params: {
          username: this.state.username
        }
      })
      .then(res => {
        console.log(res);
        this.setState({
          bio: res.data.bio
        });
      });
  }
  handleBio(e) {
    this.setState({
      bio: e.target.value
    });
  }

  handleBioSubmit(e) {
    axios
      .post("/users/bio", {
        bio: this.state.bio
      })
      .then(res => {
        console.log(res);
      });
  }

  render() {
    return (
      <div>
        <div> This is {this.state.username}'s Profile </div>
        <div> {this.state.bio}</div>
        <input
          type="text"
          placeholder="Enter your bio"
          onChange={this.handleBio.bind(this)}
        ></input>
        <button type="submit" onClick={this.handleBioSubmit.bind(this)}>
          Submit
        </button>
      </div>
    );
  }
}

module.exports = Profile;
