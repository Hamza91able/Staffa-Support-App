import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class ViewShifts extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem onPress={() => this.props.navigation.navigate('Shift Details')}>
                            <Grid>
                                <Col><Text>Nurse</Text></Col>
                                <Col><Text>Bexley</Text></Col>
                                <Col><Text>$16</Text></Col>
                                <Col><Text>Net Total $97</Text></Col>
                            </Grid>
                        </ListItem>
                        <ListItem>
                            <Grid>
                                <Col><Text>Nurse</Text></Col>
                                <Col><Text>Bexley</Text></Col>
                                <Col><Text>$16</Text></Col>
                                <Col><Text>Net Total $97</Text></Col>
                            </Grid>
                        </ListItem>
                        <ListItem>
                            <Grid>
                                <Col><Text>Nurse</Text></Col>
                                <Col><Text>Bexley</Text></Col>
                                <Col><Text>$16</Text></Col>
                                <Col><Text>Net Total $97</Text></Col>
                            </Grid>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}