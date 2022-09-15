import React, { useCallback, useMemo, useRef } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import { AntDesign, Ionicons } from '@expo/vector-icons';
import Block from '../components/Block';
import Text from '../components/Text';
import colors from '../constants/colors';

const Map = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['2%', '35%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <Block style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <Block style={styles.contentContainer}>
          <Block row center width="80%" space="between">
            <Text>Img</Text>
            <Block>
              <Text bold>Steve Torn</Text>
              <Text>Your manager</Text>
            </Block>
            <AntDesign name="message1" size={24} color={colors.black} />
            <Ionicons name="call" size={24} color={colors.black} />
          </Block>
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
          <Block row center width="80%" space="between">
            <Text size={18}>11:00AM</Text>
            <Pressable>
              <Block
                backgroundColor={colors.goldenrod}
                paddingHorizontal={20}
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
    padding: 24,
    backgroundColor: 'black',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Map;
