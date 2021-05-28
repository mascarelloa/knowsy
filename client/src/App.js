
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Auth from "./utils/Auth";
import './styles/App.css';
import Search from './pages/Search'
import Home from './pages/Home.js'
import Create from './pages/Create.js';
import Categories from './pages/Categories.js';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from "./components/Login";
import Register from "./components/Register";
import PublicRoute from "./pages/PublicRoute";
import ProtectedRoute from "./pages/ProtectedRoute";
import './styles/App.css';
import { UserProvider } from "./utils/UserContext";

//Now we have all the stuff we need .. let's render some components with the Router
const AuthExample = () => (
  <UserProvider>
    <Router>
      <div>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/search" component={Search} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/categories" component={Categories} />
          <Route path="/public" component={PublicRoute} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/protected" component={ProtectedRoute} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  </UserProvider>
)

// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Router>
    <div>

      <Route {...rest} render={props => (

        Auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <div className="container">
            <div className="alert alert-danger text-center" role="alert">
              This page is private to authenticated users.
					</div>
            <div className="row">
              <div className="col-sm"></div>
              <div className="col-sm">
                <h3>Please Register or Login</h3>
              </div>
              <div className="col-sm"></div>
            </div>
            <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }} />
          </div>
        )
      )} />
    </div>
  </Router>
)

export default AuthExample