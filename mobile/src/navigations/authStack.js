import { createStackNavigator } from 'react-navigation';
import Login from '../containers/Login';
import Signup from '../containers/SignUp';

export default createStackNavigator(
  {
    Login,
    Signup,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);
