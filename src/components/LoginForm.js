import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, InputField, Button, Spinner } from './common';
import { loginUserThunk, emailChanged, passwordChanged } from '../reducers/authReducer';


export class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUserThunk({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButton() {
        if (this.props.loading) return <Spinner size='large' />
        else {
            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                    Login
                </Button>
            )
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <InputField
                        label='Email'
                        placeholder='user@gmail.com'
                        value={this.props.email}
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <InputField
                        label='Password'
                        placeholder='Password'
                        secureTextEntry
                        value={this.props.password}
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return {
        email,
        password,
        error,
        loading
    }
}

const LoginFormContainer = connect(mapStateToProps, { emailChanged, passwordChanged, loginUserThunk })(LoginForm);
export default LoginFormContainer;
