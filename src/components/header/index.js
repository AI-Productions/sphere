import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			/*<header class={style.header}>
				<h1>Sphere</h1>
				<nav>
					<Link href="/">Dashboard</Link>
					<Link href="/login">Login</Link>
				</nav>
			</header>*/
			<nav class="navbar navbar-light bg-faded">
			  <a class="navbar-brand" href="#">Sphere</a>
			  <ul class="nav navbar-nav">
				<li class="nav-item active">
				  <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" href="/login">Login</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" href="/dashboard">Dashboard</a>
				</li>
			  </ul>
			</nav>
		);
	}
}
