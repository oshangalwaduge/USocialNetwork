// import * as React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   TouchableOpacity,
//   Alert,
//   Image,
//   ViewPropTypes,
//   Platform,
// } from 'react-native';

// // External StyleSheet
// import {styles} from '../src/Styles';

// export default class Login extends React.Component {
//   static navigationOptions = {
//     title: 'Add Posts',
//     headerShown: false,
//   };

//   render() {
//     const {navigate, state} = this.props.navigation;
//     return (
//       <View style={styles.container}>
//         <View style={styles.flexOne}>
//           <TouchableOpacity
//             style={[styles.btn, styles.textCenter, styles.colorPink]}
//             onPress={() => this.props.navigation.goBack()}>
//             <Text style={styles.btnCaption}>Go Back</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={{flex: 4}}>
//           <TouchableOpacity
//             style={[styles.btn, styles.textCenter, styles.colorYellow]}>
//             <Text style={styles.btnCaption}>Log in to U Social Network</Text>
//             <Text>
//               Please put your finger print on the fingerprint scanner.
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.flexThree}>
//           <TouchableOpacity
//             style={[styles.btn, styles.textCenter, styles.colorBlue]}
//             onPress={() => navigate('Register')}>
//             <Text style={styles.btnCaption}>Register</Text>
//           </TouchableOpacity>
//         </View>
//         {/* <View style={styles.flexThree}></View> */}
//       </View>
//     );
//   }
// }

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
  Platform,
} from 'react-native';

import FingerprintScanner from 'react-native-fingerprint-scanner';
import styles from '../fingerprint/FingerprintPopup.component.styles';
import ShakingText from '../fingerprint/ShakingText.component';

// - this example component supports both the
//   legacy device-specific (Android < v23) and
//   current (Android >= 23) biometric APIs
// - your lib and implementation may not need both
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessageLegacy: undefined,
      biometricLegacy: undefined,
    };

    this.description = null;
  }

  componentDidMount() {
    if (this.requiresLegacyAuthentication()) {
      this.authLegacy();
    } else {
      this.authCurrent();
    }
  }

  componentWillUnmount = () => {
    FingerprintScanner.release();
  };

  requiresLegacyAuthentication() {
    return Platform.Version < 23;
  }

  authCurrent() {
    FingerprintScanner.authenticate({title: 'Log in with Biometrics'}).then(
      () => {
        this.props.onAuthenticate();
      },
    );
  }

  authLegacy() {
    FingerprintScanner.authenticate({
      onAttempt: this.handleAuthenticationAttemptedLegacy,
    })
      .then(() => {
        this.props.handlePopupDismissedLegacy();
        Alert.alert('Fingerprint Authentication', 'Authenticated successfully');
      })
      .catch(error => {
        this.setState({
          errorMessageLegacy: error.message,
          biometricLegacy: error.biometric,
        });
        this.description.shake();
      });
  }

  handleAuthenticationAttemptedLegacy = error => {
    this.setState({errorMessageLegacy: error.message});
    this.description.shake();
  };

  renderLegacy() {
    const {errorMessageLegacy, biometricLegacy} = this.state;
    const {style, handlePopupDismissedLegacy} = this.props;

    return <View />;
  }

  render = () => {
    const {navigate} = this.props.navigation;

    if (this.requiresLegacyAuthentication()) {
      return this.renderLegacy();
    }

    // current API UI provided by native BiometricPrompt
    return null;
  };
}

Login.propTypes = {
  onAuthenticate: PropTypes.func.isRequired,
  handlePopupDismissedLegacy: PropTypes.func,
  style: ViewPropTypes.style,
};

export default Login;
