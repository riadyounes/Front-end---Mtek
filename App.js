import { } from 'expo-status-bar';
import React from 'react';
import { } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import Login from './src/view/login';
import Menu from './src/view/menu';
import CadastroCliente from './src/view/cadastroCliente';
import ClientList from './src/view/clientList';

import { Button, Icon } from 'react-native-elements';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ClientList"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFFF00',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen name="Menu" component={Menu} /> */}
        <Stack.Screen
          name="ClientList"
          component={ClientList}
          options={({navigation}) => {
            return {
              title: "Clientes",
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('CadastroCliente')}
                  type="clear"
                  icon={<Icon name="add" size={25} />}
              />
              )
            }
          }}
          />
        <Stack.Screen 
        name="CadastroCliente" 
        component={CadastroCliente}
        options={{
          title:"Cadastrar cliente"
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


