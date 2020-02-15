import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Main from "./pages/Main";

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
    )
    // Auth: createStackNavigator({
    //   Login: {
    //     screen: Login,
    //     headerMode: "fade-in-place",
    //     navigationOptions: {
    //       headerTitle: "Login",
    //       headerTintColor: "#fff",
    //       headerStyle: {
    //         backgroundColor: "#4d194a"
    //       }
    //     }
    //   },
    //   Signup: {
    //     screen: Signup,
    //     headerMode: "fade-in-place",
    //     navigationOptions: {
    //       headerTitle: "Cadastrar",
    //       headerTintColor: "#fff",
    //       headerStyle: {
    //         backgroundColor: "#4d194a"
    //       }
    //     }
    //   },
    //   Contract: {
    //     screen: Contract,
    //     navigationOptions: {
    //       header: false,
    //       headerTintColor: "#fff",
    //       headerStyle: {
    //         backgroundColor: "#4d194a"
    //       }
    //     }
    //   },
    //   SpolistDestaque: {
    //     screen: SpolistDestaque,
    //     headerMode: "fade-in-place",
    //     navigationOptions: {
    //       headerTitle: "Contratar",
    //       headerTintColor: "#fff",
    //       headerStyle: {
    //         backgroundColor: "#4d194a"
    //       }
    //     }
    //   },
    //   Profile: {
    //     screen: Profile,
    //     navigationOptions: {
    //       headerTitle: "Profile",
    //       headerTintColor: "#fff",
    //       headerStyle: {
    //         backgroundColor: "#4d194a"
    //       }
    //     }
    //   }
    // })
  })
);

export default Routes;
