import React from 'react';
import { Animated, StyleSheet, useWindowDimensions } from 'react-native';
import Box from '../../components/Box';
import data from './data';

const DOT_SIZE = 40;

interface Props {
	scrollX: Animated.Value;
}

function Pagination({ scrollX }: Props) {
	const { width } = useWindowDimensions();

	const inputRange = [-width, 0, width];
	const translateX = scrollX.interpolate({
		inputRange,
		outputRange: [-DOT_SIZE, 0, DOT_SIZE],
	});

	return (
		<Box
			height={DOT_SIZE}
			position='absolute'
			right={20}
			bottom={40}
			flexDirection='row'
		>
			<Animated.View
				style={[styles.paginationIndicator, { transform: [{ translateX }] }]}
			/>

			{data.map((item) => (
				<Box
					key={item.key}
					width={DOT_SIZE}
					justifyContent='center'
					alignItems='center'
				>
					<Box
						width={DOT_SIZE * 0.3}
						height={DOT_SIZE * 0.3}
						borderRadius={(DOT_SIZE * 0.3) / 2}
						style={{ backgroundColor: item.color }}
					/>
				</Box>
			))}
		</Box>
	);
}

export default Pagination;

const styles = StyleSheet.create({
	paginationIndicator: {
		position: 'absolute',
		width: DOT_SIZE,
		height: DOT_SIZE,
		borderRadius: DOT_SIZE / 2,
		borderWidth: 2,
		borderColor: '#ddd',
	},
});
