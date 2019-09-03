import React,{Component} from 'react'
import { View,Text,StyleSheet,ScrollView } from 'react-native';
import {H1, Content, Item, Input, Container, Button, Tabs, Tab, TabHeading, Icon, Root, Toast, Spinner} from 'native-base'
import axios from 'axios'
import Reactotron from 'reactotron-react-native'

export default class Signup extends Component<Props,State>{
    constructor(props){
        super(props)
        this.state={
            showToast:false,
            loadingEmployeeSignup:false,
            loadingOrgSignup:false,

            name:"",
            username:"",
            email:"",
            password:"",
            confirmPassword:"",

            orgName:"",
            orgUserName:"",
            orgEmail:"",
            orgPassword:"",
            orgConfirmPassword:""
        }
    }

    signupEmployee=()=>{
        if(this.state.name && this.state.username && this.state.email && this.state.password && this.state.confirmPassword){
        if(this.state.password===this.state.confirmPassword){
        this.setState({loadingEmployeeSignup:true})
        let user={
            name:this.state.name,
            username:this.state.username,
            email:this.state.email,
            password:this.state.password,
            code:0
        }

        axios.post('http://192.168.43.22:3000/userSignup',user)
        .then((res)=>{
            this.setState({loadingEmployeeSignup:false})
            if(res.data.code==0){
                Toast.show({
                    text: res.data.message,
                    buttonText: "Okay",
                    type: "success"
                })
                this.props.navigation.navigate('Login')
            }
            else{
                this.setState({loadingEmployeeSignup:false})
                Toast.show({
                    text: res.data.message,
                    buttonText: "Okay",
                    type: "danger"
                })
            }
        }).catch((err)=>{
            this.setState({loadingEmployeeSignup:false})
            Reactotron.log("bhai ye ho hi nahi raha hai",err)
        })
        }
        else{
            Toast.show({
                text: "Password and Confirm Password should be same",
                buttonText: "Okay",
                type: "warning"
            })
        }
        }
        else{
            Toast.show({
                text: "Please fill all fields",
                buttonText: "Okay",
                type: "warning"
            })
        }
    }

