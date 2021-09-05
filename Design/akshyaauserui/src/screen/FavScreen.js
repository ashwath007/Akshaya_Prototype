import React from 'react';
import { StyleSheet, View, Text,ScrollView } from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../screen/Dimention/ScreenDimention'
import LottieView from 'lottie-react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



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



const FavScreen = () => {

    return(

        <ScrollView
        style={{
            width:SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            backgroundColor: '#ffffff'
        }}
        >


        <Text
        style={styles.generalTxt}
        >
            Our happiness
        </Text>


      
                    <View>

                    </View>
    </ScrollView>
    )
    

}

export default FavScreen;