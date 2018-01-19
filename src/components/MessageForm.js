import React, { Component } from 'react';
import { TouchableOpacity, Image, View, TextInput, Platform } from 'react-native';
import { connect } from 'react-redux';
import { ImagePicker } from 'expo';
import { messageChanged, sendMessageThunk } from '../reducers/chatReducer';


export class MessageForm extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            image: null
        }

        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSendButtonSubmit = this.handleSendButtonSubmit.bind(this);
        this._pickImage = this._pickImage.bind(this);
    }

    handleMessageChange (text) {
        this.props.messageChanged(text)
    }

    handleSendButtonSubmit() {
        this.props.sendMessageThunk(this.props.message, (this.props.event.id - 1))
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3]
        });
        if (!result.cancelled) {
            this.setState({ image: result.uri })
        }
    }
            
    render () {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Message"
                    returnKeyType='send'
                    underlineColorAndroid={'transparent'}
                    value={this.props.message}
                    onChangeText={this.handleMessageChange}
                    />

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.handleSendButtonSubmit}
                    >
                    <Image style={styles.sendImageStyle}
                        source={require('../../public/send-icon.png')}
                        />
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={this._pickImage}
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

const mapStateToProps = (state) => {
    return {
        message: state.chat.message
    }
}

const MessageFormContainer = connect(mapStateToProps, { messageChanged, sendMessageThunk })(MessageForm);
export default MessageFormContainer;




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