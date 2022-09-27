import { useNavigation } from '@react-navigation/native'
import {Text , View, Box, Center, ScrollView, VStack, FormControl, Input } from 'native-base'
import React from 'react'
import Colors from '../color'
import Buttone from '../components/Buttone'

const ShippingInputs = [
    {
        label:"Nhập thành phố / tỉnh",
        type:"text"
    },
    {
        label:"Nhập quận / huyện",
        type:"text"
    },
    {
        label:"Nhập phường / xã ",
        type:"text"
    }
    ,{
        label:"Nhập địa chỉ ",
        type:"text"
    },
    

]

function ShippingScreen(){
    const navigation = useNavigation();
    return (
        <Box flex={1} safeArea bg={Colors.main} py={5}>
            <Center pb={15}>
                <Text color={Colors.white} fontSize={16} bold>
                Delivery address</Text>
            </Center>
            <Box h="full" bg={Colors.white} px={5}>
                <ScrollView showsVerticalScrollIndicator>
                    <VStack space={6} mt={5}>
                    {ShippingInputs.map((i, index) => (
                        <FormControl key={index}>
                            <FormControl.Label 

                            fontWeight="bold"
                            _text={{
                                fontSize:"12px"
                                
                            }}>
                                {i.label}
                            </FormControl.Label>
                            <Input borderWidth={0.2} 
                                    borderColor={Colors.main}
                                    py={4}
                                    type={i.type}
                                    bg={Colors.subGreen}
                                    color={Colors.main}
                                    _focus={{
                                        bg:Colors.subGreen,
                                        borderWidth: 1,
                                        borderColor:Colors.main
                                    }}>

                                    </Input>
                        </FormControl>
                    ))}
                    <Buttone 
                        onPress={() => navigation.navigate("Checkout")}
                        bg={Colors.black} color={Colors.white}>
                        Tiếp tục 
                    </Buttone>
               
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
    )
}
export default ShippingScreen