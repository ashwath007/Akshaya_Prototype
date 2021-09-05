import React from 'react';
import { StyleSheet, View, Text,ScrollView, TouchableOpacity } from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../screen/Dimention/ScreenDimention'
import LottieView from 'lottie-react-native';


const styles = new StyleSheet.create({

    back: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: '#fff'
    },

    greetingTxt: {
        fontSize: 25,
        marginLeft:25,
        marginTop:35,
        color:'#34B14B',
        fontWeight:'500'
    },
    imgcontainer: {
        marginTop: 30,
        marginLeft:25,
        
    },
    slide: {
        backgroundColor: '#000',
        height:160,
        width: 320,
        borderRadius:12,
    },

    imgbanner: {
        height: 160,
        width:320,
        borderRadius: 12
    },

    generalTxt: {
        fontSize: 18,
        marginTop:25,
        color: '#000000',
        fontWeight: '600',
        marginLeft: 25
    },


    menuContainer: {
        marginLeft:25,

    }
 
})

const Profile = () => {




    return(
        <ScrollView
        style={{
            height: SCREEN_HEIGHT,
            width: SCREEN_WIDTH,
            backgroundColor:'#fff'
        }}
        >
            <View
            style={{
                alignSelf:'center'
            }}
            >
<LottieView 
            style={{
                height: 200,
                marginTop: 15
            }}
            source={require('./images/user.json')} autoPlay loop />
            
            <Text
            style={{
                alignSelf:'center',
                fontSize:28,
                marginTop:18,
                fontWeight:'600'
            }}
            >
                Hi, Scarlett
            </Text>
            <Text
            style={{
                alignSelf:'center',
                fontSize:18,
                marginTop:18,
                fontWeight:'400'
            }}
            >
                Account Details
            </Text>
            <Text
            style={{
                alignSelf:'center',
                fontSize:18,
                marginTop:18,
                fontWeight:'400'
            }}
            >
                8072002***
            </Text>
      
            </View>

    
            <TouchableOpacity
            
            style={{
                height:55,
                width:300,
                alignSelf:'center',
                marginTop:80,
                borderRadius:8,
                backgroundColor:'#34B14B',
                justifyContent:'center'
            }}
            >
                <Text
                style={{
                    fontSize:18,
                    color:'#fff',
                    alignSelf:'center',
                    fontWeight:'400'
                }}
                >
                    View Order History
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            
            style={{
                height:55,
                width:300,
                alignSelf:'center',
                marginTop:20,
                borderRadius:8,
                backgroundColor:'#34B14B',
                justifyContent:'center'
            }}
            >
                <Text
                style={{
                    fontSize:18,
                    color:'#fff',
                    alignSelf:'center',
                    fontWeight:'400'
                }}
                >
                    Logout
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}


export default Profile;