    signupOrg=()=>{
        if(this.state.orgName && this.state.orgUserName && this.state.orgEmail && this.state.orgPassword && this.state.orgPassword){
        if(this.state.orgPassword===this.state.orgConfirmPassword){
            this.setState({loadingOrgSignup:true})
        let org={
            orgName:this.state.orgName,
            orgUserName:this.state.orgUserName,
            orgEmail:this.state.orgEmail,
            orgPassword:this.state.orgPassword,
            orgCode:1
        }

        axios.post('https://enigmatic-reaches-41194.herokuapp.com/orgSignup',org,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((res)=>{
            this.setState({loadingOrgSignup:false})
            if(res.data.code==0){
                Toast.show({
                    text: res.data.message,
                    buttonText: "Okay",
                    type: "success"
                })
                this.props.navigation.navigate('Login')
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
                text: "Password and Confirm Password should be same",
                buttonText: "Okay",
                type: "warning"
            })
        }
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
            <ScrollView>
            <View style={styles.center}>
                <Text style={styles.signupHead}>Signup</Text>

                <Container>

                <Tabs initialPage={0}>
                    <Tab heading={ <TabHeading style={{backgroundColor:'#ff9100'}}><Icon name="work" type="MaterialIcons" style={{color:'white'}} /><Text style={{fontWeight:'bold',marginLeft:10,color:'white'}}>Employee</Text></TabHeading>}>
                        <View style={styles.tab}>
                            <Item style={styles.input} rounded>
                                <Input placeholder='Employee Name' onChangeText={(name) => this.setState({name})} value={this.state.name} />
                            </Item>

                            <Item style={styles.input} rounded>
                                <Input placeholder='Employee Username' onChangeText={(username) => this.setState({username})} value={this.state.username} />
                            </Item>

                            <Item style={styles.input} rounded>
                                <Input placeholder='Employee Email' onChangeText={(email) => this.setState({email})} value={this.state.email} />
                            </Item>

                            <Item style={styles.input} rounded>
                                <Input secureTextEntry={true} placeholder='Password' onChangeText={(password) => this.setState({password})} value={this.state.password} />
                            </Item>

                            <Item style={styles.input} rounded>
                                <Input secureTextEntry={true} placeholder='Confirm Password' onChangeText={(confirmPassword) => this.setState({confirmPassword})} value={this.state.confirmPassword} />
                            </Item>

                            {!this.state.loadingEmployeeSignup && <Button onPress={this.signupEmployee} style={styles.submitBtn}><Text style={{color:'white'}}>Submit</Text></Button>}
                            {this.state.loadingEmployeeSignup && <Button style={styles.loadingBtn}><Text style={{color:'#ff9100'}}>Submitting </Text><Spinner size="small" color='#ff9100' /></Button>}
                        </View>
                    </Tab>
                    <Tab heading={ <TabHeading style={{backgroundColor:'#ff9100'}}><Icon name="business" type="MaterialIcons" style={{color:'white'}} /><Text style={{fontWeight:'bold',marginLeft:10,color:'white'}}>Organisation</Text></TabHeading>}>
                        <View style={styles.tab}>
                            <Item style={styles.input} rounded>
                                <Input placeholder='Organisation Name' onChangeText={(orgName) => this.setState({orgName})} value={this.state.orgName} />
                            </Item>

                            <Item style={styles.input} rounded>
                                <Input placeholder='Organisation Username' onChangeText={(orgUserName) => this.setState({orgUserName})} value={this.state.orgUserName} />
                            </Item>

                            <Item style={styles.input} rounded>
                                <Input placeholder='Organisation Email' onChangeText={(orgEmail) => this.setState({orgEmail})} value={this.state.orgEmail} />
                            </Item>

                            <Item style={styles.input} rounded>
                                <Input secureTextEntry={true} placeholder='Password' onChangeText={(orgPassword) => this.setState({orgPassword})} value={this.state.orgPassword} />
                            </Item>

                            <Item style={styles.input} rounded>
                                <Input secureTextEntry={true} placeholder='Confirm Password' onChangeText={(orgConfirmPassword) => this.setState({orgConfirmPassword})} value={this.state.orgConfirmPassword} />
                            </Item>

                            {!this.state.loadingOrgSignup && <Button onPress={this.signupOrg} style={styles.submitBtn}><Text style={{color:'white'}}>Submit</Text></Button>}
                            {this.state.loadingOrgSignup && <Button style={styles.loadingBtn}><Text style={{color:'#ff9100'}}>Submitting </Text><Spinner size="small" color='#ff9100' /></Button>}
                        </View>
                    </Tab>
                </Tabs>
                </Container>
            </View>
            </ScrollView>
            </Root>
        )
    }
}

let styles=StyleSheet.create({
    signupHead:{
        color:'#ff9100',
        fontSize:50,
        marginVertical:20,
        fontWeight:'bold'
    },
    input:{
        width:'100%',
        paddingHorizontal:10,
        marginBottom:20
    },
    submitBtn:{
        marginTop:20,
        width:'100%',
        backgroundColor:'#ff9100',
        borderRadius:50,
        alignSelf:'center',
        justifyContent:'center'
    },
    loadingBtn:{
        marginTop:20,
        width:'100%',
        backgroundColor:'white',
        borderRadius:50,
        alignSelf:'center',
        justifyContent:'center'
    },
    center:{
        alignItems:'center',
        justifyContent:'center',
        flex: 1,
        backgroundColor:'white'
    },
    tab:{
        alignItems:'center',
        padding:30,
    }
})

interface Props {
    navigation:any
}
interface State {
    showToast:false
    loadingEmployeeSignup:boolean
    loadingOrgSignup:boolean

    name:string
    username:string
    email:string
    password:string
    confirmPassword:string

    orgName:string
    orgUserName:string
    orgEmail:string
    orgPassword:string
    orgConfirmPassword:string
}