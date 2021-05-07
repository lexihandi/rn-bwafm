import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Rating from '../Rating';

const ItemListFood = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Soup Bumil</Text>
        <Text style={styles.price}>IDR 289.000</Text>
      </View>
      <Rating />
    </View>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignItems: 'center',
  },
  textContainer: {flex: 1},
  img: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  price: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
});
