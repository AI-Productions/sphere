import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from './home';
import Login from './login';


export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		//console.log(e.url);
		//console.log(e);
		this.currentUrl = e.url;
		console.log("rawr");
		/*
		if (localStorage.getItem("authenticated") == null) {
			this.currentUrl = "/login";
		} else {
			console.log(localStorage.getItem("authenticated") == null);
			this.currentUrl = e.url;
		}*/
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Login path="/login" />
				</Router>
			</div>
		);
	}
}
