import React, { Component } from 'react';
import {
    Platform, StyleSheet, TouchableOpacity, View, Text
} from 'react-native';

export default class App extends Component {

    get

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    onPress={()=>this.}
                >
                    <Text>
                        点击
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
