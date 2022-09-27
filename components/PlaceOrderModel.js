import { useNavigation } from '@react-navigation/native'
import {Button, Center, HStack, Modal, Text , View, VStack } from 'native-base'
import React from 'react'
import { useState } from 'react'
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

function PlaceOrderModel(){
    const navigation = useNavigation();
    const [showModel, setShowModel] = useState(false)
    return (
        <Center>
            <Buttone onPress={() => setShowModel(true)}
                bg={Colors.black}
                color={Colors.white}
                mb={5}>Show total</Buttone>
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
                            <Button
                             flex={1} bg={Colors.main} h={45} _text={{
                                color:Colors.white
                            }}
                            onPress={() => {
                                navigation.navigate("Order");
                                setShowModel(false);
                                }
                               }
                            _pressed={{bg:Colors.main,}}>
                                Place an order
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
        </Center>
    )
}
export default PlaceOrderModel