import { createStackNavigator } from 'react-navigation';
import Home from '../containers/Home';
import CarDetail from '../containers/CarDetail';
import HomeDetail from '../containers/HomeDetail';
import MyProfile from '../containers/MyProfile';
import Direct from '../containers/Direct';

export default createStackNavigator(
  {
    Home,
    CarDetail,
    HomeDetail,
    MyProfile,
    Direct,
  },
  {
    // TODO change Home to Auth when has asyncStorage
    initialRouteName: 'Home',
    mode: 'card',
    tabBarVisible: false,
    headerMode: 'none',
  },
);
