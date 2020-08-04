import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userInfo: "",
      followerInfo: ""
    }
  }

  componentDidMount(){
    axios
      .get('https://api.github.com/users/micherre')
      .then(res => {
        this.setState({
          userInfo: res.data
        })
        console.log(this.userInfo)
      })
      .catch(err => console.log(err))

    axios
      .get(`{this.state.userInfo.followers_url}`)
      .then(res => {
        this.setState({
          followerInfo: res.data
        })
        console.log(this.followerInfo)
      })
      .catch(err => console.log(err))
  } 
  render(){
    return(
      <div className="App">
        <div className="Card">
          <img src={this.state.userInfo.avatar_url}/>
          <div className="Card-Info">
            <h2>{this.state.userInfo.login}</h2>
            <p>Location:{this.state.userInfo.location}</p>
            <p>Profile
              <a href={this.state.userInfo.html_url}>{this.state.userInfo.html_url}</a>
            </p>
            <p>Followers: {this.state.followerInfo.length}</p>
            <p>Bio: {this.state.userInfo.bio}</p>
          </div>
        </div>
        <userCard userInfo={this.state.userInfo}/>
      </div>
    )
  }
}
