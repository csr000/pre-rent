import React, { useRef, useMemo, useCallback } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import colors from '../../constants/colors';
import Block from '../../components/Block';
import Text from '../../components/Text';

import CarouselRow from './CarouselRow';
import BtmSheetModal from './Modal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 10,
    borderRadius: 15,
  },
});

export default function Home() {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['2%', '40%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <BottomSheetModalProvider>
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
          <CarouselRow
            brand="AUDI"
            handlePresentModalPress={handlePresentModalPress}
          />
          <CarouselRow
            brand="BMW"
            handlePresentModalPress={handlePresentModalPress}
          />
        </ScrollView>
        <BtmSheetModal
          bottomSheetModalRef={bottomSheetModalRef}
          snapPoints={snapPoints}
          handleSheetChanges={handleSheetChanges}
        />
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
}
