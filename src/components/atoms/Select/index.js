import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Select = ({label, value, onSelectChange}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={itemValue => onSelectChange(itemValue)}>
          <Picker.Item label="Bandung" value="bandung" />
          <Picker.Item label="Jakarta" value="jakarta" />
          <Picker.Item label="Jogja" value="jogja" />
          <Picker.Item label="Surabaya" value="sby" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
    borderColor: '#020202',
  },
});
