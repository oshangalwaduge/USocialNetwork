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

export default class MessangerAction extends React.Component {
  static navigationOptions = {
    title: 'Post Action',
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
              navigate('Call');
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Call.')}>
            <Text style={styles.btnCaption}>Call</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorBlue]}
            onLongPress={() => {
              navigate('MessageNo');
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Message.')}>
            <Text style={styles.btnCaption}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
