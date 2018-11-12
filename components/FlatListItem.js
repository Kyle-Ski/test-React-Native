import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FlatListItem = ({index, item}) => {
    return(
        <View key={index} style={{flex: 1, backgroundColor: index % 2 === 0 ? 'mediumseagreen' : 'tomatoe'}}>
            <Text style={styles.flatListItem}>{item.name}</Text>
            <Text >{item.description}</Text>
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