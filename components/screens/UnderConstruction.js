import * as React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Vibration} from 'react-native';

// External StyleSheet
import {styles} from '../src/Styles';
import {readText} from '../src/tts';

export default class UnderConstruction extends React.Component{
    static navigationOptions = {
        title:'Get Started',
        headerShown: false
    };

   render(){
    const { navigate, state } = this.props.navigation;
       return(
           <View style={styles.container}>
               <View style={styles.flexOne}>
               <TouchableOpacity style={[styles.btn, styles.textCenter, styles.colorPink]} 
               onPress={readText.bind(this, 'Go Back')}
               onLongPress={() => {this.props.navigation.goBack(); Vibration.vibrate(300);}}>
                    <Text style={styles.btnCaption}>Go Back</Text>
                </TouchableOpacity>
               </View>
               <View style={styles.flexThree, {flex:7}}>
                   <TouchableOpacity style={[styles.btn, styles.textCenter, styles.colorYellow]} 
                   onPress={readText.bind(this, ' The page  is  in UnderConstruction')}>
                       <Text style={styles.btnCaption}>Under Construction</Text>
                   </TouchableOpacity>
               </View>
           </View>
       );
   } 
} 