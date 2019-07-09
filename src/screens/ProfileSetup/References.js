import React from 'react'
import { StyleSheet, BackHandler } from 'react-native'
import firebase from 'react-native-firebase';
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, View, Content, Form, Item, Label, Input, Text,
    DatePicker, Picker, CheckBox, Card, CardItem, Root, Textarea, List, ListItem
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class References extends React.Component {

    state = {
        ReferencesString: 'Upload your references for Employees to view',
    }

    render() {
        // alert(this.state.anonomalisedCheck)
        return (
            <Root>
                <View style={{ backgroundColor: '#FFA500', flex: 1, alignItems: 'center' }}>
                    <Grid>
                        <Row size={2}>

                        </Row>
                        <Row size={8} style={{ width: '90%' }}>
                            <Content>
                                <Label style={{ paddingLeft: 30, paddingRight: 30 }} >{this.state.ReferencesString}</Label>
                            </Content>
                        </Row>
                        <Row size={51}>
                            <Content>
                                <Item style={{ backgroundColor: 'white', flex: 1 }} inlineLabel>
                                    <Input
                                        style={{ textAlign: 'center' }}
                                        placeholder={'Name of Reference'}
                                    />
                                </Item>
                                <Grid>
                                    <Col>
                                        <Button
                                            style={{ width: 130, justifyContent: 'center', backgroundColor: 'black', marginTop: '3%' }}
                                            rounded><Text> Scan </Text>
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button
                                            style={{ width: 130, justifyContent: 'center', backgroundColor: 'black', marginTop: '3%' }}
                                            rounded><Text> Upload </Text>
                                        </Button>
                                    </Col>
                                </Grid>
                                <Item style={{ backgroundColor: 'white', flex: 1, marginTop: '5%' }} inlineLabel>
                                    <Input
                                        style={{ textAlign: 'center' }}
                                        placeholder={'Name of Reference'}
                                    />
                                </Item>
                                <Grid>
                                    <Col>
                                        <Button
                                            style={{ width: 130, justifyContent: 'center', backgroundColor: 'black', marginTop: '3%' }}
                                            rounded><Text> Scan </Text>
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button
                                            style={{ width: 130, justifyContent: 'center', backgroundColor: 'black', marginTop: '3%' }}
                                            rounded><Text> Upload </Text>
                                        </Button>
                                    </Col>
                                </Grid>
                                <Item style={{ backgroundColor: 'white', flex: 1, marginTop: '5%' }} inlineLabel>
                                    <Input
                                        style={{ textAlign: 'center' }}
                                        placeholder={'Name of Reference'}
                                    />
                                </Item>
                                <Grid>
                                    <Col>
                                        <Button
                                            style={{ width: 130, justifyContent: 'center', backgroundColor: 'black', marginTop: '3%' }}
                                            rounded><Text> Scan </Text>
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button
                                            style={{ width: 130, justifyContent: 'center', backgroundColor: 'black', marginTop: '3%' }}
                                            rounded><Text> Upload </Text>
                                        </Button>
                                    </Col>
                                </Grid>
                                <Item style={{ backgroundColor: 'white', flex: 1, marginTop: '5%' }} inlineLabel>
                                    <Input
                                        style={{ textAlign: 'center' }}
                                        placeholder={'Name of Reference'}
                                    />
                                </Item>
                                <Grid>
                                    <Col>
                                        <Button
                                            style={{ width: 130, justifyContent: 'center', backgroundColor: 'black', marginTop: '3%' }}
                                            rounded><Text> Scan </Text>
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button
                                            style={{ width: 130, justifyContent: 'center', backgroundColor: 'black', marginTop: '3%' }}
                                            rounded><Text> Upload </Text>
                                        </Button>
                                    </Col>
                                </Grid>
                                <Grid>
                                    <Col>

                                    </Col>
                                    <Col>
                                        <Button
                                            style={{ width: 130, justifyContent: 'center', backgroundColor: 'black', marginTop: '3%' }}
                                            rounded><Text> Add </Text>
                                        </Button>
                                    </Col>
                                </Grid>
                            </Content>
                        </Row>

                        <Row size={8}>
                            <View style={{ alignItems: 'center', flex: 1, marginTop: '5%' }}>
                                <Body>
                                    <Button
                                        onPress={() => this.props.navigation.navigate('Skills')}
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
