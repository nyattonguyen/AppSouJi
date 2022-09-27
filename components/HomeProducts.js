import { useNavigation } from '@react-navigation/native'
import { Flex, ScrollView, Text, Image, Box, Heading } from 'native-base'
import React from 'react'
import { Pressable } from 'react-native'
import Colors from '../color'
import products from '../data/Products.js'
import Rating from './Rating';


function HomeProducts(){
    const navigation = useNavigation();
    return (
        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
            <Flex 
            flexWrap="wrap"
            direction="row"
            display={'inline-flex'}
            justifyContent="space-around"
            width='100%'
            px={6} >
                {
                    products.map((product) => (       
                        
                            <Pressable
                                onPress={() => navigation.navigate("Single", product)}
                                key={product._id}  style={{ marginBottom:"10px", marginTop:"10px", backgroundColor:Colors.white, width:'40%',
                                paddingTop:'20px', shadowRadius:'2px', paddingBottom:'10px', borderRadius:'5px' }}  my={3} 
                                 >

                                <Image source={{uri:product.image}} alt={product.name} w="full" h={24} resizeMode="contain" />
                                <Box px={4} pt={1} textAlign='center'>
                                    <Heading size="sm" bold>{product.price} </Heading>
                                    <Text fontSize={10} mt={1} isTruncated w="full">${product.name}</Text>
                                    <Rating value={product.rating} />
                                </Box>
                            </Pressable> 
                    ))
                    
                }
                    
            </Flex>
        </ScrollView>
    );
}
export default HomeProducts

