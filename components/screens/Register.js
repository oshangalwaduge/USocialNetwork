import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Vibration,
} from 'react-native';

// External StyleSheet
import {styles} from '../src/Styles';
import {readText} from '../src/tts';

export default class Register extends React.Component {
  static navigationOptions = {
    title: 'Register',
    headerShown: false,
  };

  render() {
    const {navigate, state} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.flexOne}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorPink]}
            onLongPress={() => {
              this.props.navigation.goBack();
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Go Back.')}>
            <Text style={styles.btnCaption}>Go Back</Text>
          </TouchableOpacity>
        </View>
        <View style={(styles.flexThree, {flex: 2})}>
          <View
            style={[styles.textCenter, styles.colorBlue]}
            onPress={readText.bind(this, 'Register.')}>
            <Text style={styles.btnCaption}>Register</Text>
          </View>
        </View>
        <View style={(styles.flexThree, {flex: 5})}>
          <View
            style={[styles.textCenter, styles.colorYellow]}
            onPress={readText.bind(this, 'Register Details.')}>
            <Text style={styles.btnCaption}>Register Details</Text>
          </View>
        </View>
      </View>
    );
  }
}
