import React, { useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import SignOutButton from '../components/SignOutButton';

export default function MemoListScreen(props) {
    const { navigation } = props;

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <SignOutButton />,
        });
    }, []);

    useEffect(() => {
        const db = firebase.firestore();
        const { currentUser } = firebase.auth();
        let unsubscribe = () => {};
        if(currentUser) {
            const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
            unsubscribe = ref.onSnapshot((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, doc.data());
          });        
        }, (error) => {
            console.log(error);
            Alert.alert('Failed to load');
        });
      }
        return unsubscribe;
    }, []);
    
  return (
      <View style={styles.container}>
          <MemoList />
          <CircleButton 
            name="plus"
            onPress={() => { navigation.navigate('MemoCreate'); }}
            />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
    },
});