import React from 'react';
import Box from '../../components/Box';
import TextAnimator from './TextAnimator';

const content =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam unde adipisci esse vel repudiandae dicta animi ab labore aliquam, qui beatae voluptas expedita atque quo facere tempore, earum, dignissimos delectus?';

function SentenceScreen() {
	const onFinish = () => {
		console.log('Animation is finished.');
	};

	return (
		<Box
			flex={1}
			justifyContent='center'
			alignItems='center'
			paddingHorizontal='base'
		>
			<TextAnimator
				content={content}
				justifyContent='center'
				onFinish={onFinish}
			/>
		</Box>
	);
}

export default SentenceScreen;
