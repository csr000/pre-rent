import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../constants/colors';
import Block from '../../components/Block';
import Text from '../../components/Text';

// audi
import audiImg1 from '../../../assets/fe-imgs/audi/A3-sportback.png';
import audiImg2 from '../../../assets/fe-imgs/audi/Audi-e-tron-S.png';
import audiImg3 from '../../../assets/fe-imgs/audi/case-7-sportback.png';
import audiImg4 from '../../../assets/fe-imgs/audi/limousine.png';
import audiImg5 from '../../../assets/fe-imgs/audi/q7.png';
// bmw
import bmwImg1 from '../../../assets/fe-imgs/bmw/BMW-4-Series-Convertible.png';
import bmwImg2 from '../../../assets/fe-imgs/bmw/BMW-8-Series-Convertible.png';
import bmwImg3 from '../../../assets/fe-imgs/bmw/BMW-8-Series-Coupé-M-Models.png';
import bmwImg4 from '../../../assets/fe-imgs/bmw/BMW-X1.png';
import bmwImg5 from '../../../assets/fe-imgs/bmw/BMW-X6-M-Models.png';
import bmwImg6 from '../../../assets/fe-imgs/bmw/BMW-X7-M50i.png';
// // rr
import rrImg1 from '../../../assets/fe-imgs/rr/rr-black-badge.png';
import rrImg2 from '../../../assets/fe-imgs/rr/rr-cullinan.png';
import rrImg3 from '../../../assets/fe-imgs/rr/rr-ghost-extended.png';
import rrImg4 from '../../../assets/fe-imgs/rr/rr-ghost.png';
import rrImg5 from '../../../assets/fe-imgs/rr/rr-phantom-extended.png';
import rrImg6 from '../../../assets/fe-imgs/rr/rr-phantom.png';

export default function CarouselRow({ brand, handlePresentModalPress }) {
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
    return (
      <TouchableOpacity onPress={handlePresentModalPress}>
        <LinearGradient
          // Button Linear Gradient
          colors={['transparent', '#000']}
          style={{ borderRadius: 30 }}
        >
          <ImageBackground
            source={item.image}
            resizeMode="contain"
            imageStyle={{ borderRadius: 30 }}
            style={{
              width: 200,
              height: 250,
              overflow: 'hidden',
              padding: 20,
            }}
          >
            <Block row center>
              <MaterialIcons name="stars" size={18} color="darkgoldenrod" />
              <Text style={{ color: colors.black, marginLeft: 2 }}>
                {item.stars}
              </Text>
            </Block>
            {/* <Block row center style={{ background: "#000" }}></Block> */}
            <Block style={{ marginTop: '75%' }}>
              <Text bold size={20} style={{ color: colors.white }}>
                {item.model}
              </Text>
              <Text style={{ color: colors.white, marginTop: 5 }}>
                {item.ppd}
              </Text>
            </Block>
          </ImageBackground>
        </LinearGradient>
      </TouchableOpacity>
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
}
