import { h, Component } from 'preact';
import style from './style';

class LoginForm extends Component {
  constructor() {
  	super();
		
		this.state.username = '';
		this.state.password = '';
		this.state.aid = '';
	}
  
  tryLogin(e) {
  	var self = this;
		e.preventDefault();
		fetch('http://localhost:7004/account/login', {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				'username': this.state.username,
				'password': this.state.password
			})
		}).then(function(response) {
			var contentType = response.headers.get("content-type");
			if(contentType && contentType.indexOf("application/json") !== -1) {
				return response.json().then(
					function(json) {
						console.log(json);
						self.setState({aid: json.uid});
						localStorage.setItem('aid', json.uid);
					}
				);
			} else {
				console.log("Oops, we haven't got JSON!");
			}
		});
  }
  
  render() {
   return (
    <form className="form-inline">
      <div className="form-group">
     <label htmlFor="username">Username</label>
     <input value={this.state.username} onInput={this.linkState('username')} type="text" className="form-control" id="username" placeholder="JCharante" />
      </div>
      <div className="form-group">
     <label htmlFor="password">Password</label>
     <input value={this.state.password} onInput={this.linkState('password')} type="password" className="form-control" id="password" placeholder="hunter2" />
      </div>
      <button type="submit" className="btn btn-primary" onClick={(e) => this.tryLogin(e)}>Submit Credentials</button>
    </form>
   );
  }
}

export default class Login extends Component {

  render() {
   return (
    <div className={style.login}>
     <h1>Login</h1>
     <p>Sign in with your Erebus Credentials Here.</p>
     <LoginForm/>
    </div>
   );
  }
}
