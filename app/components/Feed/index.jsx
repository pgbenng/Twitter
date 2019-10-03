import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Comment from "../Comments/index.jsx";


class Feed extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.params);
    this.state = {
      username: "",
      tweet: '',
      tweets: []
    };
  }

  componentDidMount() {
    axios.get("/feed/currentuser").then(res => {
      this.setState({
        username: res.data.username
      });
    });

    axios.get('/feed/tweet').then(res=> {
        console.log(res)
        this.setState({
            tweets: res.data
        })
        
        
    })    
  }

  handleTweet(e){
    this.setState({
        tweet: e.target.value
    })
  }

  handleTweetSubmit(e){
      axios.post('/feed/tweet', {
          tweet: this.state.tweet
      })
      .then(res => {
          console.log(res)
      })
  }

  render() {
    return (
    <div>
    <div> {this.state.username}, this is your feed.</div>
    <input type="text" placeholder="Post a tweet" onChange={this.handleTweet.bind(this)}></input>
    <button type="submit" onClick={this.handleTweetSubmit.bind(this)}> Tweet </button>
    <div>{this.state.tweets.map(x => {
        return (
            <div> {x.caption} </div>
        )
    })}</div>
    </div>
    )}
}

module.exports = Feed;
