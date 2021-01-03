import React, { useRef } from 'react';
import { Animated } from 'react-native';
import Box from '../../components/Box';
import Product from './Product';
import { product_list } from './data';

function AnimatedCoursel() {
	const scrollX = useRef(new Animated.Value(0)).current;

	return (
		<Box flex={1} alignItems='center' justifyContent='center'>
			<Animated.ScrollView
				contentContainerStyle={{
					alignItems: 'center',
					justifyContent: 'center',
				}}
				showsHorizontalScrollIndicator={false}
				pagingEnabled
				horizontal
				scrollEventThrottle={16}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: true }
				)}
			>
				{product_list.map((product, index) => (
					<Product
						key={product.name + index}
						product={product}
						index={index}
						scrollX={scrollX}
					/>
				))}
			</Animated.ScrollView>
		</Box>
	);
}

export default AnimatedCoursel;
