import React,{Component} from 'react'
import { View,Text,StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Icon } from 'native-base';

export default class EventScanner extends Component<Props,State>{
    constructor(props){
        super(props)
        this.state={
            barcodes:[]
        }
    }

    barcodeRecognized = ({ barcodes })=>{
        let newBarcodes=[]
        let allData=this.state.barcodes.map(v=>v.data)
        let flag=0

        barcodes.map((val,ind)=>{
            if(!(allData.includes(val.data))){
                newBarcodes.push(val)
                flag=1
            }
        })

        if(flag==1){
            console.warn("updated")
            this.setState({
                barcodes:newBarcodes
            })
        }
    }

    renderBarcodes = () => (
        <View>
          {this.state.barcodes.map(this.renderBarcode)}
        </View>
    )

    renderBarcode = ({ bounds, data }) => (
        <React.Fragment key={data + bounds.origin.x}>
          <View
            style={{
              borderWidth: 2,
              borderRadius: 10,
              borderColor: '#ff9100',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: 30,
              alignItems:'center',
              flexDirection:'row'
            }}
          >
            <Text style={{
              color: 'black',
              backgroundColor: 'transparent',
              fontWeight:'bold',
              fontSize:18
            }}>ShreySindher</Text><Icon type="MaterialIcons" name="check-circle" style={{color:'green'}} />
          </View>
        </React.Fragment>
    )
    
    render(){
        return(
            <RNCamera
                ref={ref => {
                    this.camera = ref;
                    }}
                    style={{
                    flex: 1,
                    width: '100%',
                    }}
                    onGoogleVisionBarcodesDetected={this.barcodeRecognized}
                >
                {this.renderBarcodes()}
            </RNCamera>
        )
    }
}

interface Props {}
interface State {
    barcodes:any
}