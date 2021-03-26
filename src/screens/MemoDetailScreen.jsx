import React from 'react'
import { 
    View, ScrollView, Text, StyleSheet,
 } from 'react-native'
// import { CircleButton } from '../components/CircleButton'

import AppBar from '../components/AppBar'
import CircleButton from '../components/CircleButton'

export default function MemoDetailScreen() {
    return(
        <View style={styles.container}>
            <AppBar />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>To Do List</Text>
                <Text style={styles.memoDate}>2021 Mar 25 15:00</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius, magni id, corporis laboriosam accusantium veniam voluptatem minima doloribus architecto a, labore blanditiis. Natus, rem. Quis nisi harum expedita vel?
                </Text>
            </ScrollView>
            <CircleButton 
            style={{ top: 160, bottom: 'auto' }}
            name="edit-2"
            />
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoTitle: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
    },
    memoDate: {
        color: '#fff',
        fontSize: 16,
        lineHeight: 16,
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoText: {
        fontSize: 16,
        lineHeight: 24,
    }
})