import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {DummyFoodOne, DummyFoodTwo} from '../../assets';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';

const Home = () => {
  return (
    // <ScrollView>
    <View style={styles.page}>
      <View>
        <HomeProfile />
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodContainer}>
            <Gap width={24} />
            <FoodCard img={DummyFoodOne} title="Cherry Healthy" />
            <FoodCard img={DummyFoodTwo} title="Burger Tamayo" />
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
    // </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#FAFAFC'},
  foodContainer: {flexDirection: 'row', marginVertical: 24},
  tabContainer: {flex: 1},
});
