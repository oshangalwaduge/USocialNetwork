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
// import {Api} from '../src/Voiceapi';
import Voice from 'react-native-voice';

export default class MobileNumber extends React.Component {
  static navigationOptions = {
    title: 'E-Mail',
    headerShown: false,
  };

  state = {
    pitch: '',
    error: '',
    end: '',
    started: '',
    results: [],
  };

  constructor(props) {
    super(props);
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart = e => {
    console.log('onSpeechStart: ', e);
    this.setState({
      started: '√',
    });
  };

  onSpeechEnd = e => {
    console.log('onSpeechEnd: ', e);
    this.setState({
      end: '√',
    });
  };

  onSpeechError = e => {
    console.log('onSpeechError: ', e);
    this.setState({
      error: JSON.stringify(e.error),
    });
  };

  onSpeechResults = e => {
    console.log('onSpeechResults: ', e);
    this.setState({
      results: e.value,
    });
  };

  _startRecognizing = async () => {
    Vibration.vibrate(300);
    this.setState({
      pitch: '',
      error: '',
      started: '',
      results: [],
      end: '',
    });

    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  };

  repeatPost = e => {
    // this.state.results.map((result, index) => {
    Vibration.vibrate(300);
    readText(this.state.results[0]);
    // })
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
            onPress={readText.bind(
              this,
              'Go back to contact information menu.',
            )}>
            <Text style={styles.btnCaption}>Go Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorYellow]}
            onPress={readText.bind(this, 'Speak Number')}
            onLongPress={this._startRecognizing}>
            <Text style={styles.btnCaption}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorBlue]}
            onPress={readText.bind(this, 'Re-try')}
            onLongPress={this._startRecognizing}>
            <Text style={styles.btnCaption}>Retry</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexThree}>
          <View style={styles.textCenter}>
            <Text style={styles.contentCenter}>{this.state.results[0]}</Text>
          </View>
        </View>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorBlue]}
            onPress={readText.bind(this, 'Read Number')}
            onLongPress={this.repeatPost}>
            <Text style={styles.btnCaption}>Read It</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorYellow]}
            onPress={readText.bind(this, 'Save Number')}
            onLongPress={this.insertPostToServer}>
            <Text style={styles.btnCaption}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
