import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { Agenda } from 'react-native-calendars'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Card, Avatar} from 'react-native-paper';

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};

const StatisticScreen = () => {
    const [items, setItems] = useState({});

    const loadItems = (day) => {
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            if (!items[strTime]) {
              items[strTime] = [];
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                  name: 'Item for ' + strTime + ' #' + j,
                  height: Math.max(50, Math.floor(Math.random() * 150)),
                });
              }
            }
          }
          const newItems = {};
          Object.keys(items).forEach((key) => {
            newItems[key] = items[key];
          });
          setItems(newItems);
        }, 10);
    }

    const renderItem = (item) => {
        return (
          <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
            <Card>
              <Card.Content>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text>{item.name}</Text>
                  <Avatar.Text label="R" />
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        );
    };

    return (
        <>
            <StatusBar barStyle="dark-content" hidden={true} />
            <View style={styles.container}>
                <View style={styles.custom}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>Diary</Text>
                    </View>
                    <Agenda
                        items={items}
                        loadItemsForMonth={loadItems}
                        selected={'2020-08-11'}
                        // renderItem={renderItem}
                        pastScrollRange = { 13 }
                        futureScrollRange = { 13 }
                        theme={{
                            selectedDayBackgroundColor: '#44caac',
                            // dotColor: '#fff',
                        }}
                        style={styles.agenda}
                    />
                </View>
            </View>
        </>
    )
}

export default StatisticScreen

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        left:0,
        right:0,
        top:0,
        height:'100%',
        backgroundColor:'#000',
    },
    custom: {
        backgroundColor: '#FFF',
        height:'100%',
        paddingBottom: 5,
        borderBottomLeftRadius: 44,
        borderBottomRightRadius: 44,
    },
    headerContainer: {
        paddingTop: 40,
        paddingHorizontal: 30,
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
    },
    agenda: {
        top: 5,
        height: '100%',
        borderBottomLeftRadius: 44,
        borderBottomRightRadius: 44,
        shadowColor: '#222',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 8,
    }
})
