import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/index'
import Courses from './Component/Courses/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/courses">ourses</Link>
    //         </li>
    //         <li>
    //           <Link to="/users">Users</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     <Switch>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/courses">
    //         <Courses />
    //       </Route>
    //       <Route path="/">
            <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  )
}

export default App;
