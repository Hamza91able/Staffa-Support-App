import React from 'react'
import { StyleSheet, BackHandler } from 'react-native'
import firebase from 'react-native-firebase';
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, View, Content, Form, Item, Label, Input, Text,
    DatePicker, Picker, CheckBox, Card, CardItem, Root, Textarea, List, ListItem
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class DBS extends React.Component {

    state = {
        verficationText: 'Do you have a current valid DBS certificate that is no more than 2 years old?',
        notificationOn: true,
        notificationOff: false,
    }

    handleNotification = () => {
        this.setState({
            notificationOn: !this.state.notificationOn,
            notificationOff: !this.state.notificationOff,
        })
    }


    render() {
        return (
            <Root>
                <View style={{ backgroundColor: '#FFA500', flex: 1, alignItems: 'center' }}>
                    <Grid>
                        <Row size={5}>

                        </Row>
                        <Row size={25} style={{ width: '90%' }}>
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
                        <Row size={20}>
                            <Content>
                                <Grid>
                                    <Col>
                                        <ListItem onPress={this.handleNotification}>
                                            <Left>
                                                <Text>Yes</Text>
                                            </Left>
                                            <Right>
                                                <CheckBox onPress={this.handleNotification} checked={this.state.notificationOn} />
                                            </Right>
                                        </ListItem>
                                    </Col>
                                    <Col>
                                        <ListItem onPress={this.handleNotification}>
                                            <Left>
                                                <Text>No</Text>
                                            </Left>
                                            <Right>
                                                <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                            </Right>
                                        </ListItem>
                                    </Col>
                                </Grid>
                            </Content>
                        </Row>
                        <Row size={35}>
                            {this.state.notificationOn ?
                                <View style={{ alignItems: 'center', flex: 1 }}>
                                    <Body>
                                        <Button
                                            style={{ width: 250, justifyContent: 'center', backgroundColor: 'black' }}
                                            rounded><Text> Scan DBS Certificate </Text>
                                        </Button>
                                        <Button
                                            style={{ width: 250, justifyContent: 'center', backgroundColor: 'black', marginTop: '1%' }}
                                            rounded><Text> Upload DBS Certificate </Text>
                                        </Button>
                                    </Body>
                                </View> :
                                <View style={{ alignItems: 'center', flex: 1 }}>
                                    <Text>Please obtain an up to date DBS certificate in order to complete registration</Text>
                                </View>
                            }
                        </Row>
                        <Row size={15}>
                            <View style={{ alignItems: 'center', flex: 1, marginTop: '5%' }}>
                                <Body>
                                    <Button
                                        onPress={() => this.props.navigation.navigate('Qualifications')}
                                        style={{ width: 180, justifyContent: 'center', backgroundColor: 'black' }}
                                        rounded><Text> NEXT </Text>
                                    </Button>
                                </Body>
                            </View>
                        </Row>
                    </Grid>
                </View>


            </Root >

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
