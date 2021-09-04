import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList ,ImageBackground} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../screen/Dimention/ScreenDimention'
import {VEG} from "./images/veg.png";
import {NONVEG} from "./images/nonveg.png"

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



const HomeScreen = () => {

    const  renderItem = ({item, index}) => {
        return (
          
            <View>
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
{/* <a href="https://ibb.co/nPDMrqR"><img src="https://i.ibb.co/J3zjnWC/frank-holleman-7o-YPIMGUhj-A-unsplash.jpg" alt="frank-holleman-7o-YPIMGUhj-A-unsplash" border="0"></a>
<a href="https://ibb.co/y0D47Hs"><img src="https://i.ibb.co/H70h35g/syed-f-hashemi-ht8-LS00-RUWA-unsplash.jpg" alt="syed-f-hashemi-ht8-LS00-RUWA-unsplash" border="0"></a>
<a href="https://ibb.co/NTXKNLq"><img src="https://i.ibb.co/vXbkdJW/amirali-mirhashemian-ZSuk-CSw5-VV4-unsplash.jpg" alt="amirali-mirhashemian-ZSuk-CSw5-VV4-unsplash" border="0"></a>
<a href="https://ibb.co/9VkCDqf"><img src="https://i.ibb.co/LJX2FCq/usman-yousaf-gqp-ACgn-OGBQ-unsplash.jpg" alt="usman-yousaf-gqp-ACgn-OGBQ-unsplash" border="0"></a> */}

      const recomended = [
          {
              foodName: 'Naan',
              image: 'https://i.ibb.co/J3zjnWC/frank-holleman-7o-YPIMGUhj-A-unsplash.jpg',
              price: '₹120',
              description:"Naan + Paneer butter",
              id:1,
              category: 'veg',
              ex:false
          },
          {
            foodName: 'Butter Naan',
            image: 'https://i.ibb.co/H70h35g/syed-f-hashemi-ht8-LS00-RUWA-unsplash.jpg',
            price: '₹135',
            description:"Butter Naan +Butter Chicken ",

            id:2,
            category: 'veg',
            ex:true

        },
        {
            foodName: 'Garlic Naan',
            image: 'https://i.ibb.co/vXbkdJW/amirali-mirhashemian-ZSuk-CSw5-VV4-unsplash.jpg',
            price: '₹112',
            description:"Naan + Chicken butter",

            id:3,
            category: 'veg',
            ex:false
        },
        {
            foodName: 'Paneer Naan',
            image: 'https://i.ibb.co/LJX2FCq/usman-yousaf-gqp-ACgn-OGBQ-unsplash.jpg',
            price: '₹210',
            description:"Naan + Paneer butter",


            id:4,
            category: 'veg',
            ex:false
        },
        // {
        //     foodName: 'Rotti',
        //     image: N1,
        //     price: '',
        //     description:'',
        //     id:5,
        //     category: 'veg'

        // },
      ];


      const recomendedView = ({item}) => {
            return(
                <View
                style={styles.menuContainer}
                >
                    <View
                    style={{
                        flexDirection: 'row',
                        flex:2,
                        justifyContent:'space-between'
                    }}
                    >
        <View
                    style={{
                        marginTop:15
                    }}
                    >

{item.category === 'veg' ? (
                        <Image
                        source={require('./images/nonveg.png')}
                        />
                    ):
                    (
                        null
                    )
                    }
                    <Text
                    style={{
                        fontSize:18,
                        fontWeight:'700',
                        marginTop:8
                    }}
                    >
                        {item.foodName}
                        </Text>

                        <Text
                        style={{
                            color: '#505050',
                            fontSize: 18
                        }}
                        >
                            {item.price}
                            </Text>
                            <Text
                        style={{
                            color: '#505050',
                            fontSize: 12,
                            marginTop:5
                        }}
                        >
                            {item.description}
                            </Text>
                            {item.ex === true ? (
                                    <Text
                                    style={{
                                        color: '#F7CD2E',
                                        fontSize: 15,
                                        marginTop:5,
                                        fontWeight:'bold'
                                    }}
                                    >
                                    ⭐ BESTSELLER
                                        </Text>
                            ) : (
                                null

                            )

                            }
                          
                    </View>
                    <View
                    style={{
                        marginTop:20,
                        alignSelf:'flex-end',
                        marginRight:25
                    }}
                    >
                        <Image
                        style={{height:90,width:110,borderRadius:8}}
                        source={{uri: item.image}}
                    />
                           
                           <View
                    style={{
                        alignItems:'center',
                        marginTop:10
                    }}
                    >
                        <View
                        style={{
                            flexDirection: 'row'
                        }}
                        >
                            <View
                            style={{
                                height:28,
                                width:42,
                                backgroundColor:'#CAD5E2',
                                justifyContent: 'center',
                                alignItems:'center',
                                borderTopLeftRadius:5,
                                borderBottomLeftRadius:5
                            }}
                            >
                                <Text
                                style={{
                                    fontSize:22,
                                    
                                }}
                                >
                                    -
                                </Text>
                            </View>
                            <View
                            style={{
                                margin:5
                            }}
                            >
                                <Text>
                                    2
                                </Text>
                            </View>
                            <View
                            style={{
                                height:28,
                                width:42,
                                backgroundColor:'#CAD5E2',
                                justifyContent: 'center',
                                alignItems:'center',
                                borderTopRightRadius:5,
                                borderBottomRightRadius:5
                            }}
                            >
                                <Text
                                style={{
                                    fontSize:18,
                                    
                                }}
                                >
                                    +
                                </Text>
                            </View>
                          
                        </View>
                    </View>
                    
                    </View>
                    </View>
            
                 
                </View>
            )
      } 

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
                <View>
                    <FlatList
                    
                    data={recomended}
                    renderItem={recomendedView}
                    keyExtractor={item => item.id}
                    />

                </View>
        </View>
        </ScrollView>

    )
}

export default HomeScreen;