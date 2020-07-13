import * as React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Vibration,
  Alert,
  Image,
  ViewPropTypes,
  Platform,
} from 'react-native';

// External StyleSheet
import {styles} from '../src/Styles';
import {readText} from '../src/tts';

import FingerprintScanner from 'react-native-fingerprint-scanner';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessageLegacy: undefined,
      biometricLegacy: undefined,
    };

    this.description = null;
    readText('Place your finger on fingerprint scanner.');
  }

  componentDidMount() {
    this.authCurrent();
  }

  componentWillUnmount = () => {
    FingerprintScanner.release();
  };

  authCurrent() {
    FingerprintScanner.authenticate({
      title: 'Scan Your Fingerprint',
      description: 'Please place your finger on finger print scanner.',
    })
      .then(() => {
        this.onAuthenticate();
      })
      .catch(error => {
        // this.onFail();
      });
  }

  onAuthenticate() {
    console.log('Authenticated successfully');
    readText('Logged in successfully!');
  }

  // authLegacy() {
  //   FingerprintScanner.authenticate({
  //     onAttempt: this.handleAuthenticationAttemptedLegacy,
  //   })
  //     .then(() => {
  //       this.props.handlePopupDismissedLegacy();
  //       Alert.alert('Fingerprint Authentication', 'Authenticated successfully');
  //     })
  //     .catch(error => {
  //       this.setState({
  //         errorMessageLegacy: error.message,
  //         biometricLegacy: error.biometric,
  //       });
  //       this.description.shake();
  //     });
  // }

  // handleAuthenticationAttemptedLegacy = error => {
  //   this.setState({errorMessageLegacy: error.message});
  //   this.description.shake();
  // };

  // renderLegacy() {
  //   const {errorMessageLegacy, biometricLegacy} = this.state;
  //   const {style, handlePopupDismissedLegacy} = this.props;

  //   return <View />;
  // }

  // render = () => {
  //   if (this.requiresLegacyAuthentication()) {
  //     return this.renderLegacy();
  //   }

  //   // current API UI provided by native BiometricPrompt
  //   return null;
  // };

  static navigationOptions = {
    title: 'Home',
    headerShown: false,
  };

  render = () => {
    // if (this.requiresLegacyAuthentication()) {
    //   return this.renderLegacy();
    // }

    const {navigate, state} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.flexOne}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorPink]}
            onLongPress={() => {
              navigate('Welcome');
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Logout')}>
            <Text style={styles.btnCaption}>Log Out</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorYellow]}
            onLongPress={() => {
              navigate('PostAction');
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Posts')}>
            <Text style={styles.btnCaption}>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorBlue]}
            onLongPress={() => {
              navigate('Profile');
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Profile')}>
            <Text style={styles.btnCaption}>Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexThree}>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorBlue]}
            onLongPress={() => {
              navigate('MessangerAction');
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Messenger')}>
            <Text style={styles.btnCaption}>Messenger</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.textCenter, styles.colorYellow]}
            onLongPress={() => {
              navigate('FriendsAction');
              Vibration.vibrate(300);
            }}
            onPress={readText.bind(this, 'Friends')}>
            <Text style={styles.btnCaption}>Friends</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.flexThree}>
               <TouchableOpacity style={[styles.btn, styles.textCenter, styles.colorBlack ]} onPress={() => this.props.navigation.goBack()}>
                        <Text style={{color:'white'}}>Settings</Text>
                </TouchableOpacity>
               </View> */}
      </View>
    );
  };
}

Home.propTypes = {
  onAuthenticate: PropTypes.func.isRequired,
  handlePopupDismissedLegacy: PropTypes.func,
  style: ViewPropTypes.style,
};

export default Home;
