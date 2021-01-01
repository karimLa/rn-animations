import React, { ComponentProps } from 'react';
import { Animated, TextProps } from 'react-native';
import { ColorProps, createBox } from '@shopify/restyle';
import { Theme } from '../constants/theme';

const TextBase = createBox<Theme, TextProps>(Animated.Text);

export type AnimatedTextProps = ComponentProps<typeof TextBase> &
	ColorProps<Theme>;

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, ...props }) => {
	return <TextBase {...props}>{children}</TextBase>;
};

export default AnimatedText;
