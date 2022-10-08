import React, { TouchableOpacity } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import colors from '../../constants/colors';
import Block from '../../components/Block';
import Text from '../../components/Text';
import SpecsCard from './SpecsCard';

export default function BtmSheetModal({
  bottomSheetModalRef,
  snapPoints,
  handleSheetChanges,
}) {
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <Block flex={1} alignItems="center">
        <Block marginTop={10} />
        <Block row left width="80%" marginBottom={7}>
          <Text bold size={18}>
            Features
          </Text>
        </Block>
        <Block row center width="80%" space="between">
          <SpecsCard
            icon={
              <MaterialCommunityIcons name="engine" size={24} color="black" />
            }
            title="ENGINE OUTPUT"
            numberValue="571"
            unit="hp"
            bgColor="#FCEACC"
          />
          <SpecsCard
            icon={<Ionicons name="speedometer" size={24} color="black" />}
            title="HIGHEST SPEED"
            numberValue="250"
            unit="km/h"
            bgColor="#DBE4F1"
          />
          <SpecsCard
            icon={
              <MaterialCommunityIcons name="timer" size={24} color="black" />
            }
            title="TIME TO 100KM/H"
            numberValue="5.2"
            unit="sec"
            bgColor="#f1dbe4"
          />
        </Block>
        {/* <Block backgroundColor="#f0eded" height={2} width={scaleWidth - 40} /> */}
        <Block row center width="80%" space="between" marginTop={20}>
          <Block row center>
            <Text>$</Text>
            <Text bold size={48}>
              2100
            </Text>

            <Text light> / DAY</Text>
          </Block>
          <TouchableOpacity>
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
          </TouchableOpacity>
        </Block>
      </Block>
    </BottomSheetModal>
  );
}
