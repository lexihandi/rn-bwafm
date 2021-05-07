import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyFoodOne} from '../../assets';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';

const OrderSummary = () => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          onBack={() => {}}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Item Ordered</Text>
          <ItemListFood
            image={DummyFoodOne}
            title="Cherry Healthy"
            price="IDR 289.000"
            items={14}
          />
          <Text style={styles.titleDetail}>Details Transaction</Text>
          <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
          <ItemValue label="Driver" value="IDR 50.000" />
          <ItemValue label="Tax 10%" value="IDR 1.800.390" />
          <ItemValue label="Total Price" value="IDR 390.803.000" />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Deliver to:</Text>
          <ItemValue label="Name" value="Angga Risky" />
          <ItemValue label="Phone No." value="0822 0819 9688" />
          <ItemValue label="Address" value="Setra Duta Palima" />
          <ItemValue label="House No." value="A5 Hook" />
          <ItemValue label="City" value="Bandung" />
        </View>
        <View style={styles.btn}>
          <Button text="Checkout Now" />
        </View>
        <Gap height={40} />
      </View>
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  titleDetail: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
    marginBottom: 8,
    marginTop: 16,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
    marginBottom: 8,
  },
  btn: {paddingHorizontal: 24, marginTop: 24},
});
