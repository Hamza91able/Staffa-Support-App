import React from 'react'
import { StyleSheet, BackHandler } from 'react-native'
import firebase from 'react-native-firebase';
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, View, Content, Form, Item, Label, Input, Text,
    DatePicker, Picker, CheckBox, Card, CardItem, Root, Textarea, List, ListItem
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Certificates extends React.Component {

    state = {
        informationSharingText: 'Please tick to confirm that you have the following up to date certifications',
    }



    render() {
        // alert(this.state.anonomalisedCheck)
        return (
            <Root>
                <View style={{ backgroundColor: '#FFA500', flex: 1, alignItems: 'center' }}>
                    <Grid>
                        <Row size={5}>

                        </Row>
                        <Row size={5} style={{ width: '90%' }}>
                            <Content>
                                <Label style={{ paddingLeft: 30, paddingRight: 30 }} >{this.state.informationSharingText}</Label>
                            </Content>
                        </Row>
                        <Row size={2}>

                        </Row>
                        <Row size={50}>
                            <Content>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Moving & Handling</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOn} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Healht & Safety</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Infection Control</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Medication Admission</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Safeguarding of vulnerable adults</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Life Support</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Life Aid</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>First Aid</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Equality & Diversity</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Fire Safety</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Information Governance</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Preventing Radicalisation</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Food Hygiene</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                            </Content>
                        </Row>
                        <Row size={5} style={{ width: '90%' }}>
                            <Content>
                                <Label style={{ paddingLeft: 30, paddingRight: 30, color: '#FF6347' }} >Click on the title to upload of scan your certificate</Label>
                            </Content>
                        </Row>
                        <Row size={8}>
                            <View style={{ alignItems: 'center', flex: 1, marginTop: '3%' }}>
                                <Body>
                                    <Button
                                        onPress={() => this.props.navigation.navigate('')}
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
