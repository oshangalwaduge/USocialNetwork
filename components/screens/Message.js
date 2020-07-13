import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Vibration,
} from 'react-native';
import SendSMS from 'react-native-sms-x';
import Voice from 'react-native-voice';
import {navigation} from 'react-navigation';

// External StyleSheet
import {styles} from '../src/Styles';
import {readText} from '../src/tts';

export default class Message extends React.Component {
  static navigationOptions = {
    title: 'Add Message',
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

  componentDidMount() {
    console.log(parseInt(this.props.navigation.state.params.number));
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

  sendMsg = () => {
    SendSMS.send(
      1,
      this.props.navigation.state.params.number,
      this.state.results[0],
      msg => {
        console.log('Message Successfuly Sent.');
        Vibration.vibrate(300);
        readText('Message Successfuly Sent.');
      },
    );
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
            onPress={readText.bind(this, 'Go back to message number.')}>
            <Text style={styles.btnCaption}>Go Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorYellow]}
            onPress={readText.bind(this, 'Speak the message.')}
            onLongPress={this._startRecognizing}>
            <Text style={styles.btnCaption}>Speak</Text>
            <Text style={styles.btnCaption}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorBlue]}
            onPress={readText.bind(this, 'Retry')}
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
            onPress={readText.bind(this, 'Read message.')}
            onLongPress={this.repeatPost}>
            <Text style={styles.btnCaption}>Read</Text>
            <Text style={styles.btnCaption}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorYellow]}
            onPress={readText.bind(this, 'Send SMS')}
            onLongPress={this.sendMsg}>
            <Text style={styles.btnCaption}>Send SMS</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
