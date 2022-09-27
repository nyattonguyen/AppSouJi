import {Box, Text , Image, VStack, Input, Heading, Button } from 'native-base'
import React, { Component } from 'react'
import Colors from "../color";
import { Entypo, AntDesign } from '@expo/vector-icons'; 
import { Pressable } from 'react-native';
import { useState } from 'react';
import { render } from 'react-dom';



function LoginScreen({navigation}){
        return (
            <Box flex={1} bg={Colors.black} >
                <Image flex={1} alt="logo" resizeMode="cover"
                    source={require("../assets/bgLogin.jpg")}
                    size="lg" w="full"
                />
                <Box w="full" h="full" position="absolute" top="0" px="6"
                justifyContent="center"
                >
                    <Heading color={Colors.white}>Login</Heading>
                    <VStack space={8} pt="6">
                        {/* Email  */}
                        <Input
                         InputLeftElement={<Entypo name="mail" size={20} color={Colors.white}/>}
                         variant="underlined" placeholder="user@gmail.com" pl={2}
                         w="70%" color={Colors.main} borderBottomColor={Colors.underline}></Input>
                        {/* Password */}
                        <Input
                         InputLeftElement={
                            <AntDesign name="eyeo" size={20} color={Colors.white} /> }
                         variant="underlined"  pl={2} type="password" placeholder='*************'
                         w="70%" color={Colors.main} borderBottomColor={Colors.underline}></Input>
                    </VStack>
                    <Button _pressed={{bg:Colors.main,}} my={30} w="40%" rounded={50} bg={Colors.main} 
                            onPress={() => navigation.navigate("Bottom")}
                        >Login</Button>
                        <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
                            <Text color={Colors.deepestGray} >Sign Up</Text>
                        </Pressable>
                </Box>
            </Box>
            
        );
    } 

export default LoginScreen