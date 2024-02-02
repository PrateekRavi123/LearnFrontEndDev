import React, { Component } from "react";
import "../index.css";
import Axios from "axios";

// const testData = [
//   {
//     name: "Dan Abramov",
//     avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
//     company: "@facebook",
//   },
//   {
//     name: "Sophie Alpert",
//     avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
//     company: "Humu",
//   },
//   {
//     name: "Sebastian Markbåge",
//     avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
//     company: "Facebook",
//   },
// ];

class CardList extends Component {
  
  render(){
    const props = this.props;
    return (
      <div>
      {props.profiles.map((profile) => (
        <Card key={profile.id} {...profile} />
      ))}
    </div>
    );
  }
}
// const CardList = (props) => (
//   <div>
//     {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
//   </div>
// );

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { profile: this.props };
  }
  render() {
    return (
      <div className="github-profile">
        <img src={this.state.profile.avatar_url} alt="" />
        <div className="info">
          <div className="name">{this.state.profile.name}</div>
          <div className="company">{this.state.profile.company}</div>
        </div>
      </div>
    );
  }
}
// class Card extends React.Component {
//   render() {
//     const profile = this.props;
//     return (
//       <div className="github-profile">
//         <img src={profile.avatar_url} />
//         <div className="info">
//           <div className="name">{profile.name}</div>
//           <div className="company">{profile.company}</div>
//         </div>
//       </div>
//     );
//   }
// }
class Form extends Component {
  state = { username: "" };
  handlesubmit = async (e) => {
    e.preventDefault();
    const res = await Axios.get(`https://api.github.com/users/${this.state.username}`)
    this.props.onSubmit(res.data);
    this.setState({username : ''})
    console.log(this.state.username);
  };
  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <input
          type="text"
          value={this.state.username}
          onChange={(e) => {
            this.setState({ username: e.target.value });
          }}
          placeholder="Github Username"
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

class GitApi extends Component {
  state = {
    profiles: [],
  };
  addnewProfile  = (profiledata) => {
    this.setState((prevstate) => ({
      profiles : [...prevstate.profiles,profiledata]
    }))
  }
  render() {
    return (
      <div>
        <div className="header">Git Card</div>
        <Form onSubmit={this.addnewProfile}/>
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default GitApi;







