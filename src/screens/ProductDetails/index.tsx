import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Animated from 'react-native-reanimated';

import {styles} from './styles';
import {ScreenProps} from '../../routes';
import {Button} from '../../components/Button';
import {Accordion} from '../../components/Accordion';

export const ProductDetails = ({
  route,
  navigation,
}: ScreenProps<'ProductDetails'>) => {
  const {product, index} = route.params;
  const {bottom} = useSafeAreaInsets();
  console.log(bottom);

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView
      style={[styles.wrapper, {paddingBottom: bottom + 50}]}
      contentContainerStyle={{paddingBottom: bottom + 50}}
      showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.buttonCanGoBack} onPress={handleGoBack}>
          <MaterialIcons name="keyboard-arrow-left" size={24} />
        </TouchableOpacity>
        <AntDesign name="shoppingcart" size={24} />
      </View>

      <Animated.View style={styles.content}>
        <Animated.Image
          source={product.image}
          resizeMode="contain"
          style={styles.image}
          sharedTransitionTag={`sharedTag${index}`}
        />
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <View style={styles.wrapperButton}>
          <Button isTransparent>Add to Cart</Button>
          <Button>Buy Now</Button>
        </View>
        <Text style={styles.textDetails}>Details</Text>
        <Text style={styles.details}>{product.details}</Text>

        <Accordion title="Nutritional facts" />
        <Accordion title="Reviews" />
      </Animated.View>
    </ScrollView>
  );
};
