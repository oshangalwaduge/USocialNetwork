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

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
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
            onPress={readText.bind(this, 'Go back to home.')}>
            <Text style={styles.btnCaption}>Go Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorYellow]}
            onLongPress={() => {
              navigate('AboutYou');
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Personal Information.')}>
            <Text style={styles.btnCaption}>Personal Information</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorBlue]}
            onLongPress={() => {
              navigate('ContactInformation');
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Contact Informations.')}>
            <Text style={styles.btnCaption}>Contact Information</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
