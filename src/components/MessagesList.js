import React, { Component } from 'react';
import { View, Text } from 'react-native';


class MessagesList extends Component  {
    constructor (props) {
        super(props)
    }
        // const isCurrentUser = firebaseService.auth().currentUser.uid == this.props.message.user.id;

    render() {

        return (
            <View>
               {
                   this.props.data.map(message => {
                       return <Text key={message.id}>{message.text}</Text>
                   })
               }
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        borderRadius: 5
    },
    bubbleView: {
        backgroundColor: '#1E90FF',
        flex: 1,
        borderRadius: 8,
        padding: 8
    },
    userText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    messageText: {
        flex: 1,
        color: 'white',
        fontSize: 16
    }
}



export default MessagesList;