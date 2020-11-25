import { StyleSheet, Text, View } from 'react-native';

import ChartDetail from './src/screens/ChartDetail';
import ChartWrapper from './src/screens/ChartWrapper';
import { FontAwesome } from '@expo/vector-icons';
import InputInformation from './src/screens/InputInformation';
import ListComment from './src/screens/ListComment';
import { MaterialIcons } from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import Profile from './src/screens/Profile';
import {Provider} from 'react-redux';
import React from 'react';
import Repository from './src/screens/Repository';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createStore} from 'redux'
// import ChartDetail from "./src/screens/ChartDetail";
import {reducer} from './src/reducer/reducer';

const Stack=createStackNavigator();
const Tabs=createBottomTabNavigator();
const store=createStore(reducer);

const RootHome=()=>{
  return(
    <Tabs.Navigator
    screenOptions={({ route }) => ({
          tabBarIcon: ({color}) => {
            let iconName;

            if (route.name === 'Repository') {
              iconName = "folder-open-o";
            } else if (route.name === 'Campaign') {
              iconName = "line-chart";
            }
            else if (route.name === 'Profile') {
              iconName = "user-circle-o";
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={30} color={color} />;
            // return <MaterialIcons name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}
    >
      <Tabs.Screen name="Repository" component={Repository}/>
      <Tabs.Screen name="Campaign" component={InputInformation}/>
      {/* <Tabs.Screen name="Profile" component={Profile}/> */}
    </Tabs.Navigator>
  )
}
export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={RootHome} />
        <Stack.Screen name="detail" component={ChartDetail} />
        <Stack.Screen name="wrapper" component={ChartWrapper} />
        <Stack.Screen name="listcomment" component={ListComment} />
      </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
