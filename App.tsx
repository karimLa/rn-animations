import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from '@shopify/restyle';
import { RootStackParamList } from './src/types/navigation';
import theme from './src/constants/theme';
import HomeScreen from './src/screens/Home';
import SentenceScreen from './src/screens/Sentence';
import AnimatedCoursel from './src/screens/AnimatedCarousel';
import PerspectiveAnimation from './src/screens/PerspectiveAnimation';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name='Home'
						component={HomeScreen}
						options={{ title: 'Animations' }}
					/>
					<Stack.Screen name='Sentence' component={SentenceScreen} />
					<Stack.Screen
						name='AnimatedCoursel'
						component={AnimatedCoursel}
						options={{ title: 'Animated Coursel' }}
					/>
					<Stack.Screen
						name='PerspectiveAnimation'
						component={PerspectiveAnimation}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	);
}
