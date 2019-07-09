import React from 'react'
import { StyleSheet } from 'react-native'
import firebase from 'react-native-firebase';
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, View, Content, Form, Item, Label, Input, Text,
    DatePicker, Picker, Radio, Card, CardItem, Root
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class AddressBankInfo extends React.Component {
    state = {
        Address1: '',
        Address2: '',
        Address3: '',
        PostCode: '',
        AccountName: '',
        BankName: '',
        AccountNumber: '',
        SortCode: '',
    }

    setDate = newDate => {
        this.setState({ chosenDate: newDate });
    }

    onGenderChange(value) {
        this.setState({
            gender: value
        });
    }

    holdayPayChange(value) {
        this.setState({
            holidayPay: value
        });
    }

    renderAddressInfo = () => {
        return (
            <Content>
                <Form>
                    <Item style={{ width: '100%' }} inlineLabel>
                        <Label>Address 1</Label>
                        <Input
                            onChangeText={Address1 => this.setState({ Address1 })}
                            value={this.state.Address1}
                        />
                    </Item>
                    <Item style={{ width: '100%' }} inlineLabel>
                        <Label>Address 2</Label>
                        <Input
                            onChangeText={Address2 => this.setState({ Address2 })}
                            value={this.state.Address2}
                        />
                    </Item>
                    <Item style={{ width: '100%' }} inlineLabel>
                        <Label>Address 3</Label>
                        <Input
                            onChangeText={Address3 => this.setState({ Address3 })}
                            value={this.state.Address3}
                        />
                    </Item>
                    <Item style={{ width: '100%' }} inlineLabel>
                        <Label>Post Code</Label>
                        <Input
                            onChangeText={PostCode => this.setState({ PostCode })}
                            value={this.state.PostCode}
                        />
                    </Item>
                </Form>
            </Content>

        )
    }

    renderBankInfo = () => {
        return (
            <Content>
                <Form>
                    <Item style={{ width: '100%' }} inlineLabel>
                        <Label>Account Name</Label>
                        <Input
                            onChangeText={AccountName => this.setState({ AccountName })}
                            value={this.state.AccountName}
                        />
                    </Item>
                    <Item style={{ width: '100%' }} inlineLabel>
                        <Label>Bank Name</Label>
                        <Input
                            onChangeText={BankName => this.setState({ BankName })}
                            value={this.state.BankName}
                        />
                    </Item>
                    <Item style={{ width: '100%' }} inlineLabel>
                        <Label>Account Number</Label>
                        <Input
                            onChangeText={AccountNumber => this.setState({ AccountNumber })}
                            value={this.state.AccountNumber}
                        />
                    </Item>
                    <Item style={{ width: '100%' }} inlineLabel>
                        <Label>Sort Code</Label>
                        <Input
                            onChangeText={SortCode => this.setState({ SortCode })}
                            value={this.state.SortCode}
                        />
                    </Item>
                </Form>
            </Content>
        )
    }

    render() {
        return (
            <Root>
                <View style={{ backgroundColor: '#FFA500', flex: 1 }}>
                    <Grid>
                        <Row size={15}>
                            <Content>
                                <Card>
                                    <CardItem style={{ backgroundColor: '#FFFF66' }}>
                                        <Body style={styles.container}>
                                            <Text>
                                                Staffa
                                        </Text>
                                            <Text>
                                                Profile Setup
                                        </Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </Content>
                        </Row>
                        <Row size={35} style={{ backgroundColor: 'white' }}>
                            <View style={{ width: '95%' }}>
                                {this.renderAddressInfo()}
                            </View>
                        </Row>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
                            <Text style={{ fontSize: 20 }}>Bank account to be paid into</Text>
                        </View>
                        <Row size={35} style={{ backgroundColor: 'white' }}>
                            <View style={{ width: '95%' }}>
                                {this.renderBankInfo()}
                            </View>

                        </Row>
                        <Row size={15}>
                            <View style={{ alignItems: 'center', flex: 1, marginTop: '5%' }}>
                                <Body>
                                    <Button
                                        onPress={() => this.props.navigation.navigate('Terms Conditions')}
                                        style={{ width: 180, justifyContent: 'center', backgroundColor: 'black' }}
                                        rounded><Text> NEXT </Text>
                                    </Button>
                                </Body>
                            </View>
                        </Row>
                    </Grid>
                </View>


            </Root>
            // <React.Fragment>

            //     {this.renderSignup()}

            // </React.Fragment>

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
