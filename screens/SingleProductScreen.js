import {Box, ScrollView, Image, Heading, HStack, Button, Text} from 'native-base'
import React, { useState } from 'react'
import  Colors  from '../color'
import Rating from "../components/Rating"
import NumericInput from 'react-native-numeric-input'
import Buttone from '../components/Buttone'
import Review from '../components/Review'



function SingleProductScreen(){
    const [value, setValue] = useState(0);
    return (
        <Box safeArea flex={1} bg={Colors.white}>
            <ScrollView px={5} showsVerticalScrollIndicator={false}>
                <Image source={require("../assets/sp1.jpg")} alt="Image" w="full" h={300} resizeMode="contain" />
                <Heading bold fontSize={15} mb={2} lineHeight={22}>Dong ho Thuy si</Heading>
                <Rating value={4}/>
                <HStack space={2} alignItems="center" my={5} >                    
                    <NumericInput  onChange={value => (value)} totalWidth={240} 
            totalHeight={50} />
                </HStack>
                <Text lineHeight={24} fontSize={12} >
                    NativeBase VS Code Extensions
                    are specifically designed to quicken your development process using NativeBase 3.0.
                    NativeBase snippets are shorthand for commonly used NativeBase components.
                    All snippets start with the prefix nb- and are followed by the name of the desired component.
                </Text>
                <Buttone bg={Colors.main} color={Colors.white} mt={10}>ADD TO CART</Buttone>

                <Review />
            </ScrollView>
        </Box>
    )
}
export default SingleProductScreen

// value={value} totalWidth={140} totalHeight={30} iconSize={30} 
//                             step={1} maxValue={15} minValue={0} borderColor={Colors.deepGray} 
//                             rounded textColor={Colors.black} iconStyle={{color: Colors.white}} 
//                             rightButtonBackgroundColor={Colors.main} 
//                             leftButtonBackgroundColor={Colors.main} 