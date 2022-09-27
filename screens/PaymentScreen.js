import {Text , Image, Box, Center, ScrollView, VStack, HStack, Spacer } from 'native-base'
import React from 'react'
import Colors from '../color'
import Buttone from '../components/Buttone'
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const paymentMethods = [
    {
        image:require("../assets/paymentmethod/paypal.png"),
        alt:"paypal",
        icon:"Ionicons"
    },
    {
        image:require("../assets/paymentmethod/momo.png"),
        alt:"momo",
        icon:"fontAwesome"
    }
    ,{
        image:require("../assets/paymentmethod/zalopay.png"),
        alt:"zaloPay",
        icon:"fontAwesome"
    }
    

]

function PaymentScreen(){
    const navigation = useNavigation();
    return (
        <Box flex={1} safeArea bg={Colors.main} py={5}>
            <Center pb={15}>
                <Text  color={Colors.white} fontSize={16} bold>
                Phuong thuc thanh toan</Text>
            </Center>
            <Box h="full" bg={Colors.subGreen} px={5}>
                <ScrollView showsVerticalScrollIndicator>
                    <VStack space={6} mt={5}>
                    {paymentMethods.map((i,index) => (
                        <HStack alignItems='center' key={index}
                            bg={Colors.white} 
                            px={3}
                            py={1}
                            justifyContent="space-between"
                            rounded={10}
                            >
                                <Box>
                                    <Image 
                                    source={i.image}
                                    alt={i.alt}
                                    resizeMode='contain'
                                    w={60}
                                    h={50} />
                                <Spacer />

                                </Box>
                                {i.icon === "Ionicons" ? 
                                <Ionicons
                                        size={30}
                                        color={Colors.main}
                                        name='checkmark-circle'
                                /> : <FontAwesome
                                        size={30}
                                        color={Colors.main}
                                        name='circle-thin'
                                        
                                /> }
                                
                            </HStack>
                    ))}
                    
                    <Buttone 
                        onPress={() => navigation.navigate("PlaceOrder")}
                        bg={Colors.black} color={Colors.white}>
                        Tiếp tục 
                    </Buttone>
                    <Text italic textAlign="center">
                        Thanh toán bằng <Text bold>Paypal</Text> mặc định 
                    </Text>
               
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
    )
}
export default PaymentScreen