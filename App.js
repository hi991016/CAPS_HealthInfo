import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './src/navigation/AppNavigation'
import DrawerMenu from './src/component/DrawerMenu'
import Statistics from './src/screens/StatisticScreen'
import Notification from './src/drawer/NotificationScreen'
import Setting from './src/drawer/SettingScreen'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerMenu {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={AppNavigation} />
            <Drawer.Screen name="Statistic" component={Statistics} />
            <Drawer.Screen name="Notification" component={Notification} />
            <Drawer.Screen name="Setting" component={Setting} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
