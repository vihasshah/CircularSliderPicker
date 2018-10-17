import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-picker'

const options = {
    title:'Select Image',
    customButtons:[
        {
            name:'camera',
            title:'Take a new picture'
        },
        {
            name:'library',
            title:'Select from existing'
        }
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
}

export default class App extends React.Component {
    renderImagePicker = () => {
        ImagePicker.showImagePicker(options,(response) => {
            console.log(response)
        })
    }
    render = () => {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.renderImagePicker}>
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
