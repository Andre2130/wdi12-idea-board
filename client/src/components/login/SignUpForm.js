import React, { Component } from 'react';
import axios from 'axios'

class SignUpForm extends Component {
  state = {
    newUser: {
      userName: '',
      password: ''
    }
  }


 
//Use this
handleChange = (event) => {
  const attribute = event.target.name
  const updateUser = {...this.state.newUser}
  updateUser[attribute] = event.target.value
  this.setState({newUser: updateUser})
}
//not this
// handleUserNameChange = (event) => {
//   const updateUser = {...this.state.newUser}
//   updateUser['userName'] = event.target.value
//   console.log(updateUser)
//   console.log("Changed!")
//   this.setState({newUser: updateUser})
// }
// handlePasswordChange = (event) => {
//   const updateUser = {...this.state.newUser}
//   updateUser['password'] = event.target.value
//   console.log(updateUser)
//   console.log("Changed!")
//   this.setState({newUser: updateUser})
// }

handleSubmit = (event) => {
event.preventDefault()
const res = axios.post('/api/users', {
"user": this.state.newUser
})
console.log(res)
}

    render() {
        return (
            <div>
                <h1>Sign-Up</h1>
  <form onSubmit={this.handleSubmit}>
    <div>
      <label htmlFor="userName">User Name</label>
      <input onChange={this.handleChange} name="userName" type="text" value={this.state.userName}/>
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input onChange={this.handleChange} name="password" type="text" value={this.state.password}/>
    </div>
  <button>Sign Up</button>
</form>
            </div>
        );
    }
}

export default SignUpForm;