import React, { useRef } from 'react';
import { Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Box from '../../components/Box';
import Image from '../../components/Image';
import data from './data';
import Item from './Item';
import Pagination from './Pagination';
import Ticker from './Ticker';
import Circle from './Circle';

const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 40;

function FlatListCarousel() {
	const scrollX = useRef(new Animated.Value(0)).current;

	return (
		<Box flex={1}>
			<StatusBar hidden />
			<Circle scrollX={scrollX} />
			<Animated.FlatList
				data={data}
				keyExtractor={(item) => item.key}
				renderItem={({ item, index }) => (
					<Item product={item} index={index} scrollX={scrollX} />
				)}
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				horizontal
				scrollEventThrottle={16}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: true }
				)}
			/>
			<Image
				opacity={0.9}
				height={LOGO_HEIGHT}
				width={LOGO_WIDTH}
				resizeMode='contain'
				position='absolute'
				left={10}
				bottom={10}
				style={{
					transform: [
						{ translateX: -LOGO_WIDTH / 2 },
						{ translateY: -LOGO_HEIGHT / 2 },
						{ rotateZ: '-90deg' },
						{ translateX: LOGO_WIDTH / 2 },
						{ translateY: LOGO_HEIGHT / 2 },
					],
				}}
				source={require('../../../assets/ue_black_logo.png')}
			/>
			<Pagination scrollX={scrollX} />
			<Ticker scrollX={scrollX} />
		</Box>
	);
}

export default FlatListCarousel;
