import React, { Component } from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import PinchZoomView from './PinchZoomView';

export default class EditingScreen extends Component {
    render = () => {
        let imgUri = this.props.navigation.getParam("URI")
        return (
            <View style={styles.container}>

                <View style={styles.wrapper}>
                    <PinchZoomView>
                        <View style={styles.imageWrapper}>
                            <Image source={{ uri: imgUri}} style={styles.image} />
                        </View>
                    </PinchZoomView>
                </View>
                <View style={styles.selectionView} pointerEvents="none"/>
                {/* <PinchZoomView> */}
                   
                {/* </PinchZoomView> */}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    wrapper:{
        ...StyleSheet.absoluteFillObject,
        flex:1,
    },
    selectionView:{
        width:Dimensions.get('window').width / 2,
        height:Dimensions.get('window').width / 2,
        borderRadius:(Dimensions.get('window').width / 2) / 2,
        backgroundColor:"#fff6",
        alignSelf:'center'
    },
    imageWrapper:{
        flex:1,
    },
    image:{
        flex:1,
        height:null,
        width:null,
        resizeMode:'contain'
    }
})