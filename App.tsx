/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
// In App.js in a new project

import * as React from 'react';
import {View, Text, Button, Modal} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const SideDrawer = () => {
  return (
    <View style={{paddingTop: 300}}>
      <Text>Hello</Text>
    </View>
  );
};

function HomeScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const openModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="openModal" onPress={openModal} />
      <Modal
        animationType="slide"
        presentationStyle={'pageSheet'}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Button title="openModal" onPress={openModal} />
      </Modal>
    </View>
  );
}

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          swipeEdgeWidth: 0,
          drawerStyle: {width: 300},
        }}
        drawerContent={SideDrawer}>
        <Drawer.Screen
          name="root"
          options={{drawerPosition: 'right'}}
          component={RootStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
