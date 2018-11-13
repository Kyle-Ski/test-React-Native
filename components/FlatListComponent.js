import React, { Component } from 'react';
import { 
    View, 
    FlatList, 
    TextInput,
    Text, 
    Keyboard, 
    Alert,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import FlatListItem from './FlatListItem'
import data from '../projects.json'
import Button from 'react-native-button'
class FlatListComponent extends Component {

    state = {
        input: '',
        pass: '',
        keyboardShown: ''
    }

    componentWillMount () {
        this.KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            this.setState( () => {
                return { keyboardShown: 'Keyboard is shown'}
            })
        })
        this.KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            this.setState( () => {
                return { keyboardShown: 'Keyboard hidden'}
            })
        })
    }
    componentWillUnmount () {
        this.KeyboardDidShowListener.remove()
        this.KeyboardDidHideListener.remove()
    }
    
    _onPressButton = () => {
        Alert.alert(`Your password is ${this.state.pass}`)
    }

    render () {
    return (
        <View style={{flex: 1, marginTop: 22, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{alignSelf: 'flex-start'}}>Username:</Text>
        <TextInput 
            style={ {
                height: 40,
                width: 400,
                borderColor: 'grey',
                margin: 20,
                borderWidth: 1
            }}
            onChangeText={(text) => {
                this.setState((old) => {
                    return {input: text}}) 
            }}
            autoFocus={false}
            placeholder='Enter your Username'
            returnKeyType='next'
            onSubmitEditing={Keyboard.dismiss}
        />
        <Text style={{alignSelf: 'flex-start'}}>Password:</Text>
        <View style={{borderRadius: 20, backgroundColor: 'green'}}>
        {/* <Button 
            style={
                {
                    backgroundColor: 'green'
                }
            }
            title='Submit' 
            onPress ={
                () => {
                    return Alert.alert(`Your Password is: ${this.state.pass}`)
                }
            }
        >
        </Button> */}
        </View>
        <TextInput 
            style={ {
                height: 40,
                width: 400,
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
        <Button 
            style={
            {
                fontSize: 20, 
                color: 'white', 
                backgroundColor: 'green',
                borderRadius: 15,
                padding: 10
                }
            }
            onPress={this._onPressButton}
        >
            Submit
        </Button>
        <Text style={{marginLeft: 20}}>{this.state.input}</Text>
        <Text style={{marginLeft: 20}}>{this.state.keyboardShown}</Text>
        <FlatList data={data} renderItem={({item, index})=>{
            return (
            <FlatListItem key={index} item={item} index={index} />

            )
        }} keyExtractor={(item, index) => index.toString()}>

        </FlatList>
        <Image source={{uri: 'https://i.imgur.com/VySjxa2.jpg'}}></Image>
        </View>
    );
}
}


export default FlatListComponent