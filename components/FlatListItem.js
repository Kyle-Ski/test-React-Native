import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const FlatListItem = ({index, item}) => {
    return(
        <View key={index} style={{flex: 1, backgroundColor: index % 2 === 0 ? 'mediumseagreen' : 'tomatoe'}}>
            <Text style={styles.flatListItem}>{item.name}</Text>
            <Text >{item.description}</Text>
            <Image style={{height: 100, width: 200, alignSelf:'center'}} source={{uri: 'https://i.imgur.com/VySjxa2.jpg'}} />
        </View>
    )
}
const styles = StyleSheet.create({
    flatListItem: {
    color: 'black',
    padding: 10, 
    fontSize: 16
    }
})

export default FlatListItem