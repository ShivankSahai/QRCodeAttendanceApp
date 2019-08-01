import React,{Component} from 'react'
import { View,Text,StyleSheet } from 'react-native';
import {H1, Content, Item, Input, Container, Button, Spinner, Toast, Root, Icon} from 'native-base'
import axios from 'axios'
import Reactotron from 'reactotron-react-native'

export default class UserOrgs extends Component<Props,State>{
    constructor(props){
        super(props)
        this.state={
            events:[]    
        }
    }

    // componentDidMount=()=>{
    //     let userId='5d335d09e09bdc0017dd4c52'
    //     let token=''
    //     axios.post('https://enigmatic-reaches-41194.herokuapp.com/userEvents',{userId},{
    //         headers:{
    //             'Content-Type':'application/json',
    //             'Authorization':`Bearer ${token}`
    //         }
    //     }).then((res)=>{
    //         Reactotron.log("Done",res)
    //     }).catch((err)=>{
    //         Reactotron.log("Error",err)
    //     })
    // }

    render(){
        return(
            <View>
                
            </View>
        )
    }
}

let styles=StyleSheet.create({
    
})

interface Props {}
interface State {
    events:any
}