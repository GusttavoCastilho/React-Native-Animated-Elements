import React, {PropsWithChildren} from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import {styles} from './styles';

type ButtonProps = {
  children: PropsWithChildren;
  isTransparent?: boolean;
} & TouchableOpacityProps;

export const Button = ({
  children,
  isTransparent = false,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.wrapper, isTransparent && styles.transparent]}
      {...props}>
      <Text style={[styles.title, isTransparent && styles.titleTransparent]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
