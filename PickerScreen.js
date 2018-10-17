import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ImagePicker, Permissions } from 'expo';
import ImageCropper from 'react-native-image-crop-picker'

export default class PickerScreen extends React.Component {
    _checkMultiPermissions = async () => {
        const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL,Permissions.CAMERA);
        if(status !== 'granted'){
            this._askCameraPermission()
        }else{
            this._renderImagePicker()
        }
    }
    _askCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL,Permissions.CAMERA);
        if (status !== 'granted') {
            alert("permission not granted")
        }else{
            alert("permission granted")
        }
    }
    _renderImagePicker = async () => {
        
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect:[1,1],
            quality:1,
        });
        console.log(result)
        this.props.navigation.navigate("edit",{URI: result.uri})
    }

    
    render = () => {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {this._checkMultiPermissions()}}>
                    <View style={styles.imageBtn}>
                        <Text>select Image</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageBtn:{
    padding:10,
    backgroundColor:'#0003'
  }
});