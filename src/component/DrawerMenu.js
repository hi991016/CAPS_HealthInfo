import React from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Drawer,
    Paragraph,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { Feather, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DrawerMenu = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <ImageBackground
                        source={require('../assets/drawer.jpg')}
                        style={{ width: undefined, paddingBottom: 22, marginTop: -8 }}
                        resizeMode='cover'
                    >
                        <View style={styles.userInfo}>
                            <View style={{ marginTop: 35 }}>
                                <TouchableOpacity activeOpacity={1} onPress={() => { props.navigation.navigate('Profile') }}>
                                    <Image
                                        // source={{
                                        //     uri: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/p960x960/52605935_934151033454704_7951083993703645184_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_oc=AQlA-rPeV0To6VOr7fiIPrV3nGrQ70QaKmtjvOBaKEj3SvPULbmkDVg0h3W_z3Jmz5jwa6GngayIZkbJVCSTAlsz&_nc_ht=scontent.fsgn2-6.fna&_nc_tp=6&oh=10861eb536322399e8273b85ed6f56cc&oe=5EFAFD50',
                                        // }}
                                        source={
                                            require('../assets/avatar.jpg')
                                        }
                                        size={100}
                                        style={styles.avatar}
                                    />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'column' }}>
                                    <Title style={styles.title}>Cáo Fennec</Title>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View>
                                    <Caption style={styles.caption}>51 kg</Caption>
                                </View>
                                <View style={styles.section}>
                                <Caption style={styles.caption}>/</Caption>
                                </View>
                                <View>
                                    <Caption style={styles.caption}>171 cm</Caption>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ size }) => (
                                <Feather name="home" color='#1f2233' size={size} />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }}
                            labelStyle={{ color: '#1f2233' }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <AntDesign name="linechart" color='#1f2233' size={size} />
                            )}
                            label="Statistics"
                            onPress={() => { props.navigation.navigate('Statistics') }}
                            labelStyle={{ color: '#1f2233' }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <AntDesign name="notification" color='#1f2233' size={size} />
                            )}
                            label="Notifications"
                            onPress={() => { props.navigation.navigate('Notification') }}
                            labelStyle={{ color: '#1f2233' }}
                        />
                        {/* <Drawer.Section style={{ marginTop: 5 }}></Drawer.Section> */}
                    </Drawer.Section>
                </View>
                        <DrawerItem
                            icon={({ size }) => (
                                <AntDesign name="setting" color='#1f2233' size={size} />
                            )}
                            label="Settings"
                            onPress={() => { props.navigation.navigate('Setting') }}
                            labelStyle={{ color: '#1f2233' }}
                        />
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawer}>
                <DrawerItem
                    icon={({ size }) => (
                        <AntDesign name="poweroff" color='#1f2233' size={size} />
                    )}
                    label="Log Out"
                    labelStyle={{ fontWeight: 'bold', color: '#1f2233' }}
                // onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    )
}

export default DrawerMenu

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        color: '#fff'
    },
    userInfo: {
        alignItems: 'center', 
        justifyContent: 'center',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: '#fff'
    },
    drawerSection: {
        marginTop: 10,
    },
    bottomDrawer: {
        marginBottom: 0,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    row: {
        marginTop: 5,
        flexDirection: 'row',

    },
    section: {
        paddingLeft: 5,
        paddingRight: 5,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 10
    }
})
