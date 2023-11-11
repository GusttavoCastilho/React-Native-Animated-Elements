import React from 'react';
import {View, Text} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import {styles} from './styles';

export const BottomTab = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.item}>
        <AntDesign name="home" size={24} color="#3E4554" />
        <Text style={styles.itemText}>Home</Text>
      </View>
      <View style={styles.item}>
        <MaterialIcons name="category" size={24} color="#3E4554" />
        <Text style={styles.itemText}>Categories</Text>
      </View>
      <View style={styles.item}>
        <MaterialIcons name="favorite-outline" size={24} color="#3E4554" />
        <Text style={styles.itemText}>Favorite</Text>
      </View>
      <View style={styles.item}>
        <Feather name="more-vertical" size={24} color="#3E4554" />
        <Text style={styles.itemText}>More</Text>
      </View>
    </View>
  );
};
