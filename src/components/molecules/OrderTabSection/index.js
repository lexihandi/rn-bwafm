import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {
  DummyFoodTasteOne,
  DummyFoodTasteThree,
  DummyFoodTasteTwo,
} from '../../../assets';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: 1,
    }}
    style={{
      backgroundColor: '#fff',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#f2f2f2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <ItemListFood
        image={DummyFoodTasteOne}
        title="Soup Bumil"
        onPress={() => navigation.navigate('FoodDetail')}
        rating={3}
        items={3}
        price="2.000.000"
        type="in-progress"
      />
      <ItemListFood
        image={DummyFoodTasteTwo}
        title="Soup Bumil"
        onPress={() => navigation.navigate('FoodDetail')}
        rating={3}
        items={3}
        price="2.000.000"
        type="in-progress"
      />
      <ItemListFood
        image={DummyFoodTasteThree}
        title="Soup Bumil"
        onPress={() => navigation.navigate('FoodDetail')}
        rating={3}
        items={3}
        price="2.000.000"
        type="in-progress"
      />
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <ItemListFood
        image={DummyFoodTasteOne}
        title="Soup Bumil"
        price="289.000"
        onPress={() => navigation.navigate('FoodDetail')}
        type="past-orders"
        items={3}
        rating={3}
        date="12 maret 2021"
        status="cancelled"
      />
      <ItemListFood
        image={DummyFoodTasteTwo}
        title="Soup Bumil"
        price="289.000"
        onPress={() => navigation.navigate('FoodDetail')}
        type="past-orders"
        items={3}
        rating={3}
        date="12 maret 2021"
        status="cancelled"
      />
      <ItemListFood
        image={DummyFoodTasteThree}
        title="Soup Bumil"
        price="289.000"
        onPress={() => navigation.navigate('FoodDetail')}
        type="past-orders"
        items={3}
        rating={3}
        date="12 maret 2021"
        status="cancelled"
      />
    </View>
  );
};

const renderScene = SceneMap({
  1: InProgress,
  2: PastOrders,
});

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: '#fff'}}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({
  page: {paddingTop: 8, paddingHorizontal: 24},
});
