import React, { Component } from 'react';
import { View, FlatList, TextInput,Text, Keyboard } from 'react-native';
import FlatListItem from './FlatListItem'
import data from '../projects.json'

class FlatListComponent extends Component {

    state = {
        input: '',
        pass: ''
    }

    componentWillMount () {
        this.KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            this.setState( () => {
                return { input: 'Keyboard is shown'}
            })
        })
        this.KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            this.setState( () => {
                return { input: 'Keyboard hidden'}
            })
        })
    }
    componentWillUnmount () {
        this.KeyboardDidShowListener.remove()
        this.KeyboardDidHideListener.remove()
    }
    render () {
    return (
        <View style={{flex: 1, marginTop: 22}}>
        <Text>Username:</Text>
        <TextInput 
            style={ {
                height: 40,
                borderColor: 'grey',
                margin: 20,
                borderWidth: 1
            }}
            onChangeText={(text) => {
                this.setState((old) => {
                    return {input: text}}) 
            }}
            autoFocus={true}
            placeholder='Enter your Username'
            returnKeyType='next'
            onSubmitEditing={Keyboard.dismiss}
        />
        <Text>Password:</Text>
        <TextInput 
            style={ {
                height: 40,
                borderColor: 'grey',
                margin: 20,
                borderWidth: 1
            }}
            onChangeText={(text) => {
                this.setState((old) => {
                    return {pass: text}}) 
            }}
            placeholder='Enter your Password'
            secureTextEntry={true}
        />
        <Text style={{marginLeft: 20}}>{this.state.input}</Text>
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
}


export default FlatListComponent