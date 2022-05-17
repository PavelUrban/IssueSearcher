export * from './colors';

import { Dimensions } from 'react-native';

import { CONFIG } from '@config/index';

const window = Dimensions.get('window');
export const entireScreenWidth = window.width > window.height ? window.height : window.width;
export const rem = (remValue: number = 1): number => (remValue * entireScreenWidth) / CONFIG.MOCK_WIDTH; // root element

export const entireScreenHeight = window.width > window.height ? window.width : window.height;
export const vrem = (remValue: number = 1): number => (remValue * entireScreenHeight) / 812;
export const vh = (vhValue: number = 1): number => (vhValue * entireScreenHeight) / 100; // 1 vhValue is 1% of screen height

export const elevationShadowStyle = (elevation: number, shadowColor: string = 'black') => {
  return {
    elevation,
    shadowColor,
    shadowOffset: { width: 0, height: 0.8 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.6 * elevation,
  };
};
