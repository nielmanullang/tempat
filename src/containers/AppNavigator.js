import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import SplashScr from '../view/SplashScr';
import HomePageSrc from '../view/HomePageSrc';
import FoodDetailScr from '../view/FoodDetailScr';

const AppNavigator = createStackNavigator({
  Splash: { screen: SplashScr },
  HomePage: { screen: HomePageSrc },
  FoodDetail: { screen: FoodDetailScr }
}, {
  initialRouteName: 'Splash',
});

export default createAppContainer(AppNavigator);
