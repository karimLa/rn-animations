import React, { useRef, useState } from 'react';
import { Animated, StatusBar } from 'react-native';
import Box from '../../components/Box';
import Circle from './Circle';

const CircleSize = 100;

function PerspectiveAnimation() {
	const animatedValue = useRef(new Animated.Value(0)).current;
	const [index, setIndex] = useState(0);

	const onPress = () => {
		const value = index === 1 ? 0 : 1;
		setIndex(value);
		animate(value).start();
	};

	const animate = (toValue = 1) =>
		Animated.timing(animatedValue, {
			toValue,
			duration: 3000,
			useNativeDriver: false,
		});

	return (
		<Box flex={1}>
			<StatusBar hidden />
			<Circle
				size={CircleSize}
				animatedValue={animatedValue}
				onPress={onPress}
			/>
		</Box>
	);
}

export default PerspectiveAnimation;
