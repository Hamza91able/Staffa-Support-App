import React from 'react'
import { StyleSheet, Dimensions, TouchableHighlight } from 'react-native'
import { Container, Button, Content, Card, CardItem, Body, Text, View, List, ListItem, Icon, Left, Textarea } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import firebase from 'react-native-firebase';

export default class Main extends React.Component {

    // componentDidMount() {
    //     firebase.auth().signOut().then(function () {
    //         // Sign-out successful.
    //     }).catch(function (error) {
    //         // An error happened.
    //     });
    // }

    renderEmployeeInfo = () => {
        return (
            <Card>
                <CardItem style={{backgroundColor: '#FFFF66'}}>
                    <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{backgroundColor: '#FFFF66'}}>
                            Julie Higgins Staff No: HCP120021
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }

    render() {

        return (
            <View style={{ backgroundColor: '#FFA500', flex: 1 }}>
                <Grid>
                    <Row size={35}>
                        <View style={{ flex: 1 }}>
                            {this.renderEmployeeInfo()}
                            <View style={{ alignItems: 'center', flex: 1, marginTop: 20 }}>
                                <Text style={{ fontSize: 20 }}>Status</Text>
                                <Body>
                                    <Button style={styles.statusButton} rounded success>
                                        <Text style={{ fontSize: 20 }}>Available</Text>
                                    </Button>
                                </Body>
                            </View>
                        </View>
                    </Row>
                    <Row size={25}>
                        <Col size={50}>
                            <View style={{ flex: 1 }}>
                                <TouchableHighlight
                                    style={{
                                        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                                        borderWidth: 2,
                                        width: 130,
                                        height: 130,
                                        backgroundColor: 'limegreen',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 30,
                                    }}
                                // onPress={() => alert('Yaay!')}
                                >
                                    <Text style={{ fontSize: 60, color: 'white' }}>42</Text>
                                </TouchableHighlight>
                            </View>

                        </Col>
                        <Col size={50}>
                            <View style={{ justifyContent: 'center', flex: 1 }}>
                                <Text>Vacant Shift</Text>
                            </View>

                        </Col>
                    </Row>
                    <Row size={15}>
                        <Col>
                            <List style={{ justifyContent: 'center', marginLeft: 30, flex: 1 }}>
                                <ListItem icon>
                                    <Left>
                                        <Button style={{ backgroundColor: "#007AFF" }}>
                                            <Icon active name="text" />
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Text>Message Centre</Text>
                                    </Body>
                                </ListItem>
                            </List>
                        </Col>

                    </Row>
                    <Row size={35}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 20 }}>Notifications</Text>
                            <Textarea style={{ width: 380, backgroundColor:'white' }} disabled={true} editable={false} rowSpan={5} bordered placeholder="Textarea" value={"Moving & Handling Cert needs renewing. \nFirst Aid Cert needs renewing. \nNew PI prices just for you."} />
                        </View>
                    </Row>
                </Grid>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    statusButton: {
        // flex: 0,
        justifyContent: 'center',
        width: 300,
        height: 70,
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 5
    }
})
