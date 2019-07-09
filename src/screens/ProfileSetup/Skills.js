import React from 'react'
import { StyleSheet, BackHandler } from 'react-native'
import firebase from 'react-native-firebase';
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, View, Content, Form, Item, Label, Input, Text,
    DatePicker, Picker, CheckBox, Card, CardItem, Root, Textarea, List, ListItem
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Skills extends React.Component {

    state = {
        informationSharingText: 'Tick the boxes for the work you are qualified to perform',
        noteText: 'NOTE: Your qualifications must match your selections'
    }



    render() {
        // alert(this.state.anonomalisedCheck)
        return (
            <Root>
                <View style={{ backgroundColor: '#FFA500', flex: 1, alignItems: 'center' }}>
                    <Grid>
                        <Row size={5}>

                        </Row>
                        <Row size={8} style={{ width: '90%' }}>
                            <Content>
                                <Label style={{ paddingLeft: 30, paddingRight: 30 }} >{this.state.informationSharingText}</Label>
                            </Content>
                        </Row>
                        <Row size={8} style={{ width: '90%' }}>
                            <Content>
                                <Label style={{ paddingLeft: 30, paddingRight: 30 }} >{this.state.noteText}</Label>
                            </Content>
                        </Row>
                        <Row size={2}>

                        </Row>
                        <Row size={50}>
                            <Content>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>General Nursing - Accept any work</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOn} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Paediatrics</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Psychiatric</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Palliative</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Bariatric</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Urology</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Theatre/Recovery</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Gynaecology</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Medical</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Surgical</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Emergency A&E</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Maternity</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Orthopaedics</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Geriatric</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Oncology</Text>
                                    </Left>
                                    <Right>
                                        <CheckBox onPress={this.handleNotification} checked={this.state.notificationOff} />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={this.handleNotification}>
                                    <Left>
                                        <Text>Burns</Text>
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
