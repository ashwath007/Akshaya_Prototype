import React,{useRef} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList ,ImageBackground, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import LottieView from 'lottie-react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../screen/Dimention/ScreenDimention'
import RadioButtonRN from 'radio-buttons-react-native';


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

    const bottomSheetRef = useRef([]);
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



    const payment_choise = [
        {
            label: 'Cash on delivery'
        },
        {
            label: 'Pay via Card'
        }
    ]

    return(
        <>
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



            <View>

                <Text
                style={styles.generalTxt}
                >
                    APPLY COUPON 
                </Text>

                <View
                style={{
                    flexDirection: 'row',
                    justifyContent:'space-between'
                }}
                >

                <Text
                style={styles.generalTxt}
                >
                    Item Total 
                </Text>
                <Text
                style={{
                    marginTop:25,
                    fontSize:15,
                    marginRight:25
                }}
                >
                ₹255
                </Text>
                </View>
                <View
                style={{
                    flexDirection: 'row',
                    justifyContent:'space-between'
                }}
                >

                <Text
                style={styles.generalTxt}
                >
                    Delivery fee
                </Text>
                <Text
                style={{
                    marginTop:25,
                    fontSize:15,
                    marginRight:25
                }}
                >
                ₹36
                </Text>
                </View>
                <View
                style={{
                    borderBottomColor: '#919191',
                    borderBottomWidth: 1,
                    margin:25
                }}
                >
                    </View>
                <View
                style={{
                    flexDirection: 'row',
                    justifyContent:'space-between'
                }}
                >

                <Text
                style={styles.generalTxt}
                >
                    To Pay
                </Text>
                <Text
                style={{
                    marginTop:25,
                    fontSize:15,
                    marginRight:25
                }}
                >
                ₹36
                </Text>
                </View>

              
            </View>


                

                    
                        <RBSheet
          ref={(el) => (bottomSheetRef.current = el)}
          height={300}
          openDuration={250}
          closeOnDragDown={true}
      
         
        >
                <ScrollView>
            <View
            style={{
                alignItems:'center'
            }}
            >
            <LottieView 
            style={{
                height: 100,
                marginTop: 15
            }}
            source={require('./images/dman.json')} autoPlay loop />


                </View>
          <Text
          style={styles.generalTxt}
          >
              Confirm your Address
          </Text>
          <View
          style={{
              height:55,
              width:320,
              backgroundColor:'#F5F5F5',
              alignSelf:'center',
              marginTop:14
          }}
          >

              <Text
              style={{
                  margin: 10,
                  alignSelf:'center',
                  color:'#6F6F6F'
              }}
              >
              30, Mettupalayam Road,, G N Mills Post, Coimbatore

              </Text>
        </View>
   
          <Text
          style={styles.generalTxt}
          >
              Payment Method
          </Text>
              <View
              style={{
                  marginTop:15,
    
              }}
              >
                  <RadioButtonRN
                  style={{paddingLeft:25,paddingRight:25,marginBottom:25}}
                    data={payment_choise}
                    selectedBtn={(e) => console.log(e)}
                    />
                
              </View>
              <View>
                  <TouchableOpacity
                  style={{
                      width:360,
                      alignSelf:'center',
                      height: 55,
                      borderRadius:12,
                      backgroundColor:'#34B14B',
                      justifyContent:'center'
                  }}
                  >
                      <Text
                      style={{
                        alignSelf:'center',
                        fontSize:18,
                        color:'#fff'
                      }}
                      >
                          Confirm Order
                      </Text>
                  </TouchableOpacity>
              </View>
              </ScrollView>


        </RBSheet>
                            
           
        <View
        style={{
            height: 80,
            backgroundColor:'#F7F7F7',
            margin:20,
            padding:5,
            borderRadius:8
        }}
        >




           
        <View
        style={{
            flexDirection:'row'
        }}
        >
            <View
            style={{
                marginLeft:25,
                marginTop:25
            }}
            >
                </View>
            
        <MaterialCommunityIcons name="offer" color='#595959' size={38} style={{
            marginTop:15
        }} />
        <View>
            <Text
            style={{
                marginTop:25,
                fontSize:15,
                marginLeft:18
            }}
            >
        Tip your delivery partner

                </Text>
            </View>
            </View>
        </View>
        </ScrollView>
        <TouchableOpacity
                    style={{
                        backgroundColor:'#34B14B',
                        height:60,
                        marginTop:22,
                        alignItems:'center',
                        justifyContent:'center',

                       

                    }}

                    onPress={() => bottomSheetRef.current.open()}
                    >

                        <Text
                        style={{
                            color:'#fff',
                            fontSize:18
                        }}
                        >
                            Make a Payment
                        </Text>
                    </TouchableOpacity>
        </>
    )
}

export default CartScreen;