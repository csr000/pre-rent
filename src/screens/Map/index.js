import React, { useCallback, useMemo, useRef } from 'react';
import { Pressable, StyleSheet, Image } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import { AntDesign, Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import Block from '../../components/Block';
import Text from '../../components/Text';
import colors from '../../constants/colors';
import { scaleWidth, screenHeight, screenWidth } from '../utils';

const Map = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['2%', '27%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const coordinates = {
    latitude: 5.63415,
    longitude: -0.17115,
  };

  // renders
  return (
    <Block style={styles.container}>
      <MapView
        style={{
          width: screenWidth,
          height: screenHeight,
        }}
        initialRegion={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.08,
          longitudeDelta: 0,
        }}
      >
        <Marker coordinate={coordinates} />
      </MapView>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <Block flex={1} alignItems="center">
          <Block row center width="80%">
            <Block marginRight={20}>
              <Image
                source={require('../../../assets/fe-imgs/manager.jpg')}
                style={{ width: 50, height: 50, borderRadius: 20 }}
              />
            </Block>
            <Block width="60%">
              <Text bold>Steve Torn</Text>
              <Text>Manager</Text>
            </Block>
            <Block row space="between" width="20%">
              <AntDesign name="message1" size={24} color={colors.black} />
              <Ionicons name="call" size={24} color={colors.black} />
            </Block>
          </Block>
          <Block
            backgroundColor="#f0eded"
            height={2}
            width={scaleWidth - 40}
            marginTop={10}
          />
          <Block row center width="80%" space="between">
            <Text bold size={18}>
              Remaining time
            </Text>
            <Block row center>
              <Text bold size={48}>
                1
              </Text>
              <Text>hr </Text>
              <Text bold size={48}>
                05
              </Text>
              <Text>min</Text>
            </Block>
          </Block>
          <Block backgroundColor="#f0eded" height={2} width={scaleWidth - 40} />
          <Block row center width="80%" space="between" marginTop={20}>
            <Text size={18}>11:00AM</Text>
            <Pressable>
              <Block
                backgroundColor={colors.goldenrod}
                paddingHorizontal={30}
                paddingVertical={10}
                borderRadius={10}
                elevation={1}
              >
                <Text bold color={colors.gray}>
                  Pay now
                </Text>
              </Block>
            </Pressable>
          </Block>
        </Block>
      </BottomSheet>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Map;
