import React from 'react';
import Block from '../../components/Block';
import Text from '../../components/Text';
import colors from '../../constants/colors';

export default function SpecsCard({ icon, title, numberValue, unit, bgColor }) {
  return (
    <Block
      // center
      middle
      height={150}
      width={100}
      backgroundColor={bgColor}
      borderRadius={20}
      padding={5}
    >
      <Block
        backgroundColor="rgba(243,244,246, 0.5)"
        borderRadius={50}
        padding={10}
        width={45}
      >
        {icon}
      </Block>
      <Block width={55} marginVertical={5}>
        <Text size={12}>{title}</Text>
      </Block>

      <Block row alignItems="flex-end">
        <Text bold size={24}>
          {numberValue}
        </Text>
        <Text light color={colors.deepGray}>
          {unit}
        </Text>
      </Block>
    </Block>
  );
}
