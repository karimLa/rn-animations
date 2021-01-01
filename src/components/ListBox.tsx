import React, { ComponentProps } from 'react';
import { FlatList, FlatListProps } from 'react-native';
import { ColorProps, createBox } from '@shopify/restyle';
import { Theme } from '../constants/theme';

const BaseFlatList = createBox<Theme, FlatListProps<any>>(FlatList);

export type ListBoxProps = ComponentProps<typeof BaseFlatList> &
	ColorProps<Theme>;

const ListBox: React.FC<ListBoxProps> = ({ children, ...props }) => {
	return <BaseFlatList {...props}>{children}</BaseFlatList>;
};

export default ListBox;
