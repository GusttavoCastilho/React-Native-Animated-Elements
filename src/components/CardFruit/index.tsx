import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageSourcePropType,
} from 'react-native';
import Animated from 'react-native-reanimated';

import {styles} from './styles';

type CardFruitProps = {
  title: string;
  category: string;
  image: ImageSourcePropType;
  tagName?: string;
} & TouchableOpacityProps;

export const CardFruit = ({
  title,
  category,
  image,
  tagName,
  ...props
}: CardFruitProps) => {
  return (
    <TouchableOpacity style={styles.wrapper} {...props}>
      <Animated.Image
        style={styles.image}
        source={image}
        resizeMode="contain"
        sharedTransitionTag={tagName}
      />

      <View style={styles.divider} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};
