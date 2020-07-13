import * as React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Vibration} from 'react-native';

// External StyleSheet
import {styles} from '../src/Styles';

export default class AddPosts extends React.Component{
    static navigationOptions = {
        title:'Add Posts',
        headerShown: false
    };

   render(){
    const { navigate, state } = this.props.navigation;
       return(
           <View style={styles.container}>
               <View style={styles.flexOne}>
                  <TouchableOpacity style={[styles.btn, styles.textCenter, styles.colorPink]} onPress={() => navigate('Profile')}>
                     <Text style={styles.btnCaption}>Go Back</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.flexThree}>
                  <TouchableOpacity style={[styles.btn, styles.textCenter]}>
                    <Text style={styles.btnCaption}>Start</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.btn, styles.textCenter]}>
                    <Text style={styles.btnCaption}>Stop</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.flexThree}>
                 <View style={styles.postContCenter}>
                   <Text>Your Post...</Text>
                 </View>
               </View>
               <View style={styles.flexThree}>
                  <TouchableOpacity style={[styles.btn, styles.textCenter]}>
                    <Text style={styles.btnCaption}>Read It</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.btn, styles.textCenter]}>
                    <Text style={styles.btnCaption}>Publish</Text>
                  </TouchableOpacity> 
               </View>
               {/* <View style={styles.flexThree}></View> */}
           </View>
       );
   } 
} 