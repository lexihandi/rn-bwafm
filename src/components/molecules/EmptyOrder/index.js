import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ImageOrderEmpty} from '../../../assets';
import {Button} from '../../atoms';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <Image source={ImageOrderEmpty} style={styles.img} />
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Text style={styles.subTitle}>
        Seems like you have not ordered any food yet
      </Text>
      <View style={styles.btnContainer}>
        <Button
          text="Find Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {width: 200, height: 221, marginBottom: 30},
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#020202',
  },
  subTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
    maxWidth: 220,
    textAlign: 'center',
    marginBottom: 30,
  },
  btnContainer: {width: 200},
});
