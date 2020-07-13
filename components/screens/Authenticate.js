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

export default class GetStarted extends React.Component {
  static navigationOptions = {
    title: 'Get Started',
    headerShown: false,
  };

  render() {
    const {navigate, state} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorYellow]}
            onLongPress={() => {
              navigate('Home');
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Authenticate')}>
            <Text style={styles.btnCaption}>Authenticate</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorBlue]}
            onLongPress={() => {
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Instructions')}
            onPress={readText.bind(this, 'Listen to the instructions')}
            onLongPress={readText.bind(
              this,
              'Welcome to You Social Network. Here are some unique features of the application which will be useful for you to be with us!. Each time you tap the button we will read it’s function. You need to long press the button to execute that particular function. You can verify the function execution by vibration of the screen. Top Bar is allocated for Go Back Function. Always all the other pages are consist with two or four buttons. If two buttons, they are always located in up and bottom. If four buttons, they are always located in upper right, upper left, bottom right and bottom left. Start authentication to continue the Journey.',
            )}>
            <Text style={styles.btnCaption}>Instructions</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
