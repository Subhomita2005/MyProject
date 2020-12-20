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

 
} from "react-native";
import db from "../config";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
export default class WelcomeScreen extends Component{
  render(){
  return (
<View>   
<View style={{justifyContent:"center",alignItems:"center"}}><Image source={require("../assets/sit.jpeg")} style={{width:200,height:200}}></Image></View> 
<View style={{jusifyContent:"center",alignItems:"center"}}><Text style={{fontSize:40,fontWeight:"bold"}}>Welcome</Text></View>
 <View style={{flex:1,alignItems:'center', marginTop:75}}>
              <TouchableOpacity
                style={styles.gsButton}
                onPress={() =>{
                this.props.navigation.navigate("LoginScreen")
                }}
              >
                <Text style={styles.gsButtonText}>Getting Started</Text>
              </TouchableOpacity>
              <View style={{ marginTop:50}}>
                <Text style={{color:"black",fontWeight:"bold"}}>
                  Already have an account ?
                </Text>
                <TouchableOpacity onPress={() =>{
                this.props.navigation.navigate("LoginScreen")
                }}>
                  <Text style={{fontSize:20, color:"#32867d"}}>Login</Text>
                </TouchableOpacity>
              </View>
              
              
            </View>
            </View>
      
    );
  }
  }
  
  const styles = StyleSheet.create({
    gsButton: {
      width: "75%",
      height: RFValue(50),
      marginTop:RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: RFValue(3),
      backgroundColor: "#32867d",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
    }
    })
