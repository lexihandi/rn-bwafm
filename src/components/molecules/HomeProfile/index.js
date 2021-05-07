import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyProfile} from '../../../assets';

const HomeProfile = () => {
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.title}>FoodMarket</Text>
        <Text style={styles.subTitle}>Let's get some foods</Text>
      </View>
      <Image source={DummyProfile} style={styles.img} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
