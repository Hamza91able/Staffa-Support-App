import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Button, Text, View } from 'native-base';
import firebase from 'react-native-firebase';

export default class Main extends React.Component {

    // componentDidMount() {
    //     firebase.auth().signOut().then(function () {
    //         // Sign-out successful.
    //     }).catch(function (error) {
    //         // An error happened.
    //     });
    // }

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
