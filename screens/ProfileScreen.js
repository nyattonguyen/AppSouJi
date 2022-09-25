import {Center, Heading, Image, Text, View} from 'native-base'
import React from 'react'
import  Colors  from '../color'
import Tabs from '../components/Profile/Tabs'



function ProfileScreen(){
    return (
        <View>
            <Center bg={Colors.main} pt={10} pb={6}>
                <Image source={{uri:"https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png"}} alt="profile"
                        w={24} h={24} rounded="50%" resizeMode="cover" />
                        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
                            Admin Nhat
                        </Heading>
                        <Text italic fontSize={10} color={Colors.white}>
                            Joined Sem 24 2022
                        </Text>
            </Center>
            <Tabs />
        </View>
            
     
    )
}
export default ProfileScreen