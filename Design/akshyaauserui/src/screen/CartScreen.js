import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList ,ImageBackground} from 'react-native';

import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../screen/Dimention/ScreenDimention'


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


const CartScreen = () => {


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
      
      // {
      //     foodName: 'Rotti',
      //     image: N1,
      //     price: '',
      //     description:'',
      //     id:5,
      //     category: 'veg'

      // },
    ];


    return(
        <ScrollView
        style={styles.back}
        >
            
            <Text
            style={styles.greetingTxt}
            >
                Cart, Hurry Up
            </Text>
            <Text
            style={{
                fontSize:18,
                fontWeight:'600',
                marginLeft:25,
                color:'#758283'
            }}
            >
                Your Cart Items Here
            </Text>

        <View>
           

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

export default CartScreen;