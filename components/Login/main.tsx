import React,{Component} from 'react'
import { View,Text,StyleSheet } from 'react-native';
import {H1, Content, Item, Input, Container, Button} from 'native-base'

export default class Login extends Component<Props,State>{
    render(){
        return(
            <View style={styles.center}>
                <Text style={styles.loginHead}>Login</Text>

                <Item style={styles.input} rounded>
                    <Input placeholder='Email'/>
                </Item>

                <Item style={styles.input} rounded>
                    <Input secureTextEntry={true} placeholder='Password'/>
                </Item>

                <Button style={styles.submitBtn}><Text style={styles.btnText}>Submit</Text></Button>
            </View>
        )
    }
}

let styles=StyleSheet.create({
    loginHead:{
        color:'#ff9100',
        fontSize:50,
        marginVertical:20,
        fontWeight:'bold'
    },
    input:{
        width:'80%',
        paddingHorizontal:10,
        marginBottom:20
    },
    submitBtn:{
        paddingVertical:20,
        paddingHorizontal:50,
        backgroundColor:'#ff9100',
        borderRadius:50,
        alignSelf:'center'
    },
    btnText:{
        color:'white'
    },
    center:{
        alignItems:'center',
        justifyContent:'center',
        flex: 1,
        backgroundColor:'white'
    }
})

interface Props {}
interface State {}