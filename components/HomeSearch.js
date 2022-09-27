import {Box, HStack, Input, Text , View } from 'native-base'
import React from 'react'
import { Pressable } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import Colors from '../color'
import { useNavigation } from '@react-navigation/native';



function HomeSearch(){
    const navigation = useNavigation();
    return (
        <HStack space={3} w="full" px={6} bg={Colors.main} py={4} alignItems="center"
        safeAreaTop>
            <Input placeholder='BinhThanh...' w="90%" bg={Colors.white} type="search" h={12} 
            variant="filled"
             borderWidth={0} 
            _focus={{
                bg:Colors.white
            }} />
            <Pressable ml={3} onPress={() => navigation.navigate("Cart")}>
                <FontAwesome5 name="shopping-basket" size={24} color={Colors.white}></FontAwesome5>
                <Box px={1} rounded="full" position="absolute" top={-13} left={2} bg={Colors.red}
                _text={{
                    color:Colors.white, fontSize:"11px",
                }}>1</Box>
            </Pressable>
        </HStack>
    )
}
export default HomeSearch