// import * as React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   TouchableOpacity,
//   Vibration,
// } from 'react-native';

// // External StyleSheet
// import {styles} from '../src/Styles';
// import {readText} from '../src/tts';

// export default class AddFriend extends React.Component {
//   static navigationOptions = {
//     title: 'Add Friend',
//     headerShown: false,
//   };

//   repeatPost = e => {
//     // this.state.results.map((result, index) => {
//     Vibration.vibrate(300);
//     readText(this.state.results[0]);
//     // })
//   };

//   render() {
//     const {navigate, state} = this.props.navigation;
//     return (
//       <View style={styles.container}>
//         <View style={styles.flexOne}>
//           <TouchableOpacity
//             style={[styles.btn, styles.textCenter, styles.colorPink]}
//             onLongPress={() => {
//               this.props.navigation.goBack();
//               Vibration.vibrate(300);
//             }}
//             onPress={readText.bind(this, 'Go Back.')}>
//             <Text style={styles.btnCaption}>Go Back</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.flexThree}>
//           <TouchableOpacity
//             style={[styles.btn, styles.textCenter, styles.colorYellow]}
//             onPress={readText.bind(this, "Speak friend's name.")}
//             onLongPress={() => Vibration.vibrate(300)}>
//             <Text style={styles.btnCaption}>Speak Name</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.btn, styles.textCenter, styles.colorBlue]}
//             onPress={readText.bind(this, 'Search friend.')}
//             onLongPress={() => Vibration.vibrate(300)}>
//             <Text style={styles.btnCaption}>Search</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.flexThree}>
//           <View style={styles.textCenter}>
//             <Text style={styles.contentCenter}>Friend's name</Text>
//           </View>
//         </View>
//         <View style={styles.flexThree}>
//           <TouchableOpacity
//             style={[styles.btn, styles.textCenter, styles.colorBlue]}
//             onPress={readText.bind(this, "Read friend's name.")}
//             onLongPress={() => Vibration.vibrate(300)}>
//             <Text style={styles.btnCaption}>Read It</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.btn, styles.textCenter, styles.colorYellow]}
//             onPress={readText.bind(this, 'Add friend.')}
//             onLongPress={() => Vibration.vibrate(300)}>
//             <Text style={styles.btnCaption}>Add Friend</Text>
//           </TouchableOpacity>
//         </View>
//         {/* <View style={styles.rowFour}></View> */}
//       </View>
//     );
//   }
// }

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
import Voice from 'react-native-voice';

export default class AddFriend extends React.Component {
  static navigationOptions = {
    title: 'View Friend',
    headerShown: false,
  };

  state = {
    data: '',
    currentuser: 1,
  };

  componentDidMount = () => {
    fetch('https://projobslk.website/unseen/viewfriend.php', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          data: responseJson[0].name + '. \n Bio: ' + responseJson[0].bio,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  getNextUser = () => {
    this.setState({
      currentuser: this.state.currentuser + 1,
    });
    fetch('https://projobslk.website/unseen/viewfriend.php', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(this.state.currentuser);
        this.setState({
          data:
            responseJson[this.state.currentuser].name +
            '. \n Bio: ' +
            responseJson[this.state.currentuser].bio,
        });
        Vibration.vibrate(300);
      })
      .catch(error => {
        console.error(error);
      });
  };

  getPrevUser = () => {
    this.setState({
      currentuser: this.state.currentuser - 1,
    });
    fetch('https://projobslk.website/unseen/viewfriend.php', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(this.state.currentuser);
        this.setState({
          data:
            responseJson[this.state.currentuser].name +
            '. \n Bio: ' +
            responseJson[this.state.currentuser].bio,
        });
        Vibration.vibrate(300);
      })
      .catch(error => {
        console.error(error);
      });
  };

  //remove friends
  addFriendFromServer = () => {
    fetch('https://projobslk.website/unseen/addfriend.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userid: 1,
        requestid: 2,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        Vibration.vibrate(300);
        readText('Friend has been added!');
      })
      .catch(error => {
        console.error(error);
        Vibration.vibrate(300);
        readText('Try again!');
      });

    //Update State user
    fetch('https://projobslk.website/unseen/viewfriend.php', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson[0]);
        this.setState({
          data: responseJson[0].name + '. \n Bio: ' + responseJson[0].bio,
        });
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
            onPress={readText.bind(this, 'Go back to friends menu.')}>
            <Text style={styles.btnCaption}>Go Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorYellow]}
            onPress={readText.bind(this, 'Previous.')}
            onLongPress={this.getPrevUser}>
            <Text style={styles.btnCaption}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorBlue]}
            onPress={readText.bind(this, 'Next')}
            onLongPress={this.getNextUser}>
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
            onPress={readText.bind(this, "Read friend's name")}
            onLongPress={this.repeatPost}>
            <Text style={styles.btnCaption}>Read It</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorYellow]}
            onLongPress={this.addFriendFromServer}
            onPress={readText.bind(this, 'Added friend.')}>
            <Text style={styles.btnCaption}>Add</Text>
            <Text style={styles.btnCaption}>Friend</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.rowFour}></View> */}
      </View>
    );
  }
}
