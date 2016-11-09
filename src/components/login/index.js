import { h, Component } from 'preact';
import style from './style';

class LoginForm extends Component {

	render() {
		return (
			<form className="form-inline">
			  <div className="form-group">
				<label htmlFor="username">Username</label>
				<input type="text" className="form-control" id="username" placeholder="JCharante" />
			  </div>
			  <div className="form-group">
				<label htmlFor="password">Password</label>
				<input type="email" className="form-control" id="password" placeholder="hunter2" />
			  </div>
			  <button type="submit" className="btn btn-primary">Submit Credentials</button>
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
