import React from 'react';
import { 
    TouchableOpacity, Text, StyleSheet, Alert,
 } from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function SignOutButton() {
    const navigation = useNavigation();

    function handlePress() {
        firebase.auth().signOut()
          .then(() => {
              navigation.reset({
                  index: 0,
                  routes: [{ name: 'LogIn'　}],
              });
          })
          .catch(() => {
              Alert.alert('Failed to SignOut');
          });
    }

    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <Text style={styles.label}>Sign Out</Text>
        </TouchableOpacity>
    )
}

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