

import {Box, Text , Image, VStack, Input, Heading, Button } from 'native-base'
import React, { Component, useState } from 'react'
import Colors from "../color";
import { Entypo, AntDesign } from '@expo/vector-icons'; 
import { Pressable } from 'react-native';


export default class LoginI extends Component{
    constructor(props){
        super(props);
        this.state={email:'', password:''};
    }
    doLogin = () => {
        var email = this.state.email;
        var password = this.state.password;
        if(email.length==0 || password.length==0){
            alert("Bạn chưa nhập tài khoản hoặc mật khẩu");
        }else{
            var LoginURL = "http://localhost/appsouji/login.php";

            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };
            var Data = {
                email:email,
                password:password
            };
            fetch(LoginURL, {
                method:'POST',
                headers:headers.Accept,
                body: JSON.stringify(Data)
            })
            .then((response)=>response.json())
            .then((response) => {
                alert(response[0].Message);
            })
            .catch((error)=>{
                alert("Error "+error);
            })
        }
    }
    

    render() {
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
                         w="70%" color={Colors.main} borderBottomColor={Colors.underline}
                         onChangeText={email=>this.setState({email})}
                         ></Input>
                        {/* Password */}
                        <Input
                         InputLeftElement={
                            <AntDesign name="eyeo" size={20} color={Colors.white} /> }
                            variant="underlined"  pl={2} type="password" placeholder='*************'
                            w="70%" color={Colors.main} borderBottomColor={Colors.underline}
                            onChangeText={password=>this.setState({password})}
                         ></Input>
                    </VStack>
                    <Button _pressed={{bg:Colors.main,}} my={30} w="40%" rounded={50} bg={Colors.main} 
                            onPress={this.doLogin}
                        >Login</Button>
                        <Pressable mt={4} >
                            <Text color={Colors.deepestGray} >Sign Up</Text>
                        </Pressable>
                </Box>
            </Box>
            
        );
    }
        
    } 
