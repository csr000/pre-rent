import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  Pressable,
  ImageBackground,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import colors from '../constants/colors';
import Block from '../components/Block';
import Text from '../components/Text';
import bg from '../../assets/fe-imgs/black-car.jpg';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.black,
    backgroundColor: colors.gray,
    paddingHorizontal: 30,
  },
  nav: {
    backgroundColor: '#fff',
    width: '95%',
    height: 70,
    borderRadius: 20,
    paddingLeft: 30,
  },
  section: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
  },
});

export const Home = ({ navigation }) => {
  const [, setActiveIndex] = useState(0);
  const [carouselItems, _] = useState([
    {
      title: '1',
      text: '2',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
  ]);

  const _renderItem = ({ item, index }) => {
    return (
      <ImageBackground
        source={bg}
        resizeMode="cover"
        imageStyle={{ borderRadius: 30 }}
        style={{
          width: 200,
          height: 250,
          padding: 20,
        }}
      >
        <Block row center>
          <MaterialIcons name="stars" size={18} color="white" />
          <Text style={{ color: colors.white, marginLeft: 2 }}>5.0</Text>
        </Block>
        <Block style={{ marginTop: '75%' }}>
          <Text bold size={20} style={{ color: colors.white }}>
            Rolls-Royce Cullinan
          </Text>
          <Text style={{ color: colors.white, marginTop: 5 }}>$2100 / Day</Text>
        </Block>
      </ImageBackground>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Block row middle>
        <Block middle style={styles.nav}>
          <Text bold>David Smith</Text>
          <Text light>Personal discount available</Text>
        </Block>
      </Block>
      <Block row middle space="around" style={{ marginTop: 10 }}>
        <Block middle style={styles.section}>
          <Text bold>SUV</Text>
        </Block>
        <Block middle style={styles.section}>
          <Text bold>Sedan</Text>
        </Block>
        <Block middle style={styles.section}>
          <Text bold>Convertible</Text>
        </Block>
        <Block middle style={styles.section}>
          <Text bold>icon</Text>
        </Block>
      </Block>

      <Block row middle space="between" style={{ marginTop: 10 }}>
        <Text bold>AUDI</Text>
        <Text light>icon</Text>
      </Block>

      <Block
        style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}
      >
        <Carousel
          layout={'default'}
          data={carouselItems}
          sliderWidth={100}
          itemWidth={200}
          renderItem={_renderItem}
          onSnapToItem={index => setActiveIndex(index)}
        />
      </Block>

      <Block row middle space="between" style={{ marginTop: 10 }}>
        <Text bold>BMW</Text>
        <Text light>icon</Text>
      </Block>
      {/* <Block row middle space="between" style={{ marginTop: 10 }}>
        <Text bold>LAMBOGHINI</Text>
        <Text light>icon</Text>
      </Block>
      <Block row middle space="between" style={{ marginTop: 10 }}>
        <Text bold>ROLLS ROYCE</Text>
        <Text light>icon</Text>
      </Block> */}
    </SafeAreaView>
  );
};
