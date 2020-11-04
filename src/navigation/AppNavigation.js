import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'
import { StatusBar } from 'expo-status-bar'
import HomeScreen from '../component/HomeScreen'

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

// const Home = props => (
//     <>
//         <StatusBar barStyle="light-content" hidden={true} />
//         <View style={styles.container}>
//             <HomeScreen />
//         </View>
//     </>
// )

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

const Images = () => (
    <>
        <View>
            <Text>Images</Text>
        </View>
    </>
)

const Profile = () => (
    <>
        <View>
            <Text>Profile</Text>
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
            tabBarBackground: '#201f23',
            activeColor: '#fff',
            dotCornerRadius: 44,
            floating: true,
        }}
    >
		<Tabs.Screen
			name="Home"
			component={HomeScreen}
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
			component={Images}
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
			component={Profile}
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

const styles = StyleSheet.create({

})
