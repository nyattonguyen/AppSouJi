import {Box, Text, Heading, VStack, FormControl, Select, CheckIcon, TextArea, Button} from 'native-base'
import React, { useState } from 'react'
import  Colors  from '../color'
import Rating from "./Rating"

import Message from "./Notification/Message"
import Buttone from './Buttone'

export default function Review() {
    const [ratings, setRatings] = useState("")
    return(
        <Box my={9} >
            

            <Heading bold fontSize={15} mb={2}>
                REVIEW
            </Heading>
            {/* No review */}
            {/* <Message color={Colors.black} bg={Colors.deepGray} 
            bold
            children={"No review"}/> */}

            <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
                <Heading fontSize={15} color={Colors.black}>
                    User Done
                </Heading>
                <Rating value={4} />
                <Text my={2} fontSize={12}>Jan 12 2022</Text>
                <Message color={Colors.black} bg={Colors.white} fontSize={10} children={"NativeBase VS Code Extensions are specifically designed to quicken your development process using NativeBase 3.0."}/>
            </Box>
            {/* write review  */}
            {/* <Box mt={6}>
                <Heading bold fontSize={15} mb={4}>
                    Review this product
                </Heading>
                <VStack space={6}>
                <FormControl>
                    <FormControl.Label _text={{fontSize:"12px",
                    fontWeight:"bold", }}>Rating
                    </FormControl.Label>
                    <Select bg={Colors.subGreen} borderWidth={0} rounded={5} py={4} placeholder="Choose Rate"
                    _selectedItem={{
                        color:Colors.black,
                        bg:Colors.subGreen, endIcon:<CheckIcon size={5}/>,
                        }} 
                        selectedValue={ratings}
                        onValueChange={(e) => setRatings(e)}
                        >
                        <Select.Item label='1 - Poor' value="1" />
                        <Select.Item label='2 - Fair' value="2" />
                        <Select.Item label='3 - Good' value="3" />

                    </Select>
                </FormControl>
                <FormControl>
                    <FormControl.Label _text={{fontSize:"12px",
                    fontWeight:"bold", }}>Comment
                    </FormControl.Label>
                    <TextArea h={24} w="full" placeholder='This product is good ...' borderWidth={0}
                                bg={Colors.subGreen} py={4} />
                </FormControl>
                <Buttone bg={Colors.main} color={Colors.white}>Submit</Buttone>
                 <Message color={Colors.white} bg={Colors.black} 
                    bold
                    children={"Please 'Login' to write a review"}/>
                </VStack>
            </Box> */}
        </Box>
    );
}
