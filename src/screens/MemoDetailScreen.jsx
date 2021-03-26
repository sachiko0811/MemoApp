import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
// import { CircleButton } from '../components/CircleButton'

import AppBar from '../components/AppBar'
import CircleButton from '../components/CircleButton'

export default function MemoDetailScreen() {
    return(
        <View>
            <AppBar />
            <View>
                <Text>To Do List</Text>
                <Text>2021 Mar 25 15:00</Text>
            </View>
            <ScrollView>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius, magni id, corporis laboriosam accusantium veniam voluptatem minima doloribus architecto a, labore blanditiis. Natus, rem. Quis nisi harum expedita vel?
                </Text>
            </ScrollView>
            <CircleButton>+</CircleButton>
        </View>
    )
}

