import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from './redux/store';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import SignIn from './components/SignInPage';
import SignUp from './components/SignUpPage';
import ForgotPassword from './components/ForgotPasswordPage';

function App() {
    return (
        <div className="App">
          <Provider store={store}>
            <Router>
              <Route exact path="/" component={Home} />
              <Route exact path="/landing" component={LandingPage} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/forgot" component={ForgotPassword} />
            </Router>
          </Provider>
        </div>
    );
}

export default App;
