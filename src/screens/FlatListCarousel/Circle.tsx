import React from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import Box from '../../components/Box';
import data from './data';

const { width } = Dimensions.get('window');

const CIRCLE_SIZE = width * 0.6;

interface Props {
	scrollX: Animated.Value;
}

function Circle({ scrollX }: Props) {
	return (
		<Box
			alignItems='center'
			justifyContent='center'
			style={StyleSheet.absoluteFill}
		>
			{data.map(({ color }, index) => {
				const inputRange = [
					(index - 0.55) * width,
					index * width,
					(index + 0.55) * width,
				];
				const scale = scrollX.interpolate({
					inputRange,
					outputRange: [0, 1, 0],
					extrapolate: 'clamp',
				});
				const opacity = scrollX.interpolate({
					inputRange,
					outputRange: [0, 0.2, 0],
				});

				return (
					<Animated.View
						key={index}
						style={[
							styles.circle,
							{ backgroundColor: color, opacity, transform: [{ scale }] },
						]}
					/>
				);
			})}
		</Box>
	);
}

export default Circle;

const styles = StyleSheet.create({
	circle: {
		width: CIRCLE_SIZE,
		height: CIRCLE_SIZE,
		borderRadius: CIRCLE_SIZE / 2,
		position: 'absolute',
		top: '15%',
	},
});
