import React from 'react'
import { StatusBar, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const ProfileScreen = ({navigation}) => {
    return (
        <>
            <StatusBar barStyle="light-content" hidden={true} />
            <SafeAreaView style={styles.container}>
                <View style={styles.custom}>

                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>Your Profile</Text>
                    </View>
                    <View style={styles.backgroundContainer}>
                        <View style={styles.profileImage}>
                            <Image source={require("../assets/avatar.jpg")} style={styles.avatar} />
                            <Text style={styles.name}>Cáo Fennec</Text>
                        </View>
                        <View style={styles.info}>
                            <View style={{ alignItems: 'center', borderColor: '#EAEAEA', borderRightWidth: 2, }}>
                                <Text style={{ fontSize: 20 }}>51 kg</Text>
                                <Text style={styles.subtext}>Your weight</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 20 }}>171 cm</Text>
                                <Text style={styles.subtext}>Your height</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.setting}>
                        <TouchableOpacity onPress={() => { navigation.navigate('EditProfile') }}>
                            <Text style={{ color: "#1f2233", fontSize: 19 }}>Edit Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('ChangePassword') }}>
                            <Text style={ { color: "#1f2233", fontSize: 19, marginTop: 18 }}>Change Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    custom: {
        flex: 1,
        backgroundColor: '#fff', 
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    headerContainer: {
        paddingTop: 50,
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
    },
    backgroundContainer: {
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 80,
        backgroundColor: '#fff',
        padding: 75,
        paddingBottom: 75,
        borderRadius: 2,
        marginHorizontal: 30,
        shadowColor: '#222',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 7,
    },
    avatar: {
        borderRadius: 100,
        width: 100,
        height: 100,
    },
    profileImage: {
        marginTop: -130,
        overflow: 'hidden'
    },  
    info: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
    },  
    name: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 15,
    },
    subtext: {
        fontSize: 14,
        color: '#aeb5bc',
    },
    setting: {
        alignItems: "center",
        alignSelf: "center",
        marginTop: 50,
    },
    scroll: {
        flex: 1,
    },
})
