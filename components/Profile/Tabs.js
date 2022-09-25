import {Text  } from 'native-base'
import React, { useState } from 'react'
import { useWindowDimensions, StyleSheet } from 'react-native'
import {SceneMap, TabBar, TabView} from "react-native-tab-view"
import Orders from "./Orders"
import Profile from './Profile'
import Colors from '../../color'


const renderScene = SceneMap({
    first:Profile,
    second:Orders,
})

export default function Tabs(){
    const layout = useWindowDimensions()
    const [index,setIndex] = useState(0);
    const [routes] = useState([
        {
            key:"first", title:"PROFILE"
        },
        {
            key:"second", title:"ORDERS"
        }
    ]);
    const renderTabsBar = (props) =>(
        <TabBar {...props} tabStyle={styles.tabStyle} 
        indicatorStyle={{backgroundColor:Colors.black}}
        activeColor={Colors.main}
        inactiveColor={Colors.white}
        renderLabel={({route, color}) => ( 
            <Text style={{color, ...styles.text}}>
                {route.title}
            </Text>
        )} />
    );

    return (
        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width:layout.width}}
            renderTabBar={renderTabsBar} />
    )
}

const styles = StyleSheet.create({
    tabStyle: {
        backgroundColor: "black",
    },
    text:{
        fontSize: 12,
        fontWeight:"bold"
    },
})