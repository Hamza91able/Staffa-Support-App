import React from 'react'
import { StyleSheet, BackHandler } from 'react-native'
import firebase from 'react-native-firebase';
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, View, Content, Form, Item, Label, Input, Text,
    DatePicker, Picker, CheckBox, Card, CardItem, Root, Textarea, List, ListItem
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Notifications extends React.Component {

    state = {
        informationSharingText: 'We sometimes share data with our partners for the purpose of offering unique and special deals just to you. You can opt-in and out of these at will. We never share your details without your express consent and permission. You can change these settings at any time inside the app ',
        notificationOn: true,
        notificationOff: false,
    }

    handleNotification = () => {
        this.setState({
            notificationOn: !this.state.notificationOn,
            notificationOff: !this.state.notificationOff
        })
    }

    render() {
        // alert(this.state.anonomalisedCheck)
        return (
            <Root>
                <View style={{ backgroundColor: '#FFA500', flex: 1, alignItems: 'center' }}>
                    <Grid>
                        <Row size={5}>

                        </Row>
                        <Row size={25} style={{ backgroundColor: 'white', width: '90%' }}>
                            <Content>
                                <Label style={{ paddingLeft: 30, paddingRight: 30 }} >{this.state.informationSharingText}</Label>
                            </Content>
                        </Row>
                        <Row size={5}>

                        </Row>
                        <Row size={45}>
                            <Content>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Notifications On</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOn} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Notifications Off</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                            </Content>
                        </Row>
                        <Row size={12}>
                            <View style={{ alignItems: 'center', flex: 1 }}>
                                <Body>
                                    <Button
                                        onPress={() => this.props.navigation.navigate('Verification Step 1')}
                                        style={{ width: 180, justifyContent: 'center', backgroundColor: 'black' }}
                                        rounded><Text> Next </Text>
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
