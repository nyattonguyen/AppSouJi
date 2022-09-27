import {Text , Input, Box, ScrollView, VStack, FormControl } from 'native-base'
import React from 'react'
import Colors from "../../color"
import Buttone from "../Buttone"

const Inputs = [
    {
        label:"Username",
        type:"text",   
    },
    {
        label:"Email",
        type:"text",
    },
    {
        label:"New Password",
        type:"password", 
    },
    {
        label:"Confirm Password",
        type:"password", 
    }
]
function Profile(){
    return (
        <Box h="full" bg={Colors.white} px={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack space={10} mt={5} pb={10}>
                {
                    Inputs.map((i, index) => (
                        <FormControl key={index}>
                    <FormControl.Label 
                        _text={{
                            fontSize:'14px',
                            fontWeight:'bold',
                        }}>
                            {i.label}
                        </FormControl.Label>
                        <Input 
                            borderWidth={0.5} 
                            bg={Colors.subGreen} 
                            py={3} 
                            rounded={5}
                            type={i.type}
                            color={Colors.main}
                            fontSize={15} 
                                    _focus={{
                                        bg: Colors.subGreen,
                                        borderColor:Colors.main, 
                                        borderWidth:1,}} />
                    </FormControl>
                    ))
                }
                <Buttone bg={Colors.main} color={Colors.black}>
                    Update Profile
                </Buttone>
                </VStack>
            </ScrollView>
        </Box>
    )
}
export default Profile
