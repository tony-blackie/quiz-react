import React, { Component } from 'react';
import {remove} from 'lodash';

export default class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {users: this.props.names, newUser: ""};

    this.deleteItem = this.deleteItem.bind(this);
    this.setNameInState = this.setNameInState.bind(this);
    this.addNewUserInState = this.addNewUserInState.bind(this);
    this.cancelWindow = this.cancelWindow.bind(this);
    this.saveNewUsers = this.saveNewUsers.bind(this);
  };

  deleteItem(number) {
      let newArr = this.state.users.slice();
      remove(newArr, (el, i) => i === number);
      this.setState({users: newArr});
  }

  setNameInState(event) {
      let name = event.target.value;
      this.setState({newUser: name});
  }

  addNewUserInState() {
      let newUser = this.state.newUser;
      let currentArr = this.state.users.slice();
      if (newUser !== "") {
          currentArr.push(newUser);
      }
      this.setState({users: currentArr, newUser: ""});
  }

  cancelWindow() {
      let topArr = this.props.names.slice();
      this.setState({users: topArr, newUser: ""});
      this.props.changeStatus();
  }

  saveNewUsers() {
        let users = this.state.users.slice();
        this.props.setNewUsers(users);
        this.props.changeStatus();
  }

  componentWillReceiveProps(next) {
    console.log(next.status);
      if(!next.status) {
          let users = this.props.names.slice();
          console.log(users);
          console.log(next.status);
          this.setState({users: users, newUser: ""});
      }
  }

  render() {
      let status = "dis-none";
      if(this.props.status) {
          status = "show"
      }
      return (
          <div>
            <div className={status}>
                Manage users
                <div>
                  {
                    this.state.users.map((user,i) => (
                    <div key={i}>
                        <span onClick={event => this.deleteItem(i)}>X</span>  {user}
                    </div>

                    ))
                  }
                </div>
                <div>
                    <input type="text" placeholder="new user" value={this.state.newUser} onChange={this.setNameInState}/>
                    <button onClick={this.addNewUserInState}>+</button>
                </div>
                <div>
                    <button onClick={this.saveNewUsers}>
                        ok
                    </button>
                    <button onClick={this.cancelWindow}>
                        cancel
                    </button>
                </div>

              </div>


          </div>
      );
  };
}
