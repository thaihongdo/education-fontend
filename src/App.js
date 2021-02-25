import './App.css';
import './styles.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './page/home';
import { Footer, Header, Responsive, Tool } from './layout';
import { Home1 } from './page/home1';
function App() {
	return (
		<Router>
			<div class="nicdark_site nicdark_bg_white nicdark_front_page ">
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
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
