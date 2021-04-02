import React, { useState, useEffect } from 'react';
import { 
  View, Text, TextInput, StyleSheet, TouchableOpacity, Alert
} from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';
import Loading from '../components/Loading';
import CancelLogin from '../components/CancelLogIn';
import { translateErrors } from '../utils';
import { is } from 'date-fns/locale';

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <CancelLogin />,
    });
  }, []);

  function handlePress() {
    setLoading(true);
    const { currentUser } = firebase.auth();
    if (!currentUser) { return; }
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    currentUser.linkWithCredential(credential)
    .then(() => {
      Alert.alert('Registration Succrssful', [
        {
          text: 'OK',
          onPress: () => {
            navigation.reset({ index: 0, routes: [{ name: 'MemoList' }] });
          },
        },
      ]);
    })
    .catch((error) => {
      console.log(error.code, error.message);
      const errorMsg = translateErrors(error.code);
      Alert.alert(errorMsg.title, errorMsg.description);
      })
    .then(() => {
      setLoading(false);
    });
  }
  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading} />
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
          <TextInput
            style={styles.input} 
            value={email}
            onChangeText={(text) => { setEmail(text); }} 
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Email Address"
            textContentType="emailAddress"
          />
          <TextInput 
            style={styles.input} 
            value={password}
            onChangeText={(pwd) => { setPassword(pwd); }}
            autoCapitalize="none"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <Button 
            label="Submit"
            onPress={handlePress}
          />
            <View style={styles.footer}>
              <Text style={styles.footerText}>Already registered?</Text>
                <TouchableOpacity 
                  onPress={() => { 
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'LogIn' }],
                    });
                  }}
                >
                  <Text style={styles.footerLink}>Log In.</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDD',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#5897A6',
  },
  footer: {
    flexDirection: 'row',
  },
});
