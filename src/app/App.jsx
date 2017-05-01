import React from 'react';
import Popup from './Popup.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ["Lena", "Katya", "Tanya"],
      isOpenPop: false};

    this.togglePopap = this.togglePopap.bind(this);
    this.changeName = this.changeName.bind(this);
    this.setNewUsers = this.setNewUsers.bind(this);
  };

  togglePopap() {
    this.setState({
      isOpenPop: !this.state.isOpenPop
    });
  }

  changeName(event) {
    this.setState({
      name: event.target.value
    })
  }

  setNewUsers(newUsers) {
      this.setState({
          users: newUsers
      });
  }

  render() {
      return (
          <div>
              <h3 onClick={this.togglePopap}>Users</h3>
              {this.state.users.map((user, i)=> (
                <div key={i}>
                    {user}
                </div>
              ))}


              <Popup status={this.state.isOpenPop} names={this.state.users} changeStatus={this.togglePopap} setNewUsers={this.setNewUsers} />
          </div>
      );
  };

}
