import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Pressable,
  ImageBackground,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/colors';
import Block from '../components/Block';
import Text from '../components/Text';

import bg from '../../assets/fe-imgs/black-car.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    color: '#fff',
  },
  getStarted: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 20,
    marginTop: 150,
  },
});

export const GetStarted = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={bg}
        resizeMode="contain"
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          marginTop: 70,
          paddingHorizontal: 30,
          // alignItems: 'center',
        }}
      >
        {/* <Block>
          <Text color={colors.white}>PreRent</Text>
        </Block> */}
        <Block style={{ marginBottom: '70%' }}>
          <Text bold size={70} color={colors.white}>
            Premium
          </Text>
          <Text bold size={55} color={colors.white} style={{ marginTop: -20 }}>
            car rental
          </Text>
          <Text light color={colors.gray} size={20}>
            Rent the car of your dreams {'\n'}
            with home delivery
          </Text>
        </Block>
        <Block row center middle>
          <Pressable
            onPress={() => navigation.navigate('Home')}
            style={styles.getStarted}
          >
            <Text bold color={colors.white} size={20}>
              Get Started
            </Text>
          </Pressable>
        </Block>
      </ImageBackground>
    </SafeAreaView>
  );
};
