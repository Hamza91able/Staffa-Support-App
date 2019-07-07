import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { DrawerItems } from 'react-navigation';

export default class ListExample extends Component {

    render() {
        return (
            <Container style={{ backgroundColor: '#FF8C00' }}>
                <Content>
                    <DrawerItems {...this.props} />
                </Content>
            </Container>
        );
    }
}