import {Box, Heading, ScrollView, Text , View } from 'native-base'
import React from 'react'
import Colors from '../color'
import OrderInfo from '../components/OrderInfo'
import { FontAwesome, FontAwesome5, Ionicons} from '@expo/vector-icons'; 
import OrderIterm from '../components/OrderIterm';
import OrderModel from '../components/OrderModel';

function OrderScreen(){
    return (
        <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    >

                        <OrderInfo title="Order info" success subTitle="Shipper: bao" text="payment: momo"
                            icon={<FontAwesome5 name="shipping-fast" size={30} color={Colors.white}  />}
                             />  
                        <OrderInfo title="Delivery to" danger subTitle="344 no trang long, Binh thanh" text="payment: momo"
                            icon={<Ionicons name="location-sharp" size={30} color={Colors.white}  />}
                             />  
                    </ScrollView>
            </Box>

            {/* order item  */}
            <Box px={6} flex={1} pb={3} >
                <Heading bold fontSize={15} isTruncated my={4}>
                    Products
                </Heading>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <OrderIterm />

                </ScrollView>
                {/* Total  */}
                <OrderModel />

            </Box>

        </Box>
    )
}
export default OrderScreen