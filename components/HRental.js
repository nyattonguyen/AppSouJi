import { Flex, ScrollView, Text, Image, Box, Heading } from 'native-base'
import React from 'react'
import { Pressable } from 'react-native'
import Colors from '../color'
import rentals from '../data/Rental.js'


function HRental(){
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
                    rentals.map((rental) => (       
                        
                            <Pressable key={rental._id}  style={{ marginBottom:"10px", marginTop:"10px", backgroundColor:Colors.main, width:'40%',
                                paddingTop:'20px', shadowRadius:'2px', paddingBottom:'10px', borderRadius:'5px' }}  my={3}  >
                                <Text fontSize={20} textAlign="center" bold mt={1} isTruncated w="full">{rental.name}</Text>
                                <Box px={4} pt={1} textAlign='center'>
                                    <Heading size="sm" bold>{rental.price}k</Heading>
                                </Box>
                            </Pressable> 
                    ))
                    
                }
                    
            </Flex>
        </ScrollView>
    );
}
export default HRental

