import {Center, HStack,Button, View, Box, Image, VStack, Text } from 'native-base'
import React from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import Colors from '../color';
import products from "../data/Products";
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 



const Swiper = () => (
<SwipeListView 
        rightOpenValue={-50}
        previewRowKey="0"
        previewOpenValue={-40}
        previewOpenDelay={3000}
        data={products.slice(0, 2)}
        renderItem={renderitem}
        renderHiddenItem={renderhidden}
        showsVerticalScrollIndicator={false} />
    
)
   
    

const renderitem = (data) => (
    <Pressable>
        <Box ml={6} mb={3} mr={6}>
            <HStack alignItems="center" bg={Colors.white} shadow={1} rounded={10} overflow="hidden">
                <Center w="25%" bg={Colors.deepGray} >
                    <Image source={{ uri: data.item.image }}
                            alt={data.item.name}
                            w="full"
                            h={24}
                            resizeMode="contain" />
                        
                </Center>
                <VStack w="60%" px={2} space={3}>
                    <Text isTruncated color={Colors.black} bold fontSize={10}>
                        {data.item.name}
                    </Text>
                    <Text bold color={Colors.lightBlack}>${data.item.price}</Text>
                </VStack>
                <Center>
                    <Button bg={Colors.main} _pressed={{bg:Colors.main}} 
                            _text={{
                                color:Colors.white,
                            }}>5</Button>
                </Center>
            </HStack>
        </Box>
    </Pressable>
)
const renderhidden = () => (
    <Pressable 
     style={{width:"50px", height:"88%", borderTopRightRadius:"10px", marginLeft:"auto", marginRight:"20px",
                justifyContent:"center",
            borderBottomRightRadius:"10px", backgroundColor:Colors.red}}>
        <Center alignItems='center' space={2} >
            <FontAwesome name="trash" size={24} color={Colors.black} />
        
        </Center>

        
    </Pressable>
)

function CartItems(){
    return (
        <View>
            <Swiper />
        </View>
    )
}
export default CartItems