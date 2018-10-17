import React, { Component } from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import PinchZoomView from './PinchZoomView';

export default class EditingScreen extends Component {
    render = () => {
        let imgUri = this.props.navigation.getParam("URI")
        return (
            <View style={styles.container}>
                <PinchZoomView>
                    <View style={styles.imageWrapper}>
                        <Image source={{ uri: imgUri}} style={styles.image} />
                    </View>
                </PinchZoomView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        borderWidth:1,borderColor:'#000'
    },
    imageWrapper:{
        flex:1,
        justifyContent:'center',
        borderWidth:1,borderColor:'#000'
    },
    image:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').width,
        borderRadius:Dimensions.get('window').width / 2,
        backgroundColor:'#000',
        overflow:'hidden',
        resizeMode:'stretch'
    }
})