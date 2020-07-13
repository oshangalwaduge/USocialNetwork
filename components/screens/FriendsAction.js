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

export default class FriendsAction extends React.Component {
  static navigationOptions = {
    title: 'Friends Action',
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
              navigate('AddFriend');
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Add New Friends')}>
            <Text style={styles.btnCaption}>Add New Friends</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorBlue]}
            onLongPress={() => {
              navigate('ViewFriend');
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Find Friends')}>
            <Text style={styles.btnCaption}>Find Friends</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorYellow]}
            onLongPress={() => {
              navigate('SearchFriend');
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Search Friends')}>
            <Text style={styles.btnCaption}>Search Friends</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}
