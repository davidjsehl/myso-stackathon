import React, { Component } from 'react';
import { TouchableOpacity, Image, View, TextInput, Platform } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { updateMessage, sendMessageThunk } from '../reducers/chatReducer';


class MessageForm extends Component {
    
    constructor(props) {
        super(props);
    }

    handleMessageChange (message) {
        this.props.updateMessage(message)
    }

    handleSendButtonSubmit() {
        this.props.sendMessageThunk(this.props.message, this.props.event.id)
    }
            
    render () {
        console.log(this.props.event.id)
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Message"
                    returnKeyType='send'
                    underlineColorAndroid={'transparent'}
                    />

                <TouchableOpacity
                    style={styles.button}
                    >
                <Image style={styles.sendImageStyle}
                    source={require('../../public/send-icon.png')}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this._pickImage()}
                    // onPress={this.handleButtonPress}
                    // disabled={isButtonDisabled}
                    >
                <Image style={styles.cameraImageStyle}
                    source={require('../../public/camera.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        minWidth: '100%',
        backgroundColor: '#eeeeee',
        borderTopColor: '#cccccc',
        borderTopWidth: 1
    },
    textInput: {
        flex: .98,
        backgroundColor: '#ffffff',
        height: 40,
        margin: 10,
        borderRadius: 5,
        padding: 3
    },
    button: {
        flexShrink: 0,
        width: 40,
        height: 40,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sendImageStyle: {
        height: 40,
        width: 40
    },
    cameraImageStyle: {
        height: 40,
        width: 40
    }
}




// import RNFetchBlob from 'react-native-fetch-blob'

// const Blob = RNFetchBlob.polyfill.Blob
// const fs = RNFetchBlob.fs
// window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
// window.Blob = Blob
// console.log(RNFetchBlob)

// const uploadImage = (uri, mime = 'application/octet-stream') => {
//     return new Promise((resolve, reject) => {
//         const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
//         const sessionId = new Date().getTime()
//         let uploadBlob = null
//         const imageRef = storage.ref('images').child(`${sessionId}`)

//         fs.readFile(uploadUri, 'base64')
//             .then((data) => {
//                 return Blob.build(data, { type: `${mime};BASE64` })
//             })
//             .then((blob) => {
//                 uploadBlob = blob
//                 return imageRef.put(blob, { contentType: mime })
//             })
//             .then(() => {
//                 uploadBlob.close()
//                 return imageRef.getDownloadURL()
//             })
//             .then((url) => {
//                 resolve(url)
//             })
//             .catch((error) => {
//                 reject(error)
//             })
//     })
// }
export default MessageForm;