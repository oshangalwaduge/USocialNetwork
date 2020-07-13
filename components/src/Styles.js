import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // Container Styles

  container: {
    flex: 1,
  },
  flexOne: {
    flex: 1,
    //backgroundColor:'red'
  },
  flexThree: {
    flex: 3,
    //backgroundColor:'yellow',
    //borderWidth: 1,
    flexDirection: 'row',
  },

  //Button Styles

  btn: {
    flex: 1,
    //backgroundColor: 'white',
    //borderWidth: 1,
    //borderColor: 'black',
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  btnCaption: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },

  //Text Styles

  textCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentCenter: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },

  //Colors

  colorYellow: {
    backgroundColor: '#FFC107',
  },
  colorBlue: {
    backgroundColor: '#1E88E5',
  },
  colorPink: {
    backgroundColor: '#D81B60',
  },
  colorGreen: {
    backgroundColor: '#009E73',
  },
  colorBlack: {
    backgroundColor: 'black',
  },
});

export {styles};
