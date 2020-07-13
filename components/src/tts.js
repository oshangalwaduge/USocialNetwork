import * as React from 'react';

import Tts from 'react-native-tts';

export const readText = async readText => {
  Tts.setDefaultLanguage('en-US');
  Tts.setDefaultRate(0.4);
  Tts.stop();
  Tts.speak(readText);
};
