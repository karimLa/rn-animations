import React, { ComponentProps } from 'react';
import { Image as RNImage, ImageProps } from 'react-native';
import { ColorProps, createBox } from '@shopify/restyle';
import { Theme } from '../constants/theme';

const BaseImage = createBox<Theme, ImageProps>(RNImage);

export type Props = ComponentProps<typeof BaseImage> & ColorProps<Theme>;

function Image(props: Props) {
	return <BaseImage {...props} />;
}

export default Image;
