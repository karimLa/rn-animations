import React, { useCallback, useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { BoxProps } from '@shopify/restyle';
import { Theme } from '../../constants/theme';
import Box from '../../components/Box';
import useTheme from '../../hooks/useTheme';

type Props = BoxProps<Theme> & {
	content: string;
	textStyle?: any;
	color?: keyof Theme['colors'];
	duration?: number;
	onFinish?: () => void;
};

function TextAnimator({
	content,
	duration,
	onFinish,
	textStyle,
	color,
	...props
}: Props) {
	const { colors } = useTheme();
	const words = useRef(content.trim().split(' ')).current;
	const animatedValues = useRef(
		Array.from({ length: words.length }, () => new Animated.Value(0))
	).current;

	useEffect(() => {
		animate();
	}, []);

	const animate = useCallback(
		(toValue: number = 1) => {
			const animations = words.map((_, i) => {
				return Animated.timing(animatedValues[i], {
					toValue,
					duration,
					useNativeDriver: true,
				});
			});

			const values = toValue === 0 ? animations.reverse() : animations;

			Animated.stagger(duration! / 5, values).start(() => {
				// Fade Backward
				// setTimeout(() => animate(toValue === 0 ? 1 : 0), 1000);

				if (onFinish) {
					if (typeof onFinish !== 'function') {
						throw new Error('onFinish must be a function');
					}
					onFinish();
				}
			});
		},
		[animatedValues, duration, onFinish]
	);

	return (
		<Box {...props} flexWrap='wrap' flexDirection='row'>
			{words.map((word, index) => {
				return (
					<Animated.Text
						key={word + index}
						style={[
							textStyle,
							{ opacity: animatedValues[index], color: colors[color!] },
						]}
					>
						{word}{' '}
					</Animated.Text>
				);
			})}
		</Box>
	);
}

TextAnimator.defaultProps = {
	textStyle: {
		fontSize: 28,
		fontWeight: 'bold',
		marginBottom: 10,
		lineHeight: 25,
	},
	color: 'textGrey',
	duration: 500,
};

export default TextAnimator;
