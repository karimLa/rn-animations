import React, { useRef, useState } from 'react';
import {
	Transition,
	Transitioning,
	TransitioningView,
} from 'react-native-reanimated';
import Box from '../../components/Box';
import ButtonOpacity from '../../components/ButtonOpacity';
import Text from '../../components/Text';
import data from './data';

const transition = (
	<Transition.Together>
		<Transition.In type='fade' durationMs={400} />
		<Transition.Change />
		<Transition.Out type='fade' durationMs={400} />
	</Transition.Together>
);

function AccordionMenu() {
	const [currentIndex, setCurrentIndex] = useState<null | number>(null);
	const ref = useRef<TransitioningView>();

	const onPress = (index: number) => {
		ref.current?.animateNextTransition();
		setCurrentIndex(index == currentIndex ? null : index);
	};

	return (
		<Transitioning.View
			style={{ flex: 1, justifyContent: 'center' }}
			transition={transition}
			// @ts-ignore
			ref={ref}
		>
			{data.map(({ bg, category, color, subCategories }, index) => {
				return (
					<ButtonOpacity
						flexGrow={1}
						key={category}
						onPress={() => onPress(index)}
					>
						<Box
							flexGrow={1}
							alignItems='center'
							justifyContent='center'
							style={{ backgroundColor: bg }}
						>
							<Text
								fontSize={38}
								fontWeight='900'
								textTransform='uppercase'
								letterSpacing={-2}
								style={{ color }}
							>
								{category}
							</Text>

							{index === currentIndex && (
								<Box mt='lg'>
									{subCategories.map((subCategory, i) => {
										return (
											<Text
												fontSize={20}
												lineHeight={20 * 1.5}
												textAlign='center'
												style={{ color }}
												key={subCategory + i}
											>
												{subCategory}
											</Text>
										);
									})}
								</Box>
							)}
						</Box>
					</ButtonOpacity>
				);
			})}
		</Transitioning.View>
	);
}

export default AccordionMenu;
