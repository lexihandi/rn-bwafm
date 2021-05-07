import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Select, TextInput} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <Header
        title="Address"
        subTitle="Make sure it’s valid"
        onBack
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <TextInput label="Phone No." placeholder="Type your phone Number" />
        <Gap height={16} />
        <TextInput label="Address" placeholder="Type your address" />
        <Gap height={16} />
        <TextInput label="House No." placeholder="Type your house number" />
        <Gap height={16} />
        <Select label="City" />
        <Gap height={24} />
        <Button
          text="Sign Up Now"
          onPress={() => navigation.replace('SuccessSignUp')}
        />
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    marginTop: 10,
    paddingBottom: 30,
  },
});
