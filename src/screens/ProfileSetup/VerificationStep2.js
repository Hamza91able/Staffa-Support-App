import React from 'react'
import { StyleSheet, BackHandler, Image } from 'react-native'
import firebase from 'react-native-firebase';
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, View, Content, Form, Item, Label, Input, Text,
    DatePicker, Picker, CheckBox, Card, CardItem, Root, Textarea, List, ListItem, Thumbnail
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { RNCamera } from 'react-native-camera';

export default class VerificationStep2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }

    onValueChange2(value) {
        this.setState({
            selected2: value,
            imgPath: undefined
        });
    }

    takePicture = async function () {
        const options = {
            quality: 1,
            orientation: "portrait",
            pauseAfterCapture: true,
            fixOrientation: true
        }

        if (this.camera) {
            const data = await this.camera.takePictureAsync(options);
            this.setState({
                imgPath: data,
            })
        }
        else {
            alert("FAILED")
        }
    };

    render() {
        return (
            <Root>
                <View style={{ backgroundColor: '#FFA500', flex: 1, alignItems: 'center' }}>
                    <Grid>
                        <Row size={5}>

                        </Row>
                        <Row size={10} style={{ width: '90%' }}>
                            <Grid>
                                <Row size={20}>
                                    <View style={{ alignContent: 'center', alignItems: 'center', flex: 1 }}>
                                        <Text style={{ alignContent: 'center', alignItems: 'center' }}>Select Document Type</Text>
                                    </View>

                                </Row>
                                <Row size={70}>
                                    <Content>
                                        <Form>
                                            <Item picker>
                                                <Picker
                                                    mode="dropdown"
                                                    iosIcon={<Icon name="arrow-down" />}
                                                    style={{ width: undefined }}
                                                    placeholder="Select your SIM"
                                                    placeholderStyle={{ color: "#bfc6ea" }}
                                                    placeholderIconColor="#007aff"
                                                    selectedValue={this.state.selected2}
                                                    onValueChange={this.onValueChange2.bind(this)}
                                                >
                                                    <Picker.Item label="Passport" value="key0" />
                                                    <Picker.Item label="Driving Licence" value="key1" />
                                                    <Picker.Item label="Government ID Card" value="key2" />
                                                </Picker>
                                            </Item>
                                        </Form>
                                    </Content>
                                </Row>
                            </Grid>
                        </Row>
                        <Row size={5}>

                        </Row>
                        <Row size={65}>
                            {this.state.imgPath === undefined ? <RNCamera
                                ref={ref => {
                                    this.camera = ref;
                                }}
                                style={{
                                    flex: 1,
                                    width: '100%',
                                }}
                            >
                            </RNCamera> :
                                <Image
                                    source={{
                                        isStatic: true,

                                        uri: this.state.imgPath.uri,
                                    }}
                                    style={{ height: '100%', width: '100%' }}
                                />
                            }
                        </Row>
                        <Row size={15}>
                            <View style={{ alignItems: 'center', flex: 1, marginTop: '10%' }}>
                                <Body>
                                    {this.state.imgPath === undefined ? <Button
                                        onPress={this.takePicture.bind(this)}
                                        style={{ width: 180, justifyContent: 'center', backgroundColor: 'black' }}
                                        rounded><Text> Scan Document </Text>
                                    </Button> :
                                        <Button
                                            onPress={() => this.setState({ imgPath: undefined })}
                                            style={{ width: 180, justifyContent: 'center', backgroundColor: 'black' }}
                                            rounded><Text> Re scan document </Text>
                                        </Button>}
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
