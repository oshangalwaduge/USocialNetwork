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

export default class PostAction extends React.Component {
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
              navigate('AddPosts');
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Add New Posts')}>
            <Text style={styles.btnCaption}>Add New Post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorBlue]}
            onLongPress={() => {
              navigate('ViewPosts');
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Read posts')}>
            <Text style={styles.btnCaption}>Read Posts</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
