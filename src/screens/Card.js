import React, { useCallback, useMemo, useRef } from 'react';
import { Dimensions, TextInput, Image, TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Carousel from 'react-native-snap-carousel';
import {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Block from '../components/Block';
import Text from '../components/Text';
import colors from '../constants/colors';

const _renderItem = ({ item }) => {
  return (
    <Image
      source={item.src}
      resizeMode="contain"
      style={{ width: 300, height: 300 }}
    />
  );
};

const Card = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['2%', '35%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const screenWidth = Dimensions.get('screen').width;
  const scaleWidth = screenWidth - 40;

  const categoryStyle = {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: colors.deepGray,
    borderRadius: 15,
  };

  const isCarousel = React.useRef(null);
  const cardImgs = [
    { src: require('../../assets/fe-imgs/card1.png') },
    { src: require('../../assets/fe-imgs/card2.png') },
    { src: require('../../assets/fe-imgs/card3.png') },
  ];

  // renders
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 24,
        backgroundColor: colors.background,
      }}
    >
      <Block row space="between">
        <Block backgroundColor={colors.white} padding={10} borderRadius={15}>
          <Ionicons name="ios-arrow-back" size={24} color={colors.deepGray} />
        </Block>
        <Text>
          <MaterialIcons name="account-circle" size={24} color="black" />
        </Text>
      </Block>
      <Block marginTop={70}>
        <Block row center space="between">
          <Text bold size={36}>
            Your cards
          </Text>
          <MaterialCommunityIcons
            name="contactless-payment"
            size={24}
            color="black"
          />
        </Block>
        <Block row space="between">
          <Block row middle space="around" marginTop={10}>
            <Block
              middle
              backgroundColor={colors.goldenrod}
              borderColor={colors.goldenrod}
              style={categoryStyle}
            >
              <Text bold color={colors.black}>
                Bank card
              </Text>
            </Block>

            <Block middle style={categoryStyle}>
              <Text bold color={colors.deepGray}>
                Google Pay
              </Text>
            </Block>
            <Block middle style={categoryStyle}>
              <Text bold color={colors.deepGray}>
                Mobile Money
              </Text>
            </Block>
            <Block middle marginLeft={5}>
              <MaterialIcons
                name="pause-presentation"
                size={24}
                color={colors.deepGray}
              />
            </Block>
          </Block>
        </Block>
        <Carousel
          layout="tinder"
          ref={isCarousel}
          data={cardImgs}
          renderItem={_renderItem}
          sliderWidth={scaleWidth}
          itemWidth={300}
        />
        <Block row>
          <Block
            row
            center
            space="between"
            backgroundColor="#F9F9F9"
            width={scaleWidth - 120}
            padding={10}
            marginBottom={30}
            borderRadius={10}
          >
            <TextInput placeholder="Promo Code" />
            <TouchableOpacity>
              <Block
                backgroundColor={colors.black}
                padding={5}
                borderRadius={7}
                opacity={0.9}
              >
                <Text color={colors.gray}>Apply</Text>
              </Block>
            </TouchableOpacity>
          </Block>
          <TouchableOpacity>
            <Block
              backgroundColor={colors.black}
              padding={10}
              marginTop={5}
              borderRadius={7}
              opacity={0.9}
            >
              <Text color={colors.white}>Add New Card</Text>
            </Block>
          </TouchableOpacity>
        </Block>
        <TouchableOpacity>
          <Block
            center
            backgroundColor={colors.black}
            paddingHorizontal={20}
            paddingVertical={20}
            borderRadius={20}
            width={scaleWidth}
          >
            <Text bold color={colors.gray} size={18}>
              Pay Now
            </Text>
          </Block>
        </TouchableOpacity>
      </Block>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <Block center flex={1}>
          <Text bold size={24}>
            Add new card
          </Text>
          <Block row center width="80%" space="between" />
          <Block
            row
            center
            space="between"
            backgroundColor="#F9F9F9"
            width={scaleWidth}
            padding={10}
            borderRadius={10}
          >
            <FontAwesome name="cc-visa" size={18} color="black" />
            <TextInput defaultValue="4500 2890 7700 0308" />
            <AntDesign name="closecircle" size={18} color={colors.middleGray} />
          </Block>
          <Block
            row
            center
            width={scaleWidth}
            space="between"
            marginVertical={10}
          >
            <Block
              row
              center
              space="between"
              backgroundColor="#F9F9F9"
              width="48%"
              padding={10}
              borderRadius={10}
            >
              <TextInput value="08 / 26" />
              <AntDesign
                name="closecircle"
                size={18}
                color={colors.middleGray}
              />
            </Block>
            <Block
              row
              center
              space="between"
              backgroundColor="#F9F9F9"
              width="48%"
              padding={10}
              borderRadius={10}
            >
              <TextInput secureTextEntry value="999" />
              <AntDesign
                name="closecircle"
                size={18}
                color={colors.middleGray}
              />
            </Block>
          </Block>
          <Block
            backgroundColor={colors.gray}
            margin={20}
            height={1}
            width={scaleWidth}
          />
          <TouchableOpacity>
            <Block
              center
              backgroundColor={colors.black}
              paddingHorizontal={20}
              paddingVertical={20}
              borderRadius={20}
              width={scaleWidth}
            >
              <Text bold color={colors.gray}>
                Save Card
              </Text>
            </Block>
          </TouchableOpacity>
        </Block>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Card;
