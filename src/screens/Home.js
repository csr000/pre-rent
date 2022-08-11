import React, { useState } from 'react';
import {
  StyleSheet,
  // Dimensions,
  // Pressable,
  ImageBackground,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import colors from '../constants/colors';
import Block from '../components/Block';
import Text from '../components/Text';
// import bg from '../../assets/fe-imgs/audi/A3-sportback.png';

// audi
import audiImg1 from '../../assets/fe-imgs/audi/A3-sportback.png';
import audiImg2 from '../../assets/fe-imgs/audi/Audi-e-tron-S.png';
import audiImg3 from '../../assets/fe-imgs/audi/case-7-sportback.png';
import audiImg4 from '../../assets/fe-imgs/audi/limousine.png';
import audiImg5 from '../../assets/fe-imgs/audi/q7.png';
// bmw
import bmwImg1 from '../../assets/fe-imgs/bmw/BMW-4-Series-Convertible.png';
import bmwImg2 from '../../assets/fe-imgs/bmw/BMW-8-Series-Convertible.png';
import bmwImg3 from '../../assets/fe-imgs/bmw/BMW-8-Series-Coupé-M-Models.png';
import bmwImg4 from '../../assets/fe-imgs/bmw/BMW-X1.png';
import bmwImg5 from '../../assets/fe-imgs/bmw/BMW-X6-M-Models.png';
import bmwImg6 from '../../assets/fe-imgs/bmw/BMW-X7-M50i.png';
// // rr
import rrImg1 from '../../assets/fe-imgs/rr/rr-black-badge.png';
import rrImg2 from '../../assets/fe-imgs/rr/rr-cullinan.png';
import rrImg3 from '../../assets/fe-imgs/rr/rr-ghost-extended.png';
import rrImg4 from '../../assets/fe-imgs/rr/rr-ghost.png';
import rrImg5 from '../../assets/fe-imgs/rr/rr-phantom-extended.png';
import rrImg6 from '../../assets/fe-imgs/rr/rr-phantom.png';

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
    borderColor: '#ddd',
    borderBottomWidth: 1,
    elevation: 1,
  },
  section: {
    // backgroundColor: '#fff',
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
          model: 'A3 sportback',
          image: audiImg1,
          ppd: '$2100 / Day',
          stars: '4.9',
        },
        {
          model: 'Audi e-tron S',
          image: audiImg2,
          ppd: '$3000 / Day',
          stars: '4.8',
        },
        {
          model: 'Case 7 sportback',
          image: audiImg3,
          ppd: '$3000 / Day',
          stars: '4.8',
        },
        {
          model: 'Limousine',
          image: audiImg4,
          ppd: '$3000 / Day',
          stars: '4.8',
        },
        {
          model: 'Q7',
          image: audiImg5,
          ppd: '$3000 / Day',
          stars: '4.8',
        },
      ];
      break;
    case 'BMW':
      carouselItems = [
        {
          model: 'BMW 4 Series Convertible',
          image: bmwImg1,
          ppd: '$2100 / Day',
          stars: '4.9',
        },
        {
          model: 'BMW 8 Series Convertible',
          image: bmwImg2,
          ppd: '$2100 / Day',
          stars: '4.9',
        },
        {
          model: 'BMW 8 Series Coupé M Models',
          image: bmwImg3,
          ppd: '$2100 / Day',
          stars: '4.9',
        },
        {
          model: 'BMW X1',
          image: bmwImg4,
          ppd: '$2100 / Day',
          stars: '4.9',
        },
        {
          model: 'BMW X6 M Models',
          image: bmwImg5,
          ppd: '$2100 / Day',
          stars: '4.9',
        },
        {
          model: 'BMW X7 M50i',
          image: bmwImg6,
          ppd: '$2100 / Day',
          stars: '4.9',
        },
      ];
      break;
    // case 'LAMBORGHINI':
    //   carouselItems = [
    //     {
    //       model: 'BMW 4 Series Convertible',
    //       image: audiImg[0],
    //       ppd: '$2100 / Day',
    //       stars: '4.9',
    //     },
    //     {
    //       model: 'BMW 8 Series Convertible',
    //       image: audiImg[1],
    //       ppd: '$2100 / Day',
    //       stars: '4.9',
    //     },
    //     {
    //       model: 'BMW 8 Series Coupé M Models',
    //       image: audiImg[2],
    //       ppd: '$2100 / Day',
    //       stars: '4.9',
    //     },
    //     {
    //       model: 'BMW X1',
    //       image: audiImg[3],
    //       ppd: '$2100 / Day',
    //       stars: '4.9',
    //     },
    //     {
    //       model: 'BMW X6 M Models',
    //       image: audiImg[4],
    //       ppd: '$2100 / Day',
    //       stars: '4.9',
    //     },
    //     {
    //       model: 'BMW X7 M50i',
    //       image: audiImg[5],
    //       ppd: '$2100 / Day',
    //       stars: '4.9',
    //     },
    //   ];
    //   break;
    case 'ROLLS-ROYCE':
      carouselItems = [
        {
          model: 'Black Badge',
          image: rrImg1,
          ppd: '$2100 / Day',
          stars: '4.9',
        },
        {
          model: 'Cullinan',
          image: rrImg2,
          ppd: '$2100 / Day',
          stars: '4.9',
        },
        {
          model: 'Ghost Extended',
          image: rrImg3,
          ppd: '$2100 / Day',
          stars: '4.9',
        },
        {
          model: 'Ghost',
          image: rrImg4,
          ppd: '$2100 / Day',
          stars: '4.9',
        },
        {
          model: 'Phantom Extended',
          image: rrImg5,
          ppd: '$2100 / Day',
          stars: '4.9',
        },
        {
          model: 'Phantom',
          image: rrImg6,
          ppd: '$2100 / Day',
          stars: '4.9',
        },
      ];
      break;

    default:
      break;
  }

  const _renderItem = ({ item }) => {
    console.log(item);
    return (
      <ImageBackground
        source={item.image}
        resizeMode="contain"
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
        {/* <Block style={{ marginTop: '75%' }}>
          <Text bold size={20} style={{ color: colors.white }}>
            {item.model}
          </Text>
          <Text style={{ color: colors.white, marginTop: 5 }}>{item.ppd}</Text>
        </Block> */}
      </ImageBackground>
    );
  };

  return (
    <>
      <Block row middle space="between" style={{ marginVertical: 10 }}>
        <Text bold size={24}>
          {brand}
        </Text>
        <AntDesign name="arrowright" size={24} color="black" />
      </Block>

      <Block
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Carousel
          layout="default"
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
          <Text bold color={colors.deepGray}>
            SUV
          </Text>
        </Block>
        <Block middle style={styles.section}>
          <Text bold color={colors.deepGray}>
            Sedan
          </Text>
        </Block>
        <Block middle style={styles.section}>
          <Text bold color={colors.deepGray}>
            Convertible
          </Text>
        </Block>
        <Block middle style={styles.section}>
          {/* <Text bold color={colors.deepGray}>
            icon
          </Text> */}
          <MaterialIcons
            name="pause-presentation"
            size={24}
            color={colors.deepGray}
          />
        </Block>
      </Block>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <CarouselRow brand="AUDI" />
        <CarouselRow brand="BMW" />
        <CarouselRow brand="ROLLS-ROYCE" />
      </ScrollView>
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
