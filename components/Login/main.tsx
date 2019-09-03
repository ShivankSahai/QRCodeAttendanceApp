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
    
            axios.post('http://192.168.43.22:3000/login',user)
            .then((res)=>{
                this.setState({loadingLogin:false})
                if(res.data.success){
                    Toast.show({
                        text: res.data.message,
                        buttonText: "Okay",
                        type: "success"
                    })
                    this.props.navigation.navigate((res.data.code===0)?'UserDashboard':'OrgDashboard')
                }
                else{
                    Toast.show({
                        text: res.data.message,
                        buttonText: "Okay",
                        type: "danger"
                    })
                }
            }).catch((err)=>{
                this.setState({loadingLogin:false})
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
                {this.state.loadingLogin && <Button style={styles.loadingBtn}><Text style={{color:'#ff9100',fontWeight:'bold',fontSize:18}}>Submitting </Text><Spinner size="small" color='#ff9100' /></Button>}

                <Text onPress={()=>{this.props.navigation.navigate('Signup')}} style={styles.signupInstead}>Signup instead</Text>
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
        color:'white',
        fontWeight:'bold',
        fontSize:18
    },
    center:{
        alignItems:'center',
        justifyContent:'center',
        flex: 1,
        backgroundColor:'white'
    },
    signupInstead:{
        fontSize:16,
        color:'black',
        fontWeight:'bold',
        textDecorationLine:'underline',
        marginTop:10
    }
})

interface Props {
    navigation:any
}
interface State {
    username:string
    password:string
    loadingLogin:boolean
}