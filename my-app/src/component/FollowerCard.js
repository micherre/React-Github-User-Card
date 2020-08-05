// import React from 'react'

// class FollowerCard extends React.Component() {
//   constructor(props){
//     super(props);
//     this.state={
//       allFollowers: ""
//     };
//   }
//   render(){
//     return(
//       <div className="user-card">
//         {props.followerInfo.map(follower => {
//           setState(...allFollowers, follower.login)
//         })}
//         {console.log(allFollowers)}
//           <img src={props.userInfo.avatar_url} alt="user logo"/>
//           <div className="Card-Info">
//             <h2>{props.userInfo.login}</h2>
//             <p>Location:{props.userInfo.location}</p>
//             <p>Profile: 
//               <a href={props.userInfo.html_url}>{props.userInfo.html_url}</a>
//             </p>
//             <p>Followers: {props.followerInfo.length}</p>
//             <p>Bio: {props.userInfo.bio}</p>
//           </div>
//       </div>
//     );
//   }
// }
// export default FollowerCard;