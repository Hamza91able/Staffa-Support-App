import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, View, Textarea, Card, CardItem, Body, Button, Right } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class ShiftDetails extends Component {

    renderShiftDetails = () => {
        return (
            <Content>
                <Card>
                    <CardItem header>
                        <Grid>
                            <Row>
                                <Col size={40}><Text>HCP102213</Text></Col>
                                <Col size={60}><Text>Shift Date 13/02/2019</Text></Col>
                            </Row>
                            <Row>
                                <Col size={75}><Text>Shift Time: 08:00 to 16:00</Text></Col>
                                <Col size={25}><Text>8 Hours</Text></Col>
                            </Row>
                        </Grid>
                    </CardItem>

                    <CardItem>
                        <Grid>

                            <Row><Text>Shift Site - Bexley Clinic</Text></Row>
                            <Row><Text>Wandsworth Road</Text></Row>
                            <Row><Text>London SW1 4GF</Text></Row>
                        </Grid>
                    </CardItem>

                    <CardItem>
                        <Grid>
                            <Row><Text>Shift due to Nurse calling in sick</Text></Row>
                        </Grid>
                    </CardItem>

                    <CardItem>
                        <Grid>
                            <Row><Text>Authorised by-</Text></Row>
                            <Row><Text>Belinda Cooper, Duty Manager</Text></Row>
                            <Row><Text>07887 988654</Text></Row>
                        </Grid>
                    </CardItem>

                    <CardItem footer>
                        <Grid>
                            <Row><Text>Shift Cost $278.00</Text></Row>
                            <Row><Text style={{ color: 'red' }}>Shift Net Pay $229.31</Text></Row>
                        </Grid>
                    </CardItem>
                </Card>
            </Content>
        )
    }

    render() {
        return (
            <Grid style={{ backgroundColor: '#FFA500' }}>
                <Row size={5}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#FFFF66' }}>
                        <Text style={{ fontSize: 20, backgroundColor: '#FFFF66' }}>Shift Details</Text>
                    </View>

                </Row>
                <Row size={63}>
                    <Content>
                        <List>
                            <ListItem>
                                <Content padder>
                                    {this.renderShiftDetails()}
                                </Content>
                            </ListItem>
                        </List>
                    </Content>
                </Row>
                <Row size={10}>
                    <Right style={{ marginRight: 20 }}>
                        <Button style={{ width: 200, justifyContent: 'center', }}><Text>Message Manager</Text></Button>
                    </Right>
                </Row>
                <Row size={10}>
                    <Right style={{ marginRight: 20 }}>
                        <Button style={{ width: 200, justifyContent: 'center', }} success><Text>Accept Shift</Text></Button>
                    </Right>
                </Row>
                <Row size={13}>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Body>
                            <Button success style={{
                                justifyContent: 'center',
                                backgroundColor: 'black',
                                width: 200,
                                marginTop: 20
                            }}
                                onPress={() => this.props.navigation.navigate('View Shifts')}
                            >
                                <Text>Back</Text>
                            </Button>
                        </Body>
                    </View>
                </Row>
            </Grid>

        );
    }
}