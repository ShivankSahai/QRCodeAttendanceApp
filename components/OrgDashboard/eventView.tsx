import React,{Component} from 'react'
import { View,Text,StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import {H1, Content, Item, Input, Container, Button, Spinner, Toast, Root, Icon, Card, CardItem, Body, DatePicker} from 'native-base'
import axios from 'axios'
import Reactotron from 'reactotron-react-native'

export default class EventView extends Component<Props,State>{
    constructor(props){
        super(props)
        this.state={
            events:[
                {
                    name:'Learn to Compete 2.0',
                    orgId:'556677',
                    orgName:'Association for Compiuting Machinery',
                    status:-1
                },
                {
                    name:'Learn to Cogdfgdfgdfgdfgmete 2.0',
                    orgId:'556677',
                    orgName:'Association for Compiuting Machinerydsgsdgfgfdgdfgdfgd',
                    status:0
                },
                {
                    name:'Learn to Cogdfgdfgdfgdfgmete 2.0',
                    orgId:'556677',
                    orgName:'Association for Compiuting Machinerydsgsdgfgfdgdfgdfgd',
                    status:1
                },
                {
                    name:'Learn to Cogdfgdfgdfgdfgmete 2.0',
                    orgId:'556677',
                    orgName:'Association for Compiuting Machinerydsgsdgfgfdgdfgdfgd',
                    status:-1
                },
                {
                    name:'Learn to Cogdfgdfgdfgdfgmete 2.0',
                    orgId:'556677',
                    orgName:'Association for Compiuting Machinerydsgsdgfgfdgdfgdfgd',
                    status:-1
                },
                {
                    name:'Learn to Cogdfgdfgdfgdfgmete 2.0',
                    orgId:'556677',
                    orgName:'Association for Compiuting Machinerydsgsdgfgfdgdfgdfgd',
                    status:-1
                },
                {
                    name:'Learn to Cogdfgdfgdfgdfgmete 2.0',
                    orgId:'556677',
                    orgName:'Association for Compiuting Machinerydsgsdgfgfdgdfgdfgd',
                    status:-1
                },
                {
                    name:'Learn to Cogdfgdfgdfgdfgmete 2.0',
                    orgId:'556677',
                    orgName:'Association for Compiuting Machinerydsgsdgfgfdgdfgdfgd',
                    status:-1
                },
                {
                    name:'Learn to Cogdfgdfgdfgdfgmete 2.0',
                    orgId:'556677',
                    orgName:'Association for Compiuting Machinerydsgsdgfgfdgdfgdfgd',
                    status:-1
                },
            ]    
        }
    }

    render(){
        return(
            <View style={{padding:40}}>
                <View style={{alignItems:'center'}}>
                <Text style={{fontSize:28,fontWeight:'bold',color:'#ff9100'}}>Learn to Compete</Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>24/08/2019</Text>

                <Button style={{marginTop:20,width:'100%',backgroundColor:'#ff9100',alignItems:'center',justifyContent:'center',paddingVertical:10}}><Text style={{color:'white',fontSize:18}}>Scan</Text></Button>

                <View>
                    <Text style={{fontSize:24,fontWeight:'bold',marginTop:40,marginBottom:20}}>Attendance</Text>
                </View>
                </View>

                <View style={{height:'65%'}}>

                <ScrollView>
                {
                    this.state.events && this.state.events.length>0 && this.state.events.map((val,ind)=>(
                        <TouchableWithoutFeedback>
                            <Card>
                                <CardItem>
                                <Body style={{flexDirection:'row',justifyContent:'center'}}>
                                    <View style={{width:'80%'}}>
                                        <Text style={{fontSize:22,color:'black'}}>{val.name}</Text>
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
            </View>
        )
    }
}

interface Props {}
interface State {
    events:any
}