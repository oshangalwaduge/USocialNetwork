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

export default class Welcome extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    headerShown: false,
  };

  render() {
    const {navigate, state} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[
              styles.btn,
              styles.textCenter,
              styles.colorYellow,
              {borderTopWidth: 1},
            ]}
            onPress={readText.bind(this, 'Welcome to You Social Network!')}>
            <Text style={styles.btnCaption}>Welcome</Text>
            <Text style={styles.btnCaption}>to</Text>
            <Text style={styles.btnCaption}>U Social Netowork!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexThree}>
          {/* <TouchableOpacity
            style={[
              styles.btn,
              styles.textCenter,
              styles.colorYellow,
              {borderTopWidth: 1},
            ]}
            onPress={readText.bind(this, 'Listen to the instructions')}
            onLongPress={readText.bind(
              this,
              'Welcome to Unseen - Network  . Here are some unique features of the application which will be useful for you to be with us!. Each time you tap the button we will read it’s function. You need to long press the button to execute that particular function. You can verify the function execution by vibration of the screen. Top Bar is allocated for Go Back Function. Always all the other pages are consist with two or four buttons. If two buttons always they locate in up and bottom. If four buttons always they locate in upper right, upper left, bottom right and bottom left. Get Started to continue the Journey.',
            )}>
            <Text style={styles.btnCaption}>Instructions</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={[
              styles.btn,
              styles.textCenter,
              styles.colorBlue,
              {borderTopWidth: 1},
            ]}
            onLongPress={() => {
              navigate('GetStarted');
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Hold touch to get started.')}>
            <Text style={styles.btnCaption}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
