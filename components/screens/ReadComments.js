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

export default class ReadComments extends React.Component {
  static navigationOptions = {
    title: 'Read Comments',
    headerShown: false,
  };

  state = {
    comment: '',
    commentid: 1,
  };

  componentDidMount = () => {
    fetch('https://projobslk.website/unseen/getcomment.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        commentid: this.state.commentid,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          comment: responseJson[0].content,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  getNextCmnt = () => {
    fetch('https://projobslk.website/unseen/getcomment.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        commentid: this.state.commentid + 1,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          comment: responseJson[0].content,
          commentid: this.state.commentid + 1,
        });
        Vibration.vibrate(300);
        readText('You are on the next comment now.');
      })
      .catch(error => {
        console.error(error);
      });
  };

  repeatPost = e => {
    // this.state.results.map((result, index) => {
    Vibration.vibrate(300);
    readText(this.state.comment);
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
            onPress={readText.bind(this, 'Go back to comments menu.')}>
            <Text style={styles.btnCaption}>Go Back</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.flexThree}>
                  <TouchableOpacity style={[styles.btn, styles.textCenter, styles.colorYellow]}>
                    <Text style={styles.btnCaption}>Start</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.btn, styles.textCenter, styles.colorBlue]}>
                    <Text style={styles.btnCaption}>Stop</Text>
                  </TouchableOpacity>
               </View> */}
        <View style={styles.flexThree}>
          <View style={styles.textCenter}>
            <Text style={styles.contentCenter}>{this.state.comment}</Text>
          </View>
        </View>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorBlue]}
            onPress={readText.bind(this, 'Read the comment.')}
            onLongPress={this.repeatPost}>
            <Text style={styles.btnCaption}>Read It</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorYellow]}
            onPress={readText.bind(this, 'Go to the next comment.')}
            onLongPress={this.getNextCmnt}>
            <Text style={styles.btnCaption}>Next</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.rowFour}></View> */}
      </View>
    );
  }
}
