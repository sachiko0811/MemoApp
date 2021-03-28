import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

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