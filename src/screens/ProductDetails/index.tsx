import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Animated from 'react-native-reanimated';

import {styles} from './styles';
import {ScreenProps} from '../../routes';

export const ProductDetails = ({
  route,
  navigation,
}: ScreenProps<'ProductDetails'>) => {
  const {product, index} = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.buttonCanGoBack} onPress={handleGoBack}>
          <MaterialIcons name="keyboard-arrow-left" size={24} />
        </TouchableOpacity>
        <AntDesign name="shoppingcart" size={24} />
      </View>

      <Animated.View>
        <Animated.Image
          source={product.image}
          resizeMode="contain"
          style={styles.image}
          sharedTransitionTag={`sharedTag${index}`}
        />
      </Animated.View>
      <Text>{product.title}</Text>
    </View>
  );
};
