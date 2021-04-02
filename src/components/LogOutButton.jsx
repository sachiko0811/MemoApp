import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet, Alert,
} from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';
import { func, shape } from 'prop-types';

export default function LogOutButton(props) {
  const { cleanupFuncs } = props;
  const navigation = useNavigation();

  function handlePress() {
    Alert.alert('Sign Out', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'OK',
        onPress: () => {
          cleanupFuncs.memos();
          cleanupFuncs.auth();
          firebase.auth().signOut()
            .then(() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'MomeList' }],
              });
            })
            .catch(() => {
              Alert.alert('Failed to sign out');
            });
        },
      },
    ]);
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
        <Text style={styles.label}>Sign Out</Text>
    </TouchableOpacity>
  );
}

LogOutButton.propTypes = {
  cleanupFuncs: shape({
    auth: func,
    memos: func,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
