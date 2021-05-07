import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {ItemListFood} from '..';
import {
  DummyFoodTasteOne,
  DummyFoodTasteThree,
  DummyFoodTasteTwo,
} from '../../../assets';

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

const NewTaste = () => {
  return (
    <View style={styles.page}>
      <ItemListFood image={DummyFoodTasteOne} />
      <ItemListFood image={DummyFoodTasteTwo} />
      <ItemListFood image={DummyFoodTasteThree} />
    </View>
  );
};

const Popular = () => {
  return (
    <View style={styles.page}>
      <ItemListFood image={DummyFoodTasteOne} />
      <ItemListFood image={DummyFoodTasteTwo} />
      <ItemListFood image={DummyFoodTasteThree} />
    </View>
  );
};
const Recommended = () => {
  return (
    <View style={styles.page}>
      <ItemListFood image={DummyFoodTasteOne} />
      <ItemListFood image={DummyFoodTasteTwo} />
      <ItemListFood image={DummyFoodTasteThree} />
    </View>
  );
};

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recommended,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
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

export default HomeTabSection;

const styles = StyleSheet.create({
  page: {paddingTop: 8},
});