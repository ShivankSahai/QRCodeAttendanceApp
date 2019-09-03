import React,{Component} from 'react'
import { View,Text,StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import {H1, Content, Item, Input, Container, Button, Spinner, Toast, Root, Icon, Card, CardItem, Body} from 'native-base'
import axios from 'axios'
import Reactotron from 'reactotron-react-native'

export default class UserEvents extends Component<Props,State>{
    constructor(props){
        super(props)
        this.state={
            userId:"5d6388a2397f240017d6285c",
            events:[]    
        }
    }

    componentDidMount=()=>{
        let token=''
        axios.post('https://enigmatic-reaches-41194.herokuapp.com/userEvents',{userId:this.state.userId},{
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            }
        }).then((res)=>{
            Reactotron.log("Done",res)
            this.setState({
                events:res.data.events
            })
        }).catch((err)=>{
            Reactotron.log("Error",err)
        })
    }

    render(){
        return(
            <View style={{height:'70%',marginTop:50,width:'100%'}}>
                <Text style={styles.heading}>Events</Text>
                <ScrollView>
                {
                    this.state.events && this.state.events.length>0 && this.state.events.map((val,ind)=>(
                        <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('EventQRCode',val)}}>
                            <Card>
                                <CardItem>
                                <Body style={{flexDirection:'row',justifyContent:'center'}}>
                                    <View style={{width:'80%'}}>
                                        <Text style={{fontSize:22,color:'black'}}>{val.name}</Text>
                                        <Text>{val.orgName}</Text>
                                    </View>
                                    <View style={{width:'20%',alignItems:'center'}}>
                                        {val.status===0 && <Text style={{fontSize:36,color:'green',fontWeight:'bold'}}>P</Text>}
                                        {val.status===1 && <Text style={{fontSize:36,color:'red',fontWeight:'bold'}}>A</Text>}
                                    </View>
                                </Body>
                                </CardItem>
                            </Card>
                        </TouchableWithoutFeedback>
                    ))
                }
                </ScrollView>
            </View>
        )
    }
}

let styles=StyleSheet.create({
    heading:{
        fontSize:36,
        fontWeight:'bold',
        color:'black',
        alignSelf:'center',
        marginBottom:20
    }
})

interface Props {
    navigation:any
}
interface State {
    userId:string
    events:any
}