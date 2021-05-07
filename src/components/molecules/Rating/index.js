import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconStarActive, IconStarInactive} from '../../../assets';

const Rating = () => {
  return (
    <View style={styles.rateContainer}>
      <View style={styles.rate}>
        <IconStarActive />
        <IconStarActive />
        <IconStarActive />
        <IconStarActive />
        <IconStarInactive />
      </View>
      <Text style={styles.rateText}>4.5</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  rateContainer: {flexDirection: 'row', marginTop: 6},
  rate: {flexDirection: 'row'},
  rateText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginLeft: 4,
  },
});
