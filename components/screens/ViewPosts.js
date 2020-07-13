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

export default class ViewPosts extends React.Component {
  static navigationOptions = {
    title: 'View Posts',
    headerShown: false,
  };

  state = {
    data: '',
    postid: 1,
  };

  componentDidMount = () => {
    // fetch('https://projobslk.website/unseen/getpost.php', {
    //   method: 'GET',
    // })
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     console.log(responseJson[1].post);
    //     this.setState({
    //       data: responseJson[1].post,
    //     });
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    fetch('https://projobslk.website/unseen/getpost.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postid: this.state.postid,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson[0].post);
        this.setState({
          data: responseJson[0].post,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  getNextPost = () => {
    fetch('https://projobslk.website/unseen/getpost.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postid: this.state.postid + 1,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          data: responseJson[0].post,
          postid: this.state.postid + 1,
        });
        Vibration.vibrate(300);
        readText('You are on the next post now.');
      })
      .catch(error => {
        console.error(error);
      });
  };

  //report post to the database
  reportPost = () => {
    fetch('https://projobslk.website/unseen/reportpost.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postid: 1,
        userid: 1,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        Vibration.vibrate(300);
        readText('Your report has been successfully sent!');
      })
      .catch(error => {
        console.error(error);
      });
  };

  repeatPost = e => {
    // this.state.results.map((result, index) => {
    Vibration.vibrate(300);
    readText(this.state.data);
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
            onPress={readText.bind(this, 'Go back to posts menu.')}>
            <Text style={styles.btnCaption}>Go Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorYellow]}
            onPress={readText.bind(this, 'Report Posts')}
            onLongPress={this.reportPost}>
            <Text style={styles.btnCaption}>Report</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorBlue]}
            onPress={readText.bind(this, 'Next')}
            onLongPress={this.getNextPost}>
            <Text style={styles.btnCaption}>Next</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexThree}>
          <View style={styles.textCenter}>
            <Text style={styles.contentCenter}>{this.state.data}</Text>
          </View>
        </View>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorBlue]}
            onPress={readText.bind(this, 'Read the post')}
            onLongPress={this.repeatPost}>
            <Text style={styles.btnCaption}>Read Post</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorYellow]}
            onLongPress={() => {
              navigate('CommentsAction');
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Comments')}
            onLongPress={() => {
              Vibration.vibrate(300);
              navigate('CommentsAction');
            }}>
            <Text style={styles.btnCaption}>Comments</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.flexThree}></View> */}
      </View>
    );
  }
}
