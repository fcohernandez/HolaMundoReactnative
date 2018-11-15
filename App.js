import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text} from 'react-native';

export default class Test extends Component {

  _onPressButtonBlue() {
    Alert.alert('Has tocado el boton azul!')
  }

  _onPressButtonPurple() {
    Alert.alert('Has tocado el boton morado!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.saludo}>Hola mundo</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButtonBlue}
            title="Presioname"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButtonPurple}
            title="Presioname"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  saludo: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  }
});
