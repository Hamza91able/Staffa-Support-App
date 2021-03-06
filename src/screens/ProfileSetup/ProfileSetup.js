import React from 'react'
import { StyleSheet } from 'react-native'
import firebase from 'react-native-firebase';
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, View, Content, Form, Item, Label, Input, Text,
    DatePicker, Picker, Radio, Card, CardItem, Root
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class ProfileSetup extends React.Component {
    state = {
        username: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        surname: '',
        chosenDate: new Date(),
        nic: '',
        email: '',
        mobileNo: '',
        regNumber: '',
        gender: undefined,
        holidayPay: undefined,
        errorMessage: null,
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

    renderSignup = () => {
        return (
            <Content>
                <Form>
                    <Item style={{ width: '100%' }} inlineLabel>
                        <Label>Username</Label>
                        <Input
                            onChangeText={username => this.setState({ username })}
                            value={this.state.username}
                        />
                    </Item>
                    <Item style={{ width: '100%' }} inlineLabel>
                        <Label>First Name</Label>
                        <Input
                            onChangeText={firstName => this.setState({ firstName })}
                            value={this.state.firstName}
                        />
                    </Item>
                    <Item style={{ width: '100%' }} inlineLabel>
                        <Label>Surname</Label>
                        <Input
                            onChangeText={surname => this.setState({ surname })}
                            value={this.state.surname}
                        />
                    </Item>
                    <Item style={{ width: '100%' }} inlineLabel>
                        <Label>DOB</Label>
                        <DatePicker
                            defaultDate={new Date(2018, 4, 4)}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date(2018, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                            disabled={false}
                        />
                    </Item>
                    <Item style={{ width: '100%' }} inlineLabel>
                        <Label>National Insurance Number</Label>
                        <Input
                            onChangeText={nic => this.setState({ nic })}
                            value={this.state.nic}
                        />
                    </Item>
                    <Item style={{ width: '100%' }} inlineLabel>
                        <Label>Mobile Number</Label>
                        <Input
                            onChangeText={mobileNo => this.setState({ mobileNo })}
                            value={this.state.mobileNo}
                        />
                    </Item>
                    <Item style={{ width: '100%' }} inlineLabel>
                        <Label>Registration Number</Label>
                        <Input
                            onChangeText={regNumber => this.setState({ regNumber })}
                            value={this.state.regNumber}
                        />
                    </Item>
                    <Item style={{ width: '100%' }} inlineLabel>
                        <Label>Gender</Label>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.gender}
                            onValueChange={this.onGenderChange.bind(this)}
                        >
                            <Picker.Item label="Male" value="key0" />
                            <Picker.Item label="Female" value="key1" />
                        </Picker>
                    </Item>
                    <Item style={{ width: '100%' }} inlineLabel>
                        <Label>Do you want to accure holiday pay?</Label>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            selectedValue={this.state.holidayPay}
                            onValueChange={this.holdayPayChange.bind(this)}
                        >
                            <Picker.Item label="Yes" value="key0" />
                            <Picker.Item label="No" value="key1" />
                        </Picker>
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
                        <Row size={70} style={{ backgroundColor: 'white' }}>
                            <View style={{ width: '95%' }}>
                                {this.renderSignup()}
                            </View>

                        </Row>
                        <Row size={15}>
                            <View style={{ alignItems: 'center', flex: 1, marginTop: '5%' }}>
                                <Body>
                                    <Button
                                        onPress={() => this.props.navigation.navigate('Address Bank Info')}
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
