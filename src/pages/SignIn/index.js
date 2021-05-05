import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={styles.batas} />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Sign In" />
        <Gap height={12} />
        <Button text="Create New Account" color="#8D92A3" textColor="#fff" />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 40,
    marginTop: 10,
  },
});
