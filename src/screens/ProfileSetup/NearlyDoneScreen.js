import React from 'react'
import { StyleSheet, BackHandler } from 'react-native'
import firebase from 'react-native-firebase';
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, View, Content, Form, Item, Label, Input, Text,
    DatePicker, Picker, Radio, Card, CardItem, Root, Textarea
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class NearlyDoneScreen extends React.Component {
    state = {
        shortBio: '',
        selected: "key1"
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {
        return (
            <Root>
                <View style={{ backgroundColor: '#FFA500', flex: 1, alignItems: 'center' }}>
                    <Grid>
                        <Row size={2}>

                        </Row>
                        <Row size={45}>
                            <Grid>
                                <Row>
                                    <View style={{ alignItems: 'center', flex: 1 }}>
                                        <Text>Upload a profile photo</Text>
                                        <View style={{ alignItems: 'center', flex: 1, marginTop: '7%' }}>
                                            <Body>
                                                <Button
                                                    style={{ width: 180, justifyContent: 'center', backgroundColor: 'black' }}
                                                    rounded><Text> Upload </Text>
                                                </Button>
                                            </Body>
                                        </View>
                                    </View>
                                </Row>
                                <Row>
                                    <Content>
                                        <Item style={{ paddingLeft: 30, paddingRight: 30 }} inlineLabel>
                                            <Input
                                                style={{ textAlign: 'center', backgroundColor: 'white' }}
                                                placeholder={'Short Bio'}
                                            />
                                        </Item>
                                    </Content>
                                </Row>
                            </Grid>

                        </Row>
                        <Row size={2}>

                        </Row>
                        <Row size={20} style={{ width: '90%' }}>
                            <Content>
                                <View style={{ alignItems: 'center', flex: 1 }}>
                                    <Text>Distance prepared to travel</Text>
                                    <View style={{ alignItems: 'center', flex: 1 }}>
                                        <Picker
                                            note
                                            mode="dropdown"
                                            style={{ width: 200, fontSize: 30, color: 'black' }}
                                            selectedValue={this.state.selected}
                                            onValueChange={this.onValueChange.bind(this)}
                                        >
                                            <Picker.Item label="10 miles" value="key0" />
                                            <Picker.Item label="20 miles" value="key1" />
                                            <Picker.Item label="30 miles" value="key2" />
                                        </Picker>
                                    </View>
                                    <Text style={{ marginTop: '2%' }}>You can change this any time in the settings</Text>
                                </View>
                            </Content>
                        </Row>
                        <Row size={15}>

                        </Row>
                        <Row size={12}>
                            <View style={{ alignItems: 'center', flex: 1 }}>
                                <Body>
                                    <Button
                                        onPress={() => this.props.navigation.navigate('Final Screen')}
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
