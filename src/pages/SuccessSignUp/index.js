import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ImageSuccessSignUp} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Image source={ImageSuccessSignUp} style={styles.img} />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Text style={styles.subTitle}>
        Now you are able to order some foods as a self-reward
      </Text>
      <Gap height={30} />
      <View style={styles.btnContainer}>
        <Button
          text="Find Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 200,
    height: 290,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
    maxWidth: 200,
  },
  btnContainer: {width: '100%', paddingHorizontal: 80},
});
