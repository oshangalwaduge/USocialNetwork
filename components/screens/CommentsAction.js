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

export default class CommentsAction extends React.Component {
  static navigationOptions = {
    title: 'Comments Action',
    headerShown: false,
  };

  render() {
    const {navigate, state} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.flexOne}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorPink]}
            onPress={readText.bind(this, 'Go back to the post.')}
            onLongPress={() => {
              this.props.navigation.goBack();
              Vibration.vibrate(300);
            }}>
            <Text style={styles.btnCaption}>Go Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorYellow]}
            onPress={readText.bind(this, 'Add Comments')}
            onLongPress={() => {
              navigate('AddComments');
              Vibration.vibrate(300);
            }}>
            <Text style={styles.btnCaption}>Add Comments</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorBlue]}
            onPress={readText.bind(this, 'Read Comments')}
            onLongPress={() => {
              navigate('ReadComments');
              Vibration.vibrate(300);
            }}>
            <Text style={styles.btnCaption}>Read Comments</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
