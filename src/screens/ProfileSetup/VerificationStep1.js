import React from 'react'
import { StyleSheet, BackHandler } from 'react-native'
import firebase from 'react-native-firebase';
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, View, Content, Form, Item, Label, Input, Text,
    DatePicker, Picker, CheckBox, Card, CardItem, Root, Textarea, List, ListItem
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class VerificationStep1 extends React.Component {

    state = {
        verficationText: 'We need to verify your identity using your government issued identification documents',
    }

    render() {
        return (
            <Root>
                <View style={{ backgroundColor: '#FFA500', flex: 1, alignItems: 'center' }}>
                    <Grid>
                        <Row size={5}>

                        </Row>
                        <Row size={25} style={{ backgroundColor: 'white', width: '90%' }}>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Label style={{
                                    paddingLeft: 30, paddingRight: 30,
                                    textAlign: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }} >{this.state.verficationText}</Label>
                            </View>
                        </Row>
                        <Row size={10}>

                        </Row>
                        <Row size={60}>
                            <View style={{ alignItems: 'center', flex: 1 }}>
                                <Body>
                                    <Button
                                        style={{ width: 180, justifyContent: 'center', backgroundColor: 'black' }}
                                        rounded><Text> Begin ID Proccess </Text>
                                    </Button>
                                </Body>
                            </View>
                        </Row>
                    </Grid>
                </View>


            </Root>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    }
})
