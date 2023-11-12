import React from 'react';

import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '../screens/Home';
import {ProductDetails} from '../screens/ProductDetails';

type RootStackParamList = {
  Home: undefined;
  ProductDetails: undefined;
};

export type ScreenProps<ScreenName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, ScreenName>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
