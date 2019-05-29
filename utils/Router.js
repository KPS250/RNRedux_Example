import { createStackNavigator, createAppContainer } from "react-navigation"
import HomeScreen from '../components/HomeScreen'

const Router = createStackNavigator({
    Home: {screen: HomeScreen}
  });
  
export default createAppContainer(Router);