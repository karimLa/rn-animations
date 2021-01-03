import React from 'react';
import { Dimensions, StyleSheet, Animated } from 'react-native';
import Box from '../../components/Box';
import { IProduct } from './data';

const { width, height } = Dimensions.get('window');

interface Props {
	product: IProduct;
	scrollX: Animated.Value;
	index: number;
}

function Item({ product, scrollX, index }: Props) {
	// previous, current, next
	const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
	const inputRangeOpacity = [
		(index - 0.3) * width,
		index * width,
		(index + 0.3) * width,
	];

	const scale = scrollX.interpolate({
		inputRange,
		outputRange: [0, 1, 0],
	});
	const translateXHeading = scrollX.interpolate({
		inputRange,
		outputRange: [width * 0.2, 0, -width * 0.2],
	});
	const translateXDescription = scrollX.interpolate({
		inputRange,
		outputRange: [width * 0.6, 0, -width * 0.6],
	});
	const opacity = scrollX.interpolate({
		inputRange: inputRangeOpacity,
		outputRange: [0, 1, 0],
	});

	return (
		<Box
			width={width}
			height={height}
			justifyContent='center'
			alignItems='center'
		>
			<Animated.Image
				style={[styles.imageStyle, { transform: [{ scale }] }]}
				source={product.imageUri}
			/>
			<Box alignItems='flex-start' alignSelf='flex-end' flex={0.5}>
				<Animated.Text
					style={[
						styles.heading,
						{ transform: [{ translateX: translateXHeading }], opacity },
					]}
				>
					{product.heading}
				</Animated.Text>
				<Animated.Text
					style={[
						styles.description,
						{ transform: [{ translateX: translateXDescription }], opacity },
					]}
				>
					{product.description}
				</Animated.Text>
			</Box>
		</Box>
	);
}

export default Item;

const styles = StyleSheet.create({
	imageStyle: {
		width: width * 0.75,
		height: width * 0.75,
		resizeMode: 'contain',
		flex: 1,
	},
	heading: {
		color: '#444',
		textTransform: 'uppercase',
		fontSize: 24,
		fontWeight: '800',
		letterSpacing: 2,
		marginBottom: 5,
	},
	description: {
		color: '#ccc',
		fontWeight: '600',
		textAlign: 'left',
		width: width * 0.75,
		marginRight: 10,
		fontSize: 16,
		lineHeight: 16 * 1.5,
	},
});
