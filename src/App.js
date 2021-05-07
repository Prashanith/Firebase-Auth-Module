import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignIn from '../src/components/SignIn'
import SignUp from '../src/components/SignUp'
import Home from '../src/components/Home'

import { AuthProvider} from '../src/contexts/AuthContext'
import DashBoard from "./components/DashBoard";
import PrivateRoute from "./services/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">    
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <PrivateRoute exact path="/dashboard" component={ DashBoard }/>             
           
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
