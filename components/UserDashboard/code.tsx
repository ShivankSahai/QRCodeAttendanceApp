import React,{Component} from 'react'
import { View,Text,StyleSheet } from 'react-native';
import {H1, Content, Item, Input, Container, Button, Spinner, Toast, Root, Icon} from 'native-base'
import axios from 'axios'
import Reactotron from 'reactotron-react-native'
import QRCode from 'react-native-qrcode-svg';

export default class EventQRCode extends Component<Props,State>{
    render(){
        return(
            <View style={{alignItems:'center',padding:40}}>
                <Text style={styles.event}>Codeingo</Text>
                <Text style={styles.org}>ACM-VIT</Text>
                <View style={styles.qrcode}>
                <QRCode
                    size={150}
                    value="5d33723b27f448001781b74b_5d33723b27f448001781b74b_5d33723b27f448001781b74b"
                />
                </View>
                <Button style={styles.back}><Text style={{color:'white'}}>Done</Text></Button>
            </View>
        )
    }
}

let styles=StyleSheet.create({
    qrcode:{
        marginVertical:20
    },
    event:{
       fontSize:26,
       color:'#ff9100',
       fontWeight:'bold'
    },
    org:{
        fontSize:18
    },
    back:{
        marginTop:20,
        paddingHorizontal:60,
        backgroundColor:'#ff9100',
        borderRadius:50,
        alignSelf:'center',
        justifyContent:'center'
    }
})

interface Props {

}
interface State {}