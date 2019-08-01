import React,{Component} from 'react'
import { View,Text,StyleSheet } from 'react-native';
import {H1, Content, Item, Input, Container, Button, Spinner, Toast, Root} from 'native-base'
import axios from 'axios'
import Reactotron from 'reactotron-react-native'

export default class Login extends Component<Props,State>{
    constructor(props){
        super(props)
        this.state={
            loadingLogin:false,
            username:"",
            password:""
        }
    }

    login=()=>{
        if(this.state.username && this.state.password){
            this.setState({loadingLogin:true})
            let user={
                username:this.state.username,
                password:this.state.password
            }
    
            axios.post('https://enigmatic-reaches-41194.herokuapp.com/login',user,{
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then((res)=>{
                this.setState({loadingLogin:false})
                if(res.data.success){
                    this.setState({loadingLogin:false})
                    Toast.show({
                        text: res.data.message,
                        buttonText: "Okay",
                        type: "success"
                    })
                }
                else{
                    Toast.show({
                        text: res.data.message,
                        buttonText: "Okay",
                        type: "danger"
                    })
                }
            }).catch((err)=>{
                Reactotron.log(err)
            })
            }
            else{
                Toast.show({
                    text: "Please fill all fields",
                    buttonText: "Okay",
                    type: "warning"
                })
            }
    }

    render(){
        return(
            <Root>
            <View style={styles.center}>
                <Text style={styles.loginHead}>Login</Text>

                <Item style={styles.input} rounded>
                    <Input placeholder='Username' onChangeText={(username) => this.setState({username})} value={this.state.username} />
                </Item>

                <Item style={styles.input} rounded>
                    <Input secureTextEntry={true} placeholder='Password' onChangeText={(password) => this.setState({password})} value={this.state.password} />
                </Item>

                {!this.state.loadingLogin && <Button onPress={this.login} style={styles.submitBtn}><Text style={styles.btnText}>Submit</Text></Button>}
                {this.state.loadingLogin && <Button style={styles.loadingBtn}><Text style={{color:'#ff9100'}}>Submitting </Text><Spinner size="small" color='#ff9100' /></Button>}
            </View>
            </Root>
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
        marginTop:20,
        width:'80%',
        backgroundColor:'#ff9100',
        borderRadius:50,
        alignSelf:'center',
        justifyContent:'center'
    },
    loadingBtn:{
        marginTop:20,
        width:'80%',
        backgroundColor:'white',
        borderRadius:50,
        alignSelf:'center',
        justifyContent:'center'
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
interface State {
    username:string
    password:string
    loadingLogin:boolean
}