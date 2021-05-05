import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ImageLogo} from '../../assets';
import {Gap} from '../../components';

const SplashScreen = () => {
  return (
    <View style={styles.page}>
      <Image source={ImageLogo} style={styles.img} />
      <Gap height={30} />
      <Text style={styles.text}>FoodMarket</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffc700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 100,
    width: 100,
  },
  gap: {height: 30},
  text: {
    fontSize: 32,
    color: '#020202',
    fontFamily: 'Poppins-Medium',
  },
});
