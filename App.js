import React from 'react';
import { StyleSheet, Image, View, Alert, KeyboardAvoidingView, Text } from 'react-native';
import LoginForm from './Components/LoginForm'
// import {UserInput} from './Components/userinput';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              url='https://www.asegier.com/images/cjcfullstack.png'
            />
            <Text style={styles.title}>An App Made For You :)</Text>
          </View>
          <View style={styles.formContainer}>
            <LoginForm />
          </View>
        </View>
        </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  }
});
