import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import PinchZoomView from './PinchZoomView';

export default class EditingScreen extends Component {
    render = () => {
        let imgUri = this.props.navigation.getParam("URI")
        return (
            <PinchZoomView>
                <View style={styles.imageWrapper}>
                    <Image source={{ uri: imgUri}} style={styles.image} />
                </View>
            </PinchZoomView>
        )
    }
}

const styles = StyleSheet.create({
    imageWrapper:{
        flex:1
    },
    image:{
        flex:1,
        height:null,
        width:null,
        resizeMode:'contain'
    }
})