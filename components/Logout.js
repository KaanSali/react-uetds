import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class Logout extends Component {
    constructor(props){
        super(props);
    }
    didFocusSub = this.props.navigation.addListener(
        'willFocus',
        payload =>{
            this.props.navigation.navigate('Personeller')
            //this.clearNavigation;
        }
    )
    componentWillMount(){
    }

    clearNavigation = () => { 
        const actionToDispatch = NavigationActions.reset({
        index: 0,
        key: null,  // black magic
        actions: [NavigationActions.navigate({ routeName: 'Çıkış Yap' })]
      })
      this.props.navigation.dispatch(actionToDispatch)
    }
    render(){
        return <View></View>
    }
}

