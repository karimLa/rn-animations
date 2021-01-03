import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
	Home: undefined;
	Sentence: undefined;
	AnimatedCoursel: undefined;
};

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;


export type HomeScreenProps = {
	route: HomeScreenRouteProp;
	navigation: HomeScreenNavigationProp
};