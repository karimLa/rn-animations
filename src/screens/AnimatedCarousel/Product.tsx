import { opacity } from '@shopify/restyle';
import React from 'react';
import { Animated, Image, useWindowDimensions } from 'react-native';
import Box from '../../components/Box';
import Text from '../../components/Text';
import useTheme from '../../hooks/useTheme';
import { IProduct } from './data';
import RadialGradiant from './RadialGradiant';

interface Props {
	product: IProduct;
	index: number;
	scrollX: Animated.Value;
}

function Product({ product, index, scrollX }: Props) {
	const { spacing } = useTheme();
	const { width } = useWindowDimensions();
	const inputRange = [
		(index - 2) * width,
		(index - 1) * width,
		index * width,
		(index + 1) * width,
	];

	const imageScale = scrollX.interpolate({
		inputRange,
		outputRange: [1, 0.4, 1, 0.4],
	});

	const imageOpacity = scrollX.interpolate({
		inputRange,
		outputRange: [1, 0.2, 1, 0.2],
	});

	return (
		<Box
			height='100%'
			width={width}
			alignItems='center'
			justifyContent='center'
			style={{ backgroundColor: 'transparent' }}
		>
			<Animated.Image
				style={{
					width: '85%',
					height: '40%',
					resizeMode: 'contain',
					backgroundColor: 'transparent',
					transform: [{ scale: imageScale }],
					opacity: imageOpacity,
				}}
				source={{ uri: product.image }}
			/>
			<Animated.View
				style={{
					alignItems: 'center',
					justifyContent: 'flex-end',
					padding: spacing.lg,
					opacity: imageOpacity,
				}}
			>
				<Text color='textBlack' fontSize={30} fontWeight='900'>
					{product.name}
				</Text>
				<Text fontSize={14} textAlign='center' marginVertical='lg'>
					{product.description}
				</Text>
			</Animated.View>
			<Text color='textWhite' fontSize={42} fontWeight='400'>
				{product.price}
			</Text>
			<RadialGradiant
				color={product.bg}
				scrollX={scrollX}
				inputRange={inputRange}
			/>
		</Box>
	);
}

export default Product;
