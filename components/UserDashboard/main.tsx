import React,{Component} from 'react'
import { View,Text,StyleSheet } from 'react-native';
import {H1, Content, Item, Input, Container, Button, Spinner, Toast, Root, Icon} from 'native-base'
import axios from 'axios'
import Reactotron from 'reactotron-react-native'
import UserEvents from './userEvents'
import UserOrgs from './userOrgs'

export default class UserDashboard extends Component<Props,State>{
    constructor(props){
        super(props)
        this.state={
            eventsButtonActive:false,
            orgsButtonActive:true
        }
    }

    toggleBtn=()=>{
        this.setState({
            eventsButtonActive:!this.state.eventsButtonActive,
            orgsButtonActive:!this.state.orgsButtonActive
        })
    }

    render(){
        return(
            <View style={{alignItems:'center',padding:40}}>
                <Text style={styles.welcome}>Welcome,</Text>
                <Text style={styles.name}>Shivank Sahai</Text>

                <View style={styles.buttons3}>
                    {this.state.eventsButtonActive && <Button onPress={this.toggleBtn} style={styles.btn3}><Text style={{color:'black',fontWeight:'bold'}}>View Events</Text></Button>}
                    {this.state.orgsButtonActive && <Button onPress={this.toggleBtn} style={styles.btn3}><Text style={{color:'black',fontWeight:'bold'}}>View Organisations</Text></Button>}
                    <Button style={styles.btn3}><Text style={{color:'black',fontWeight:'bold'}}>Logout</Text></Button>
                </View>

                {this.state.eventsButtonActive && <UserEvents />}
                {this.state.orgsButtonActive && <UserOrgs />}
            </View>
        )
    }
}

let styles=StyleSheet.create({
    welcome:{
        fontSize:24
    },name:{
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
    }
})

interface Props {}
interface State {
    eventsButtonActive:boolean
    orgsButtonActive:boolean
}