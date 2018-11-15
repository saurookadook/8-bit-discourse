import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

import '../../styles/css/App.css';

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    errors: []
}

class SignupForm extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  // onSignUp = event => {
  //   const {
  //     username,
  //     email,
  //     password
  //   } = this.state;
  // }

  onChangeHandler = event => {
    const { name, value } = event.target
    this.setState({        
        [name]: value
    });
  }

  onSignUp = event => {
    event.preventDefault();
    // debugger

    this.props.signup(this.state)
      // .then()
      // only reset if logged in successfully
      
      // this.refs.username.value = '';
      // this.refs.email.value = '';
      // this.refs.password.value = '';
  }

  render() {
    // debugger
    // --template--
    // <p>
    //   <input ref="authorInput" type="text" name="authorName" placeholder="Author" value={this.state.author} onChange={this.onSignup} />
    // </p>
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="FormUp col-6 p-4 my-4">
            <h3>Join the conversation!</h3>
            <form id="post-form" onSubmit={this.onSignUp.bind(this)}>
              <p>
                Username: 
                <input 
                    className="mr-2" 
                    ref="username" 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={this.state.username} 
                    onChange={this.onChangeHandler}
                />
              </p>
              <p>
                Email:
                <input 
                  className="ml-2" 
                  ref="email" 
                  type="text" 
                  name="email" 
                  placeholder="Email" 
                  value={this.state.email} 
                  onChange={this.onChangeHandler} 
                />
              </p>
              <p>
                Password:
                <input 
                  ref="password" 
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  value={this.state.password}
                  onChange={this.onChangeHandler} 
                />
              </p>
              <button type="submit">Signup</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

export default connect(null, mapDispatchToProps)(SignupForm);
