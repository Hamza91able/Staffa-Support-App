import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import firebase from 'react-native-firebase';
import { View, Container, Header, Content, Card, CardItem, Body, Text, ListItem, Radio, Left, Right, Button, Root, Toast } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class InitialSignup extends React.Component {
    state = {
        username: '',
        password: '',
        confirmPassword: '',
        errorMessage: null,
        editable: true,
    }

    handleSignUp = () => {
        const { password, email, confirmPassword } = this.state;


        if (confirmPassword === password) {
            this.setState({
                editable: false,
            })
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    const userRef = firebase.database().ref().child("Users").child(firebase.auth().currentUser.uid);
                    userRef.set({
                        uid: firebase.auth().currentUser.uid,
                        profileSetup: false,
                    })
                })
                .then(Toast.show({
                    text: "Register Succesfull. Redirecting",
                    buttonText: "Okay",
                    type: "warning"
                }))
                .then(user => {
                    setTimeout(() => {
                        this.props.navigation.navigate('Login')
                    }, 1000);
                })
                .catch(error => Toast.show({
                    text: error,
                    buttonText: "Okay",
                    type: "danger"
                }))
        } else {
            Toast.show({
                text: "Password doesn't match",
                buttonText: "Okay",
                type: "danger"
            })
        }


    }

    renderCard = () => {
        return (
            <Content>
                <Card>
                    <CardItem>
                        <Body style={styles.container}>
                            <Text>
                                Staffa
                                </Text>
                            <Text>
                                New Account
                                </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        )
    }

    render() {
        return (
            <Root>
                <Grid>
                    <Row size={30}>
                        {this.renderCard()}
                    </Row>
                    <Row size={70}>
                        <View style={styles.container}>
                            {this.state.errorMessage &&
                                <Text style={{ color: 'red' }}>
                                    {this.state.errorMessage}
                                </Text>}
                            <TextInput
                                placeholder="Email"
                                autoCapitalize="none"
                                style={styles.textInput}
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                                editable={this.state.editable}
                            />
                            <TextInput
                                secureTextEntry
                                placeholder="Password"
                                autoCapitalize="none"
                                style={styles.textInput}
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                                editable={this.state.editable}
                            />
                            <TextInput
                                secureTextEntry
                                placeholder="Confirm Password"
                                autoCapitalize="none"
                                style={styles.textInput}
                                onChangeText={confirmPassword => this.setState({ confirmPassword })}
                                value={this.state.confirmPassword}
                                editable={this.state.editable}
                            />
                        </View>
                    </Row>
                </Grid>

                <Grid>
                    <Row style={{ alignItems: 'center', justifyContent: 'center' }} size={10}>
                        <Text style={{ justifyContent: 'center', alignItems: 'center' }}>What is your profession?</Text>
                    </Row>
                    <Row size={90}>
                        <Content>
                            <ListItem>
                                <Left>
                                    <Text>Nurse</Text>
                                </Left>
                                <Right>
                                    <Radio />
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text>Midwife</Text>
                                </Left>
                                <Right>
                                    <Radio />
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text>Health Care Assistant</Text>
                                </Left>
                                <Right>
                                    <Radio />
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text>Carer</Text>
                                </Left>
                                <Right>
                                    <Radio />
                                </Right>
                            </ListItem>

                            {/* <Button
                                title="Already have an account? Login"
                                onPress={() => this.props.navigation.navigate('Login')}
                            /> */}
                        </Content>
                    </Row>
                </Grid>
                <Button onPress={this.handleSignUp}
                    style={{
                        width: '100%',
                        height: '10%',
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        bottom: 0,
                    }}
                    success><Text style={{ fontSize: 30 }}> Register </Text></Button>
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
