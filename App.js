import React from 'react'

import { createStackNavigator } from 'react-navigation'
import EditingScreen from './EditingScreen';
import PickerScreen from './PickerScreen';


const StackNavigator = createStackNavigator({
    picker:{
        screen:PickerScreen
    },
    edit:{
        screen:EditingScreen,
        navigationOptions:{
            title:'Select Crop area'
        }
    }
});

export default class App extends React.Component{
    render = () => {
        return <StackNavigator />
    }
}   
