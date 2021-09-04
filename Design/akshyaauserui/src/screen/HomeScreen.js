import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList ,ImageBackground} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../screen/Dimention/ScreenDimention'


import {ONE} from './images/one.jpg';
import {TWO} from './images/two.jpg';
import {THREE} from './images/three.jpg';
import {FOUR} from './images/four.jpg';


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
    }
 
})



const HomeScreen = () => {

    const  renderItem = ({item, index}) => {
        return (
          
            <View style={styles.slide}>
                            <LinearGradient
                            start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                    colors={["#fff", "#9FFCB0", "#31AE48"]}
                    style={styles.slide}
                >
          
           
                <Image
                    style={styles.imgbanner}
                    source={{uri :item.img}}    
                />
               
                
                </LinearGradient>

               
            </View>
        );
    }
    const data = [
        {
            name: 'one',
            img:'https://i.ibb.co/cyBCyYn/oko.jpg'
        },
        {
            name: 'two',
            img:'https://i.ibb.co/rFVKQPX/priscilla-du-preez-W3-SEy-ZODn8-U-unsplash.jpg'
        },
        {
            name: 'three',
            img:'https://i.ibb.co/23ZPCjB/Group-27.png'
        },
        {
            name: 'four'
        },
        {
            name: 'five'
        }
    ]


    const special_offers = [
        {
          image: 'https://i.ibb.co/FnkqfRh/charles-deluvio-Pqs-Imnju-El-M-unsplash.jpg',
          title: 'Briyani',
        },
        {
          image: 'https://i.ibb.co/vwTrLjP/azmaan-baluch-t-G9e-GRha-SXE-unsplash.jpg',
          title: 'Porota',
        },
        {
          image: 'https://i.ibb.co/4JVr43D/sanket-shah-e-EWlcfydz-Q4-unsplash.jpg',
          title: 'Noodels',
        },
        {
          image: 'https://i.ibb.co/23fZxcJ/omkar-jadhav-o5-XB6-Xw-Tb1-I-unsplash.jpg',
          title: 'Salad',
        },
      ];


//       <a href="https://ibb.co/52Xxzb1"><img src="https://i.ibb.co/FnkqfRh/charles-deluvio-Pqs-Imnju-El-M-unsplash.jpg" alt="charles-deluvio-Pqs-Imnju-El-M-unsplash" border="0"></a>
// <a href="https://ibb.co/mD2Yhcq"><img src="https://i.ibb.co/vwTrLjP/azmaan-baluch-t-G9e-GRha-SXE-unsplash.jpg" alt="azmaan-baluch-t-G9e-GRha-SXE-unsplash" border="0"></a>
// <a href="https://ibb.co/stVYszD"><img src="https://i.ibb.co/4JVr43D/sanket-shah-e-EWlcfydz-Q4-unsplash.jpg" alt="sanket-shah-e-EWlcfydz-Q4-unsplash" border="0"></a>
// <a href="https://ibb.co/Zzk25c9"><img src="https://i.ibb.co/23fZxcJ/omkar-jadhav-o5-XB6-Xw-Tb1-I-unsplash.jpg" alt="omkar-jadhav-o5-XB6-Xw-Tb1-I-unsplash" border="0"></a>


      const specialOfferView = ({ item }) => (
          <View
          style={{
              borderRadius:18
          }}
          >

        <ImageBackground
        key={item.title}
        resizeMode="cover"
        source={{uri:item.image}}
        style={{
            height: 155,
            borderRadius: 12,
            overflow: 'hidden',
            width: 125,
            marginLeft: 12,
            marginTop:18,
            flex: 1,
            justifyContent:'center',
            alignItems: 'center'
        }}
        >
                <Text
                style={{
                    marginTop: 100,
                    color:'#fff',
                    fontSize: 15,
                    fontWeight: '500'
                }}
                >
                    {item.title}
                </Text>
        </ImageBackground>
        </View>

      );


      const recomended = [
          {
              foodName: 'Naan',
              image: '',
              price: '',
              description:''
          },
          {
            foodName: 'Butter Naan',
            image: '',
            price: '',
            description:''
        },
        {
            foodName: 'Garlic Naan',
            image: '',
            price: '',
            description:''
        },
        {
            foodName: 'Paneer Naan',
            image: '',
            price: '',
            description:''
        },
        {
            foodName: 'Rotti',
            image: '',
            price: '',
            description:''
        },
      ]

    return(
        <ScrollView
        style={styles.back}
        >
        <View>
            
            <Text
            style={styles.greetingTxt}
            >
                Good Morning,
            </Text>
            <Text
            style={{
                fontSize:18,
                fontWeight:'600',
                marginLeft:25,
                color:'#758283'
            }}
            >
                What would you like to eat?
            </Text>

            <View
            style={styles.imgcontainer}
            >
            <Carousel
              data={data}
              renderItem={renderItem}
              sliderWidth={SCREEN_WIDTH}
              itemWidth={SCREEN_WIDTH}
            />
                
            </View>
        </View>
        <View>
                        <Text
                        style={
                            styles.generalTxt
                        }
                        >
                            Special Offers
                        </Text>

                </View>

        <View
        style={{
            marginLeft:25,
        }}
        >
            <FlatList

            horizontal
            data={special_offers}
            renderItem={specialOfferView}
            keyExtractor={item => item.title}
        />
        </View>

        <View>
                <Text
                style={
                    styles.generalTxt
                }
                >
                    Recommended
                </Text>
        </View>
        </ScrollView>

    )
}

export default HomeScreen;