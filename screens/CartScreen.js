import {Box, Center, HStack, ScrollView, Text , View, Button } from 'native-base'
import React from 'react'
import Colors from "../color";
import CartEmpty from '../components/CartEmpty';
import CartItems from '../components/CartItems';




function CartScreen(){
    return (
        <Box flex={1} safeAreaTop bg={Colors.subGreen}>
        <Center w={'full'} py={5}>
            <Text color={Colors.black} fontSize={20} bold>Cart</Text>
        </Center>
        {/* if cart is empty  */}

        {/* <CartEmpty /> */}

        {/* cart items  */}
        <ScrollView showsVerticalScrollIndicator={false}>
            <CartItems />
            {/* Total  */}
            <Center mt={5}>
                <HStack
                    rounded={50}
                    justifyContent="space-between"
                    bg={Colors.white}
                    shadow={2}
                    w="90%"
                    pl={5}
                    h={45}
                    alignItems="center"
                    >
                        <Text>Total</Text>
                        <Button px={10} h={45} rounded={50} bg={Colors.main} 
                        _text={{
                            color:Colors.white,
                            fontWeight:"semibold",

                        }}
                        _pressed={{
                            bg:Colors.main,
                        }}>$500</Button>
                    </HStack>
            </Center>
            {/* Checkout  */}
            <Center px={5}>
                <Button bg={Colors.black} color={Colors.white} mt={10} w="70%" rounded={20}>
                    Checkout
                </Button>
            </Center>
        </ScrollView> 
        </Box>
    )
}
export default CartScreen