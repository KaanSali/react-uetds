import React, { Component } from 'react'
import { Text, View, Image ,TouchableHighlight, ScrollView } from 'react-native'
import styles from '../constants/Styles'
import UetdsHeader from '../components/UetdsHeader';
import ImagePicker from 'react-native-image-crop-picker';
import { Label, Input , Form , Item} from 'native-base';
import {vh, vw} from 'react-native-expo-viewport-units'
import { withNavigation } from 'react-navigation';

class AddPersonelScreen extends Component {
    static navigationOptions = {
        drawerLabel: () => null,
        headerMode : 'none'
   }
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <UetdsHeader title="Personel Kaydı"/>
                <View style={{height:vh(100),backgroundColor:"#fff"}}>
                    <ScrollView style={{height:vh(100),flex:1,flexDirection:"column"}}>
                        <View style={{justifyContent:"center",flex:1,alignItems:"center"}}>
                        <Image source={require("../assets/images/blankImage.png")} style={styles.borderImg}/>
                        <Text style={{flex:1,fontSize:22}}>Profil Fotoğrafı</Text>
                    </View>
                    <Form style={{flex:1}}>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
export default withNavigation(AddPersonelScreen);