import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// External StyleSheet
//import {styles} from '../src/Styles';

import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import AddPosts from './components/screens/AddPosts';
import Welcome from './components/screens/Welcome';
import GetStarted from './components/screens/Authenticate';
import PostAction from './components/screens/PostAction';
import ViewPosts from './components/screens/ViewPosts';
import Login from './components/screens/Login';
import Register from './components/screens/Register';
import FriendsAction from './components/screens/FriendsAction';
import CommentsAction from './components/screens/CommentsAction';
import AboutYou from './components/screens/AboutYou';
import SecurityInformation from './components/screens/SecurityInfo';
import ContactInformation from './components/screens/ContactInformation';
import Call from './components/screens/Call';
import Message from './components/screens/Message';
import MessangerAction from './components/screens/MessangerAction';
import AddComments from './components/screens/AddComments';
import ReadComments from './components/screens/ReadComments';
import AddFriend from './components/screens/AddFriend';
import ViewFriend from './components/screens/ViewFriend';
import UnderConstruction from './components/screens/UnderConstruction';
import Bio from './components/screens/Bio';
import Name from './components/screens/Name';
import MessageNo from './components/screens/MessageNo';
import Email from './components/screens/Email';
import MobileNumber from './components/screens/MobileNumber';

const Navigator = createStackNavigator({
  Welcome: {screen: Welcome},
  GetStarted: {screen: GetStarted},
  Home: {screen: Home},
  Profile: {screen: Profile},
  AddPosts: {screen: AddPosts},
  PostAction: {screen: PostAction},
  ViewPosts: {screen: ViewPosts},
  Login: {screen: Login},
  Register: {screen: Register},
  FriendsAction: {screen: FriendsAction},
  CommentsAction: {screen: CommentsAction},
  AboutYou: {screen: AboutYou},
  SecurityInformation: {screen: SecurityInformation},
  ContactInformation: {screen: ContactInformation},
  Call: {screen: Call},
  UnderConstruction: {screen: UnderConstruction},
  MessangerAction: {screen: MessangerAction},
  Message: {screen: Message},
  AddComments: {screen: AddComments},
  ReadComments: {screen: ReadComments},
  AddFriend: {screen: AddFriend},
  ViewFriend: {screen: ViewFriend},
  Bio: {screen: Bio},
  Name: {screen: Name},
  MessageNo: {screen: MessageNo},
  Email: {screen: Email},
  MobileNumber: {screen: MobileNumber},
});

const App = createAppContainer(Navigator);

export default App;
