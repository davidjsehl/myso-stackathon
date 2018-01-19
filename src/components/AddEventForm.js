import React, { Component } from 'react';
import { View, Text, DatePickerIOS, KeyboardAvoidingView, ScrollView } from 'react-native';
import { InputField, Card, CardSection, Button } from './common';

class AddEventForm extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            chosenDate: new Date() 
        };

        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate })
    }

    render() {
        return (
            <ScrollView>
                <Card>
                    <CardSection>          
                        <InputField 
                            placeholder="Event Title"     
                        />
                    </CardSection>
                        
                    <CardSection>          
                        <InputField style={{ paddingLeft: 5 }}
                            placeholder="Description"     
                        />
                    </CardSection>

                    <CardSection>          
                        <InputField 
                            placeholder="Location"     
                        />
                    </CardSection>

                    <CardSection style={{ justifyContent: 'center' }}>
                        <Text style={styles.pickerLabelStyle}>Select Date and Time</Text>
                    </CardSection>

                    <DatePickerIOS 
                        date={this.state.chosenDate}
                        onDateChange={this.setDate}
                    />

                    <CardSection>
                        <Button>
                            Add Event
                        </Button>
                    </CardSection>
                </Card>
            </ScrollView>
        )
    }
}

const styles = {
    pickerLabelStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 18
    }
}

export default AddEventForm;

// const styles = {
//     container: {
//         justifyContent: 'center',
//         marginTop: 50,
//         padding: 20,
//         backgroundColor: '#ffffff',
//     },
//     title: {
//         fontSize: 30,
//         alignSelf: 'center',
//         marginBottom: 30
//     },
//     buttonText: {
//         fontSize: 18,
//         color: 'white',
//         alignSelf: 'center'
//     },
//     button: {
//         height: 36,
//         backgroundColor: '#48BBEC',
//         borderColor: '#48BBEC',
//         borderWidth: 1,
//         borderRadius: 8,
//         marginBottom: 10,
//         alignSelf: 'stretch',
//         justifyContent: 'center'
//     }
// };

