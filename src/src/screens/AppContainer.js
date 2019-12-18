import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './Home';
import SplashScreen from './SplashScreen/SplashScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        header: null, //this will hide the header
      },
    },
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        title: 'SplashScreen',
        header: null, //this will hide the header
      },
    },
  },
  {
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
