import Voice from 'react-native-voice';

export default class Voiceapi {

state = {
    pitch: '',
    error: '',
    end: '',
    started: '',
    results: [],
  };
 
  constructor(props) {
    super(props);
    //Setting callbacks for the process status
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
  }
 
  componentWillUnmount() {
    //destroy the process after switching the screen 
    Voice.destroy().then(Voice.removeAllListeners);
  }
 
  onSpeechStart = e => {
    //Invoked when .start() is called without error
    console.log('onSpeechStart: ', e);
    this.setState({
      started: '√',
    });
  };
 
  onSpeechEnd = e => {
    //Invoked when SpeechRecognizer stops recognition
    console.log('onSpeechEnd: ', e);
    this.setState({
      end: '√',
    });
  };
 
  onSpeechError = e => {
    //Invoked when an error occurs. 
    console.log('onSpeechError: ', e);
    this.setState({
      error: JSON.stringify(e.error),
    });
  };
 
  onSpeechResults = e => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log('onSpeechResults: ', e);
    this.setState({
      results: e.value,
    });
  };
 

  _startRecognizing = async () => {
    //Starts listening for speech for a specific locale
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
      //eslint-disable-next-line
      console.error(e);
    }
  };

}