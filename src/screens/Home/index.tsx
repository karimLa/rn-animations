import React from 'react';
import { FlatList } from 'react-native';
import Box from '../../components/Box';
import ButtonOpacity from '../../components/ButtonOpacity';
import Text from '../../components/Text';
import { HomeScreenProps } from '../../types/navigation';

function HomeScreen({ navigation }: HomeScreenProps) {
	const links = [
		{ name: 'Sentence', title: 'Fade Text' },
		{ name: 'AnimatedCoursel', title: 'Animated Coursel' },
	];

	return (
		<Box flex={1}>
			<FlatList
				numColumns={3}
				data={links}
				keyExtractor={(item) => item.name}
				renderItem={({ item }) => (
					<ButtonOpacity
						flex={1}
						mt='base'
						marginHorizontal='sm'
						// @ts-ignore
						onPress={() => navigation.navigate(item.name)}
					>
						<Box
							minHeight={100}
							borderWidth={1}
							borderRadius={15}
							paddingHorizontal='sm'
							bg='textWhite'
							borderColor='gradientEnd'
							justifyContent='center'
							alignItems='center'
						>
							<Text color='textBlack' letterSpacing={1.2} fontSize={14}>
								{item.title}
							</Text>
						</Box>
					</ButtonOpacity>
				)}
			/>
		</Box>
	);
}

export default HomeScreen;
