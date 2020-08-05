import React from 'react'
import axios from 'axios'
import UserCard from './component/UserCard'
// import FollowerCard from './component/FollowerCard';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userInfo: "",
      followerInfo: [],
    }
  }

  componentDidMount(){
    axios
      .get('https://api.github.com/users/micherre')
      .then(res => {
        this.setState({
          userInfo: res.data
        })
      })
      .catch(err => console.log(err))

    axios
      .get('https://api.github.com/users/micherre/followers')
      .then(res => {
          res.data.map(user => {
            axios
            .get(`https://api.github.com/users/${user.login}`)
            .then(res =>
              {this.setState({followerInfo: [...this.state.followerInfo,res.data]})})
          })
      })
      .catch(err => console.log(err))
  } 
  render(){
    return(
      <div className="App">
        {console.log(this.state.userInfo)}
        <div className="User">
          <UserCard 
            userInfo={this.state.userInfo}
          />
        </div>
        <div className="Followers">
        {this.state.followerInfo.map(follower => {
          return <UserCard userInfo = {follower} />
        })}
        </div>
      </div>
    )
  }
}

export default App;