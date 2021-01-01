import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { BoxProps } from '@shopify/restyle';
import { Theme } from '../../constants/theme';
import Box from '../../components/Box';
import useTheme from '../../hooks/useTheme';

type Props = BoxProps<Theme> & {
	content: string;
	textStyle?: any;
	color?: keyof Theme['colors'];
};

function TextAnimator({ content, textStyle, color, ...props }: Props) {
	const { colors } = useTheme();
	const words = useRef(content.trim().split(' ')).current;
	const animatedValues = useRef(
		Array.from({ length: words.length }, () => new Animated.Value(0))
	).current;

	useEffect(() => {
		animate();
	}, []);

	const animate = (toValue = 1) => {
		const animations = words.map((_, i) => {
			return Animated.timing(animatedValues[i], {
				toValue,
				duration: 500,
				useNativeDriver: true,
			});
		});

		Animated.stagger(100, animations).start();
	};

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
};

export default TextAnimator;
