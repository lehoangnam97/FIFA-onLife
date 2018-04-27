import React, {Component} from 'react'
import {StyleSheet, ListView} from 'react-native'
import PropTypes from 'prop-types'
import {TeamRequestRow} from './TeamRequestRow'


const propTypes = ({
    data: PropTypes.any.required,
    style: PropTypes.any,
    denyTeamRequest: PropTypes.func,
    acceptTeamRequest: PropTypes.func,
});

const defaultProps = {
    data: [
        {
            name: "",
        }
    ],
    style: {},
    denyTeamRequest() {
    },
    acceptTeamRequest() {
    }
};

export default class TeamRequestsListView extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress(section) {
        const {onPress} = this.props.onPress;
        onPress(section);
    }

    render() {
        return (
            <ListView
                style={[styles.container, this.props.style]}
                dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.props.data)}
                renderRow={(rowData) =>
                    <TeamRequestRow
                        rowData={rowData}
                        denyTeamRequest={this.props.denyTeamRequest}
                        acceptTeamRequest={this.props.acceptTeamRequest}/>}
            />
        )
    };
}


TeamRequestsListView.propTypes = propTypes;
TeamRequestsListView.defaultProps = defaultProps;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
