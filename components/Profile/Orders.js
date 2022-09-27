import { Box, HStack, ScrollView, VStack, Text, Button } from 'native-base'
import React from 'react'
import Colors from "../../color"
import {Pressable} from "react-native"


function Orders(){
    return (
        <Box h="full" bg={Colors.white} px={0}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* PAID  */}
                <Pressable>
                    <HStack space={4} justifyContent="space-between" alignItems="center"
                            bg={Colors.deepGray} py={5} px={2} >
                                <Text fontSize={9} color={Colors.blue} isTruncated>1234567890</Text>
                                <Text fontSize={12} color={Colors.black} isTruncated>Paid</Text>
                                <Text fontSize={11} color={Colors.black} isTruncated>Sem 25 2022</Text>
                                <Button px={7} py={1.5} rounded={50} bg={Colors.main} 
                                _text={{
                                    color:Colors.white,

                                }}
                                _pressed={{
                                    bg: Colors.main,
                                }}>
                                    $400
                                </Button>

                            </HStack>
                </Pressable>
                {/* Not Paid  */}
                <Pressable>
                    <HStack space={4} justifyContent="space-between" alignItems="center"
                            bg={Colors.white} py={5} px={2} >
                                <Text fontSize={9} color={Colors.blue} isTruncated>123456789011</Text>
                                <Text fontSize={12} color={Colors.black} isTruncated>Note Paid</Text>
                                <Text fontSize={11} color={Colors.black} isTruncated>Sem 25 2022</Text>
                                
                                <Button px={7} py={1.5} rounded={50} bg={Colors.red} 
                                _text={{
                                    color:Colors.white,

                                }}
                                _pressed={{
                                    bg: Colors.red,
                                }}>
                                    $29
                                </Button>

                            </HStack>
                </Pressable>
            </ScrollView>
        </Box>
    )
}
export default Orders
