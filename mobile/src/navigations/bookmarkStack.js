import { createStackNavigator } from 'react-navigation';
import Bookmark from '../containers/Bookmark';
import HomeDetail from '../containers/HomeDetail';
import MyProfile from '../containers/MyProfile';
import Direct from '../containers/Direct';

export default createStackNavigator(
  {
    Bookmark,
    HomeDetail,
    MyProfile,
    Direct,
  },
  {
    // TODO change Home to Auth when has asyncStorage
    initialRouteName: 'MyProfile',
    mode: 'card',
    tabBarVisible: false,
    headerMode: 'none',
  },
);
