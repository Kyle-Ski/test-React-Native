import React from 'react';
import { View, FlatList } from 'react-native';
import FlatListItem from './FlatListItem'
import data from '../projects.json'

const FlatListComponent = () => {
    return (
        <View style={{flex: 1, marginTop: 22}}>
        <FlatList data={data} renderItem={({item, index})=>{
            console.log(`Item = ${JSON.stringify(item.name)} at index: ${JSON.stringify(index)}`)
            return (
            <FlatListItem key={index} item={item} index={index} />

            )
        }} keyExtractor={(item, index) => index.toString()}>

        </FlatList>
        </View>
    );
}


export default FlatListComponent