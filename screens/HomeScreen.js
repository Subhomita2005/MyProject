import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  
} from "react-native";
import db from "../config";
import firebase from "firebase";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from 'react-native-dropdown-picker';
import MyHeader from "../components/MyHeader"

export default class HomeScreen extends Component{
    render(){
        return(
           <View> 
               <MyHeader title="HomeScreen"></MyHeader>
           </View>
        )
    }
}

