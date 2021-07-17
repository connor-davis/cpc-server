import { HomePage } from './pages/Home';
import React from 'react';
import { Route } from 'react-router-dom';
import { SignInPage } from './pages/SignIn';
import { SignUpPage } from './pages/SignUp';

function App() {
  return (
    <div className="flex flex-col w-screen h-screen select-none">
      <Route exact path="/" component={(props) => <HomePage {...props} />} />
      <Route
        exact
        path="/signIn"
        component={(props) => <SignInPage {...props} />}
      />
      <Route
        exact
        path="/signUp"
        component={(props) => <SignUpPage {...props} />}
      />
    </div>
  );
}

export default App;
