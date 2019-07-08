import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import firebase from 'react-native-firebase';
import { View, Container, Header, Content, Card, CardItem, Body, Text, ListItem, Radio, Left, Right, Button } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class InitialSignup extends React.Component {
    state = {
        username: '',
        password: '',
        errorMessage: null,
    }

    handleSignUp = () => {
        const { password, email } = this.state;

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                const userRef = firebase.database().ref().child("Users").child(firebase.auth().currentUser.uid);
                userRef.set({
                    uid: firebase.auth().currentUser.uid
                })
            })
            .then(user => this.props.navigation.navigate('Main'))
            .catch(error => this.setState({ errorMessage: error.message }))
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
            <React.Fragment>
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
                            />
                            <TextInput
                                secureTextEntry
                                placeholder="Password"
                                autoCapitalize="none"
                                style={styles.textInput}
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                            />
                            <TextInput
                                secureTextEntry
                                placeholder="Password"
                                autoCapitalize="none"
                                style={styles.textInput}
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
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
                <Button onPress={this.handleSignUp} style=
                    {{
                        width: '100%',
                        height: '10%',
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
