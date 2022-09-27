import { useNavigation } from '@react-navigation/native'
import {Button, Center, HStack, Modal, Text , Image, VStack } from 'native-base'
import React from 'react'
import { useState } from 'react'
import { Pressable } from 'react-native'
import Colors from '../color'
import Buttone from "./Buttone"

const OrdersInfos = [
    {
        title:"Products",
        price:100,
        color:"black"
    },
    {
        title:"Shipping",
        price:10,
        color:"black"
    },
    {
        title:"Tax",
        price:20,
        color:"black"
    },
    {
        title:"Total Amount",
        price:130,
        color:"main"
    },
]

function OrderModel(){
    const navigation = useNavigation();
    const [showModel, setShowModel] = useState(false)
    return (
        <Center>
            <Buttone onPress={() => setShowModel(true)}
                bg={Colors.black}
                color={Colors.white}
                mb={5}>Show payment & total</Buttone>
            <Modal
                isOpen={showModel}
                onClose={() => setShowModel(false)}
                size="lg">
                    <Modal.Content maxWidth={350}>
                        <Modal.CloseButton />
                        <Modal.Header>Order</Modal.Header>
                        <Modal.Body>
                            <VStack space={7}>
                            {OrdersInfos.map((i, index) => (
                                <HStack key={index} alignItems="center" justifyContent="space-between">
                                    <Text fontWeight="medium">{i.title}</Text>
                                    <Text color={i.color === "main" ? Colors.main : Colors.black} bold>{i.price}</Text>

                                </HStack>
                            ))}
                                
                            </VStack>
                        </Modal.Body>
                        <Modal.Footer>
                            <Pressable style={{ width:"100%", justifyContent:"center", backgroundColor:Colors.paypal, height:"45px", borderRadius:"4px"}}                                        onPress={() => setShowModel(false)}>
                                <Image 
                                    source={require("../assets/paymentmethod/paypal.png")}
                                    alt="paypal"
                                    resizeMode="contain"
                                    w="full"
                                    rounded={5}
                                    h={34} />
                            </Pressable>
                            <Button w="full" ml={2} mt={2} bg={Colors.black} h={45} _text={{
                                color:Colors.white
                            }}
                            onPress={() => {navigation.navigate("Home"); setShowModel(false);}}
                            _pressed={{bg:Colors.black}}>
                                Pay later
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
        </Center>
    )
}
export default OrderModel