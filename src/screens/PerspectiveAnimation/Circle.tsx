import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import ButtonOpacity, {
	ButtonOpacityProps,
} from '../../components/ButtonOpacity';
import { AntDesign } from '@expo/vector-icons';
import useTheme from '../../hooks/useTheme';

interface Props extends ButtonOpacityProps {
	size?: number;
	animatedValue: Animated.Value;
}

function Circle({ size, animatedValue, ...props }: Props) {
	const { colors } = useTheme();

	const containerBg = animatedValue.interpolate({
		inputRange: [0, 0.001, 0.5, 0.501, 1],
		outputRange: [
			colors.textSuccess,
			colors.textSuccess,
			colors.textSuccess,
			colors.textGrey,
			colors.textGrey,
		],
	});

	const circleBg = animatedValue.interpolate({
		inputRange: [0, 0.001, 0.5, 0.501, 1],
		outputRange: [
			colors.textGrey,
			colors.textGrey,
			colors.textGrey,
			colors.textSuccess,
			colors.textSuccess,
		],
	});

	return (
		<Animated.View
			style={[StyleSheet.absoluteFill, { backgroundColor: containerBg }]}
		>
			<Animated.View
				style={[
					styles.circle,
					{
						width: size,
						height: size,
						borderRadius: size! / 2,
						backgroundColor: circleBg,
						transform: [
							{
								perspective: 400,
							},
							{
								rotateY: animatedValue.interpolate({
									inputRange: [0, 0.5, 1],
									outputRange: ['0deg', '-90deg', '-180deg'],
								}),
							},
							{
								scale: animatedValue.interpolate({
									inputRange: [0, 0.5, 1],
									outputRange: [1, 8, 1],
								}),
							},
							{
								translateX: animatedValue.interpolate({
									inputRange: [0, 0.5, 1],
									outputRange: [0, size! / 4, 0],
								}),
							},
						],
					},
				]}
			>
				<ButtonOpacity
					width='100%'
					height='100%'
					justifyContent='center'
					alignItems='center'
					{...props}
				>
					<AntDesign name='arrowright' size={28} color='white' />
				</ButtonOpacity>
			</Animated.View>
		</Animated.View>
	);
}

Circle.defaultProps = {
	size: 80,
};

export default Circle;

const styles = StyleSheet.create({
	circle: {
		alignSelf: 'center',
		position: 'absolute',
		bottom: 80,
	},
});
