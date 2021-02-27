import './App.css';
import './styles.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './page/home';
import { Footer, Header, Responsive, Tool } from './layout';
import { Home1 } from './page/home1';
import { Login } from './page/login';
function App() {
	return (
		<Router>
			<div className="nicdark_site nicdark_bg_white nicdark_front_page ">
				<Responsive />
				<Header />
				<Tool />

				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/home1" exact>
						<Home1 />
					</Route>
					<Route path="/sign-in" exact>
						<Login />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
