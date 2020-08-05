import React from 'react'

const UserCard = props => {
  return(
    <div className="user-card">
      <img src={props.userInfo.avatar_url} alt="user logo"/>
      <div className="Card-Info">
        <h2>{props.userInfo.login}</h2>
        <p>Location:{props.userInfo.location}</p>
        <p>Profile: 
          <a href={props.userInfo.html_url}>{props.userInfo.html_url}</a>
        </p>
        <p>Followers: {props.userInfo.followers}</p>
        <p>Bio: {props.userInfo.bio}</p>
      </div>
    </div>
  );
};

export default UserCard;