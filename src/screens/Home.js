import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  Pressable,
  ImageBackground,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../constants/colors';
import Block from '../components/Block';
import Text from '../components/Text';
import bg from '../../assets/fe-imgs/black-car.jpg';

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

const CarouselRow = ({ brand }) => {
  // ppd == price per day
  const [, setActiveIndex] = useState(0);
  let carouselItems;
  switch (brand) {
    case 'AUDI':
      carouselItems = [
        {
          model: 'Rolls-Royce Cullinan',
          ppd: '$2100 / Day',
          stars: '4.9',
        },
        {
          model: 'Rolls-Royce Bolewan',
          ppd: '$3000 / Day',
          stars: '4.8',
        },
      ];
      break;
    case 'BMW':
      carouselItems = [
        {
          model: 'BMW Cullinan',
          ppd: '$2100 / Day',
          stars: '4.9',
        },
        {
          model: 'bmw Bolewan',
          ppd: '$3000 / Day',
          stars: '4.8',
        },
      ];
      break;

    default:
      break;
  }

  const _renderItem = ({ item }) => {
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
          <Text style={{ color: colors.white, marginLeft: 2 }}>
            {item.stars}
          </Text>
        </Block>
        <Block style={{ marginTop: '75%' }}>
          <Text bold size={20} style={{ color: colors.white }}>
            {item.model}
          </Text>
          <Text style={{ color: colors.white, marginTop: 5 }}>{item.ppd}</Text>
        </Block>
      </ImageBackground>
    );
  };

  return (
    <>
      <Block row middle space="between" style={{ marginTop: 10 }}>
        <Text bold>{brand}</Text>
        <Text light>icon</Text>
      </Block>

      <Block
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}
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
    </>
  );
};

export const Home = ({ navigation }) => {
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
      <CarouselRow brand="AUDI" />
      <CarouselRow brand="BMW" />
      {/* <Block row middle space="between" style={{ marginTop: 10 }}>
        <Text bold>BMW</Text>
        <Text light>icon</Text>
      </Block> */}
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
