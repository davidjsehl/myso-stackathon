import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import MessagesList from './MessagesList';
import MessageForm from './MessageForm';
import { fetchEventMessagesThunk } from '../reducers/chatReducer';
import { getChatMessages } from '../utils';


class EventChatView extends Component {

    componentDidMount() {
        this.props.fetchEventMessagesThunk(this.props.event.id);
    }

    render() {
        const { title, description, location, date, time, image, messages } = this.props.event;
        const data = getChatMessages(messages).reverse();
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior='padding'
                keyboardVerticalOffset={64}>

                <MessagesList data={data} />
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

const mappStateToProps = (state) => {
    return {
        messages: state.chat.messages
    }
}

const EventChatViewContainer = connect(mappStateToProps, { fetchEventMessagesThunk })(EventChatView);
export default EventChatViewContainer;