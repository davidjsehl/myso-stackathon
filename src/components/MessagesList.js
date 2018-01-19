import React, { Component } from 'react';
import { View, Text } from 'react-native';


const MessagesList = (props) => {
        // console.log(this.props.messages)
        // const isCurrentUser = firebaseService.auth().currentUser.uid == this.props.message.user.id;
        console.log(props.data)
    return (
        <View>
           {
               props.data.map(message => {
                   return <Text>{message.text}</Text>
               })
           }
        </View>
    )
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