import { apisAreAvailable } from 'expo'
import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View,} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import MenuItem from './MenuItem'

const HomeScreen = ({navigation}) => {
    return (
        <>
        <StatusBar barStyle="light-content" hidden={true} />
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <TouchableOpacity>
                        <Image style={styles.menu} source={require('../assets/menu.png')} /> 
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.navigate('Profile') }}>
                        <Image style={styles.profileImage} source={require('../assets/avatar.jpg')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={styles.title}>Activity</Text>
            </View>
            <MenuItem />
        </View>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerContainer: {
        paddingTop: 20,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    menu: {
        width: 38,
        height: 38,
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        paddingHorizontal: 30,
        marginTop: 30,
    }
})
