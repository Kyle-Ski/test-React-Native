import React, { Component } from 'react';
import { ScrollView, Image, Text, TextInput, Keyboard } from 'react-native'
import data from '../projects.json'

const stuff = (data) => {
    return data.map((data, i) => {
        return (
            <Image source={'https://i.imgur.com/VySjxa2.jpg'}></Image>
            <Text>{data.description}</Text>
        )
    })
}

class ScrollViewItem extends Component {

    render() {
        return(
            <ScrollView>
            {stuff(data)}
            </ScrollView>
        )
    }
}

export default ScrollViewItem