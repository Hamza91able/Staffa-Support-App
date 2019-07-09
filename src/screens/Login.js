import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import firebase from 'react-native-firebase';

export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
        errorMessage: null,
        editable: true,
    }

    handleLogin = () => {
        const { email, password } = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                const userRef = firebase.database().ref().child("Users").child(firebase.auth().currentUser.uid);
                userRef.once('value', snap => {
                    if (snap.val("profileSetup" === false)) {
                        this.props.navigation.navigate('SignUpForm')
                    } else {
                        this.props.navigation.navigate('Dashboard')
                    }
                })

            })
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20 }}>Login</Text>
                {this.state.errorMessage &&
                    <Text style={{ color: 'red', fontSize: 20 }}>
                        {this.state.errorMessage}
                    </Text>}
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={this.handleLogin}
                >

                    <Text style={styles.TextStyle}> Login </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={() => this.props.navigation.navigate('SignUp')}
                >
                    <Text style={styles.TextStyle}> Register </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFA500'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
        backgroundColor: 'white'
    },
    SubmitButtonStyle: {

        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        width: 150,
        borderRadius: 60
    },

    TextStyle: {
        color: '#fff',
        textAlign: 'center',
    }
})
