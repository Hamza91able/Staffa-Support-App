import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Button, Text, View } from 'native-base';
import firebase from 'react-native-firebase';

export default class Main extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <Text>TEXT</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
