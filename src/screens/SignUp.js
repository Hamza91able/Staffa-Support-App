import React from 'react'
import { StyleSheet } from 'react-native'
import firebase from 'react-native-firebase';
import { Container, Header, Left, Body, Right, Button, Icon, Title, View, Content, Form, Item, Label, Input, Text, DatePicker, Picker, Radio } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        errorMessage: null,
        chosenDate: new Date(),
        selected2: undefined,
    }

    setDate = newDate => {
        this.setState({ chosenDate: newDate });
    }

    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }

    handleSignUp = () => {
        const { email, password } = this.state
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                const userRef = firebase.database().ref().child("Users").child(firebase.auth().currentUser.uid);
                userRef.set({
                    uid: firebase.auth().currentUser.uid,
                })
            })
            .then(user => this.props.navigation.navigate('Main'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    renderSignup = () => {
        return (

            <Container>
                <Content>
                    <Form>
                        <Item style={{ width: '100%' }} inlineLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item style={{ width: '100%' }} inlineLabel>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Item style={{ width: '100%' }} inlineLabel>
                            <Label>Confirm Password</Label>
                            <Input />
                        </Item>

                        <Item style={{ width: '100%' }} inlineLabel>
                            <Label>First Name</Label>
                            <Input />
                        </Item>
                        <Item style={{ width: '100%' }} inlineLabel>
                            <Label>Surname</Label>
                            <Input />
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
                            <Input />
                        </Item>
                        <Item style={{ width: '100%' }} inlineLabel>
                            <Label>Email address</Label>
                            <Input />
                        </Item>
                        <Item style={{ width: '100%' }} inlineLabel>
                            <Label>Mobile Number</Label>
                            <Input />
                        </Item>
                        <Item style={{ width: '100%' }} inlineLabel>
                            <Label>Registration Number</Label>
                            <Input />
                        </Item>
                        <Item style={{ width: '100%' }} inlineLabel>
                            <Label>Gender</Label>
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
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}
                            >
                                <Picker.Item label="Yes" value="key2" />
                                <Picker.Item label="No" value="key3" />
                            </Picker>
                        </Item>
                    </Form>
                </Content>
            </Container>
        )
    }

    render() {
        return (
            // <View style={styles.container}>
            //     <Text>Sign Up</Text>
            //     {this.state.errorMessage &&
            //         <Text style={{ color: 'red' }}>
            //             {this.state.errorMessage}
            //         </Text>}
            //     <TextInput
            //         placeholder="Email"
            //         autoCapitalize="none"
            //         style={styles.textInput}
            //         onChangeText={email => this.setState({ email })}
            //         value={this.state.email}
            //     />
            //     <TextInput
            //         secureTextEntry
            //         placeholder="Password"
            //         autoCapitalize="none"
            //         style={styles.textInput}
            //         onChangeText={password => this.setState({ password })}
            //         value={this.state.password}
            //     />
            //     <Button title="Sign Up" onPress={this.handleSignUp} />
            //     <Button
            //         title="Already have an account? Login"
            //         onPress={() => this.props.navigation.navigate('Login')}
            //     />
            // </View>
            <React.Fragment >
                <Header>
                    <Body>
                        <Title>Signup</Title>
                    </Body>
                </Header>
                {this.renderSignup()}
                <Button style=
                    {{
                        width: '100%',
                        height: '8%',
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        bottom: 0,
                    }}
                    success><Text style={{ fontSize: 30 }}> Register </Text></Button>
            </React.Fragment>
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
