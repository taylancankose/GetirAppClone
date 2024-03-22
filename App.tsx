import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppRegistry } from "react-native";

//Navigators
import RootNavigator from "./src/Navigators/RootNavigator";

//Redux
import { Provider } from "react-redux";
import store from "./src/redux/store";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

AppRegistry.registerComponent("GetirAppClone", () => App); // 'MyApp' yerine uygulamanızın adını kullanın
