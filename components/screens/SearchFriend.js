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

export default class SearchFriend extends React.Component {
  static navigationOptions = {
    title: 'Search Friend',
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
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorYellow]}
            onPress={readText.bind(this, "Speak friend's name.")}
            onLongPress={() => {
              Vibration.vibrate(300);
            }}>
            <Text style={styles.btnCaption}>Speak Name</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorBlue]}
            onPress={readText.bind(this, 'Search friend.')}
            onLongPress={() => {
              Vibration.vibrate(300);
            }}>
            <Text style={styles.btnCaption}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexThree}>
          <View style={styles.textCenter}>
            <Text style={styles.btnCaption}>Friend's name</Text>
          </View>
        </View>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorBlue]}
            onPress={readText.bind(this, "Read friend's name.")}
            onLongPress={() => {
              Vibration.vibrate(300);
            }}>
            <Text style={styles.btnCaption}>Read It</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorYellow]}
            onPress={readText.bind(this, 'Remove friend.')}
            onLongPress={() => {
              Vibration.vibrate(300);
            }}>
            <Text style={styles.btnCaption}>Remove Friend</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.rowFour}></View> */}
      </View>
    );
  }
}
