import React from 'react';
import { Animated, useWindowDimensions } from 'react-native';
import Box from '../../components/Box';
import Text from '../../components/Text';
import data from './data';

const TICKER_HEIGHT = 40;

interface Props {
	scrollX: Animated.Value;
}

function Ticker({ scrollX }: Props) {
	const { width } = useWindowDimensions();

	const inputRange = [-width, 0, width];
	const translateY = scrollX.interpolate({
		inputRange,
		outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT],
	});

	return (
		<Box
			position='absolute'
			top={40}
			left={20}
			overflow='hidden'
			height={TICKER_HEIGHT}
		>
			<Animated.View style={{ transform: [{ translateY }] }}>
				{data.map(({ type }, index) => (
					<Text
						fontSize={TICKER_HEIGHT}
						lineHeight={TICKER_HEIGHT}
						textTransform='uppercase'
						fontWeight='800'
						key={index}
					>
						{type}
					</Text>
				))}
			</Animated.View>
		</Box>
	);
}

export default Ticker;
