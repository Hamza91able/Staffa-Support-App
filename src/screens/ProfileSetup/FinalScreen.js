import React from 'react'
import { StyleSheet } from 'react-native'
import firebase from 'react-native-firebase';
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, View, Content, Form, Item, Label, Input, Text,
    DatePicker, Picker, Radio, Card, CardItem, Root
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class FinalScreen extends React.Component {

    render() {
        return (
            <Grid style={{ backgroundColor: '#FFA500', flex: 1 }}>
                <Row size={80}>
                    <View style={styles.container}>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>
                            Success
                    </Text>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>
                            You can now post your profile and apply for shifts.
                    </Text>
                    </View>
                </Row>
                <Row size={20}>
                    <View style={{ flex: 1 }}>
                        <Body>
                            <Button
                                onPress={() => this.props.navigation.navigate('Main')}
                                style={{ width: 180, justifyContent: 'center', backgroundColor: 'black' }}
                                rounded><Text> Next </Text>
                            </Button>
                        </Body>
                    </View>
                </Row>
            </Grid>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50
    },
})
