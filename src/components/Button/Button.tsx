import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {buttonPresets} from './buttonPresets';

export type ButtonPreset = 'primary' | 'outline' | 'secondary';

// const buttonPresets: Record<ButtonPreset, ButtonUI> = {
//   primary: {
//     container: {
//       backgroundColor: 'primary',
//     },
//     content: 'primaryContrast',
//   },

//   outline: {
//     container: {
//       borderWidth: 1,
//       borderColor: 'primary',
//     },
//     content: 'primary',
//   },

//   secondary: {
//     container: {
//       backgroundColor: 'carrotSecondary',
//     },
//     content: 'primaryContrast',
//   },
// };

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset];

  return (
    <TouchableOpacityBox
      //backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
