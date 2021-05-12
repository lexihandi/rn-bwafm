import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {useForm} from '../../utils';

const SignUp = ({navigation}) => {
  // const globalState = useSelector(state => state.globalReducer);
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('form: ', form);
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('SignUpAddress');
  };
  return (
    <ScrollView style={styles.page}>
      <Header
        title="Sign Up"
        subTitle="Register and eat"
        onBack
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <View style={styles.photoContainer}>
              <Text style={styles.addPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInput
          label="Full Name"
          placeholder="Type your full name"
          value={form.name}
          onChangeText={value => setForm('name', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          secureTextEntry
          value={form.password}
          onChangeText={value => setForm('password', value)}
        />
        <Gap height={24} />
        <Button text="Continue" onPress={onSubmit} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 40,
    marginTop: 10,
    paddingBottom: 30,
  },
  photo: {
    alignItems: 'center',
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#f0f0f0',
    padding: 24,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
