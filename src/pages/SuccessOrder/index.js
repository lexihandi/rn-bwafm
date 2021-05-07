import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ImageSuccessOrder} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Image source={ImageSuccessOrder} style={styles.img} />
      <Text style={styles.title}>You’ve Made Order</Text>
      <Text style={styles.subTitle}>
        Just stay at home while we are preparing your best foods
      </Text>
      <View style={styles.btnContainer}>
        <Button
          text="Order Other Foods"
          onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={12} />
        <Button
          text="View My Order"
          color="#8D92A3"
          textColor="#fff"
          onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {width: 200, height: 176, marginBottom: 30},
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
