import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
const data = [
        {
            id: '1',
            title: 'Heart rate',
            info: '143',
            unit: 'bpm',
            icon: require('../assets/heart.png'),
        },
        {
            id: '2',
            title: 'Calories',
            info: '450',
            unit: 'kcal',
            icon: require('../assets/calo.png'),
        },
        {
            id: '3',
            title: 'Steps',
            info: '3105',
            unit: 'steps',
            icon: require('../assets/steps.png'),
        },
        {
            id: '4',
            title: 'Workout',
            info: '4h',
            unit: 'time',
            icon: require('../assets/workout.png'),
        },
]

const MenuItem = () => {
    const renderItem = ({item}) => {
        return (
            <View style={styles.item}>
                <View style={styles.itemBg}>
                    <Image style={styles.icon} source={item.icon} resizeMode='contain' />
                    <View>
                        <Text style={styles.info}>{item.info}</Text>
                        <Text style={styles.unit}>{item.unit}</Text>
                    </View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                key={2}
                numColumns={2}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatlist}
            />
        </SafeAreaView>
    )
}

export default MenuItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        flex: 1,
        padding: 10,
        paddingBottom: 5,
    },
    itemBg: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'rgba(211, 211, 211, .5)',
        borderRadius: 25,
        minHeight: 200,
        overflow: "hidden",
        padding: 25,
    },
    icon: {
        width: 30,
        height: 30,
    },
    info: {
        marginTop: 25,
        fontSize: 27,
        fontWeight: '700',
    },
    unit: {
        marginTop: -5,
        color: '#CACACA',
        fontSize: 17
    },
    title: {
        marginTop: 30,
        fontSize: 14,
        fontWeight: '700'
    },
    flatlist: {
        marginTop: 5,
        marginHorizontal: 12,
    }
})
