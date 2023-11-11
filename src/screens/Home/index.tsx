import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native-safe-area-context';

import {CardFruit} from '../../components/CardFruit';
import {BottomTab} from '../../components/BottomTab';

import {styles} from './styles';
import {theme} from '../../theme/theme';

import {fruitsData} from './dummy';

export const Home = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperHeader}>
        <SafeAreaView>
          <View style={styles.header}>
            <Text style={styles.headerTextUser}>Hey, Gustavo</Text>
            <View style={styles.wrapperIcons}>
              <Icon name="search1" size={24} color={theme.colors.white} />
              <Icon name="shoppingcart" size={24} color={theme.colors.white} />
            </View>
          </View>
          <Text style={styles.headerTextShop}>Shop</Text>
          <Text style={styles.headerTextCategory}>By Category</Text>
        </SafeAreaView>
      </View>

      <FlatList
        data={fruitsData}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.fruitsList}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CardFruit
            title={item.title}
            category={item.category}
            image={item.image}
          />
        )}
      />

      <BottomTab />
    </View>
  );
};
