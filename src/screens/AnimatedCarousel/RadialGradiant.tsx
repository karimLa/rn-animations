import React from 'react';
import { Animated, StyleSheet, useWindowDimensions } from 'react-native';
import {
	Svg,
	Defs,
	RadialGradient as Gradiant,
	Stop,
	Rect,
} from 'react-native-svg';

interface Props {
	color: string;
	scrollX: Animated.Value;
	inputRange: number[];
}

function RadialGradiant({ color, scrollX, inputRange }: Props) {
	const { width } = useWindowDimensions();

	const rotate = scrollX.interpolate({
		inputRange,
		outputRange: ['0deg', '-15deg', '0deg', '15deg'],
	});

	const translateX = scrollX.interpolate({
		inputRange,
		outputRange: [0, width, 0, -width],
	});

	const opacity = scrollX.interpolate({
		inputRange,
		outputRange: [1, 0.5, 1, 0.5],
	});

	return (
		<Animated.View
			style={[
				StyleSheet.absoluteFill,
				{
					zIndex: -1,
					opacity,
					transform: [{ rotate }, { translateX }, { scale: 1.3 }],
				},
			]}
		>
			<Svg width='100%' height='100%'>
				<Defs>
					<Gradiant
						id='grad'
						cx='50%'
						cy='35%'
						r='60%'
						gradientUnits='userSpaceOnUse'
					>
						<Stop offset='0%' stopColor='#fff' stopOpacity='1' />
						<Stop offset='100%' stopColor={color} stopOpacity='1' />
					</Gradiant>
				</Defs>

				<Rect
					x='0'
					y='0'
					width='100%'
					height='100%'
					fill={`url(#grad)`}
					fillOpacity='0.9'
				/>
			</Svg>
		</Animated.View>
	);
}

export default RadialGradiant;
