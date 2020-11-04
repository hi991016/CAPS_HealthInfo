import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather'
import HomeScreen from '../component/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import PasswordScreen from '../screens/PasswordScreen'
import EditProfileScreen from '../screens/EditProfileScreen'
import StatisticsScreen from '../screens/StatisticScreen'

const Tabs = AnimatedTabBarNavigator()

const TabBarIcon = props => {
	return (
		<Icon
			name={props.name}
			size={props.size ? props.size : 24}
			color={props.tintColor}
		/>
	)
}

const Discover = props => (
    <>
        <View>
            <Text>Discover</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                <Text>Go to Home</Text>
            </TouchableOpacity>
        </View>
    </>
)

export default () => (
	<Tabs.Navigator initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: '#fff',
            activeBackgroundColor: '#44caac' //#9257AA
        }}
        appearence={{
            tabBarBackground: '#000', //'#201f23'
            activeColor: '#fff',
            dotCornerRadius: 44,
            // floating: true,
            topPadding: 22
        }}
    >
		<Tabs.Screen
			name="Home"
			component={StackHome}
			options={{
				tabBarIcon: ({ focused, color }) => (
					<TabBarIcon
						focused={focused}
						tintColor={color}
						name="grid"
					/>
				),
			}}
		/>
		<Tabs.Screen
			name="Activity"
			component={Discover}
			options={{
				tabBarIcon: ({ focused, color, size }) => (
					<TabBarIcon
						focused={focused}
						tintColor={color}
						name="activity"
					/>
				),
			}}
		/>
		<Tabs.Screen
			name="Statistics"
			component={StackStatistic}
			options={{
				tabBarIcon: ({ focused, color }) => (
					<TabBarIcon
						focused={focused}
						tintColor={color}
						name="calendar"
					/>
				),
			}}
		/>
		<Tabs.Screen
			name="Profile"
			component={StackProfile}
			options={{
				tabBarIcon: ({ focused, color }) => (
					<TabBarIcon
						focused={focused}
						tintColor={color}
						name="user"
					/>
				),
			}}
		/>
	</Tabs.Navigator>
)
const Stack = createStackNavigator();

function StackHome({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

function StackStatistic({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Statistics" component={StatisticsScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

function StackProfile({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name="EditProfile" component={EditProfileScreen}
                options={{
                    headerStyle: {
                        backgroundColor: "#e1e6ea",
                    },
                    headerTitleStyle: { color: '#434c73' },
                    headerTitleAlign: "center",
                    headerTintColor: '#434c73',
                }}
            />
            <Stack.Screen name="ChangePassword" component={PasswordScreen}
                options={{
                    headerStyle: {
                        backgroundColor: "#e1e6ea",
                    },
                    headerTitleStyle: { color: '#434c73' },
                    headerTitleAlign: "center",
                    headerTintColor: '#434c73',
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({

})
