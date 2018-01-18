import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';
import { Card, CardSection } from './common';
import EventListItem from './EventListItem';
import { getEventsThunk } from '../reducers/eventReducer';

export class EventList extends Component {

    componentWillMount() {
        this.props.getEventsThunk();
        this.createDataSource(this.props);
    }
    
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps)
    }

    createDataSource({ events }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.dataSource = ds.cloneWithRows(events)
    }

    renderRow(event) {
        return <EventListItem event={event} />
    }

    render() {
        console.log(this.props)
        console.log('qdqwdcqedcqedcecc')
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events
    }
}


const EventListContainer = connect(mapStateToProps, { getEventsThunk })(EventList);
export default EventListContainer;

