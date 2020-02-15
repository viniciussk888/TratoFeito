import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Main from "./pages/Main";
import ServiceContact from "./pages/ServiceContact";

const Routes = createAppContainer(
  createSwitchNavigator({
    App: createBottomTabNavigator(
      {
        Home: {
          screen: Home
        },
        Search: {
          screen: Search
        },
        Main: {
          screen: Main
        }
      },
      {
        defaultNavigationOptions: {
          tabBarOptions: {
            inactiveTintColor: "#fff",
            activeTintColor: "#dd4814",
            style: {
              backgroundColor: "#4d194a"
            }
          }
        }
      }
    ),
    Auth: createStackNavigator({
      ServiceContact: {
        screen: ServiceContact,
        navigationOptions: {
          header: false
        }
      }
    })
  })
);

export default Routes;
