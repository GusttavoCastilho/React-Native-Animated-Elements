import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageSourcePropType,
} from 'react-native';

import {styles} from './styles';

type CardFruitProps = {
  title: string;
  category: string;
  image: ImageSourcePropType;
} & TouchableOpacityProps;

export const CardFruit = ({
  title,
  category,
  image,
  ...props
}: CardFruitProps) => {
  return (
    <TouchableOpacity style={styles.wrapper} {...props}>
      <Image style={styles.image} source={image} resizeMode="contain" />
      <View style={styles.divider} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};
