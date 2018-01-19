import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';

// import MessagesList from './MessagesList';
import MessageForm from './MessageForm';

class EventChatView extends Component {
    render() {
        const { title, description, location, date, time, image } = this.props.event;
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior='padding'
                keyboardVerticalOffset={64}>

                {/* <MessagesList /> */}
                <MessageForm event={this.props.event} />
            </KeyboardAvoidingView>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#eeeeee'
    }
}

export default EventChatView;