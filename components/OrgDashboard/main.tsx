import React,{Component} from 'react'
import { View,Text,StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import {H1, Content, Item, Input, Container, Button, Spinner, Toast, Root, Icon, Card, CardItem, Body} from 'native-base'
import axios from 'axios'
import Reactotron from 'reactotron-react-native'

export default class OrgDashboard extends Component<Props,State>{
    constructor(props){
        super(props)
        this.state={
            events:[
                {
                    eventId:'5d33723b27f448001781b74b',
                    name:'Learn to Compete'
                },
                {
                    eventId:'5d33723b27f448001781b74b',
                    name:'Learn to Compete'
                },
                {
                    eventId:'5d33723b27f448001781b74b',
                    name:'Learn to Compete'
                },
                {
                    eventId:'5d33723b27f448001781b74b',
                    name:'Learn to Compete'
                },
                {
                    eventId:'5d33723b27f448001781b74b',
                    name:'Learn to Compete'
                },
                {
                    eventId:'5d33723b27f448001781b74b',
                    name:'Learn to Compete'
                },
                {
                    eventId:'5d33723b27f448001781b74b',
                    name:'Learn to Compete'
                },
                {
                    eventId:'5d33723b27f448001781b74b',
                    name:'Learn to Compete'
                },
                {
                    eventId:'5d33723b27f448001781b74b',
                    name:'Learn to Compete'
                },
                {
                    eventId:'5d33723b27f448001781b74b',
                    name:'Learn to Compete'
                },
                {
                    eventId:'5d33723b27f448001781b74b',
                    name:'Learn to Compete'
                }
            ]
        }
    }

    // componentDidMount=()=>{
    //     let orgId='5d335d09e09bdc0017dd4c52'
    //     let token=''
    //     axios.post('https://enigmatic-reaches-41194.herokuapp.com/orgEvents',{orgId},{
    //         headers:{
    //             'Content-Type':'application/json',
    //             'Authorization':`Bearer ${token}`
    //         }
    //     }).then((res)=>{
    //         Reactotron.log("Done",res)
    //         this.setState({
    //             events:res.data.events
    //         })
    //     }).catch((err)=>{
    //         Reactotron.log("Error",err)
    //     })
    // }

    takeAttendance=(eventId)=>{

    }

    addEvent=()=>{

    }

    render(){
        return(
            <View style={{alignItems:'center',padding:40}}>
                <Text style={styles.welcome}>Welcome,</Text>
                <Text style={styles.name}>ACM-VIT</Text>

                <View style={styles.buttons3}>
                    <Button onPress={this.addEvent} style={styles.btn3}><Text style={{color:'black',fontWeight:'bold'}}>Add event</Text></Button>
                    <Button style={styles.btn3}><Text style={{color:'black',fontWeight:'bold'}}>Logout</Text></Button>
                </View>

                <View style={{height:'70%',marginTop:50,width:'100%'}}>
                <Text style={styles.heading}>Events</Text>
                <ScrollView>
                {
                    this.state.events && this.state.events.length>0 && this.state.events.map((val,ind)=>(
                        <TouchableWithoutFeedback onPress={()=>{this.takeAttendance(val.eventId)}}>
                            <Card>
                                <CardItem>
                                <Body style={{flexDirection:'row',justifyContent:'center'}}>
                                    <View style={{width:'100%'}}>
                                        <Text style={{fontSize:22,color:'black'}}>{val.name}</Text>
                                    </View>
                                </Body>
                                </CardItem>
                            </Card>
                        </TouchableWithoutFeedback>
                    ))
                }
                </ScrollView>
            </View>
            </View>
        )
    }
}

let styles=StyleSheet.create({
    welcome:{
        fontSize:24
    },
    name:{
        fontSize:32,
        color:'#ff9100'
    },
    buttons3:{
        flexDirection:'row',
        marginTop:30
    },
    btn3:{
        borderColor:'#ff9100',
        borderWidth:2,
        backgroundColor:'white',
        padding:20,
        marginHorizontal:20
    },
    heading:{
        fontSize:36,
        fontWeight:'bold',
        color:'black',
        alignSelf:'center',
        marginBottom:20
    }
})

interface Props {}
interface State {
    events:any
}