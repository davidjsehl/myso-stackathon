import React, { Component } from 'react';
import { Image, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

class CourtListItem extends Component {

    // onRowPress() {
    //     Actions.singleCourtView({ court: this.props.court });
    // }

    render() {

        const { title, description, image, date } = this.props.event;

        return (
            <TouchableWithoutFeedback >
                <View>
                    <Card>
                        <CardSection>
                            <View style={styles.thumbnailContainer}>
                                <Image style={styles.thumbnailStyle}
                                    source={{ uri: image }}
                                />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.eventName}>{title}</Text>
                                <Text>{description.slice(0, 85)}</Text>
                            </View>
                        </CardSection>
                    </Card>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex: .75
    },
    thumbnailStyle: {
        height: 50,
        width: 75
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    eventName: {
        fontSize: 17,
        fontWeight: 'bold'
    }
}

export default CourtListItem;