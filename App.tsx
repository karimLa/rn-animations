import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from '@shopify/restyle';
import theme from './src/constants/theme';
import SentenceScreen from './src/screens/Sentence';
import HomeScreen from './src/screens/Home';
import { RootStackParamList } from './src/types/navigation';

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
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	);
}
