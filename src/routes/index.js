
import { Switch } from 'react-router-dom';
import Route from './Route';
import Password from '../pages/Password';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';

export default function Routes(){
  return(
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/password" component={Password}/>
      <Route exact path="/dashboard" component={Dashboard}  isPrivate/>
      
    </Switch>
  )
}