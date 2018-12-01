import { createSwitchNavigator } from 'react-navigation';
import Home from './tabbarNavigation';
import Auth from './authStack';

export default createSwitchNavigator(
  {
    Home,
    Auth,
  },
  {
    // TODO change Home to Auth when has asyncStorage
    initialRouteName: 'Auth',
    mode: 'card',
    tabBarVisible: false,
    headerMode: 'none',
  },
);
