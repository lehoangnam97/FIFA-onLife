import React, {Component} from 'react'
import {View, StyleSheet, Alert} from 'react-native'
import PropTypes from 'prop-types'
import {TeamHeader, TeamContent} from './TeamsRow'

import Accordion from 'react-native-collapsible/Accordion';


const propTypes = ({
    teams: PropTypes.any,
    style: PropTypes.any,
    onCallPress: PropTypes.func,
    onFollowTeamPress:PropTypes.func,
    onViewTeamPress:PropTypes.func,
});

const defaultProps = {
    teams: [{url: "", name: "", captain:""}],
    style: {},
    onCallPress() {
    },
    onFollowTeamPress(){
    },
    onViewTeamPress(){
    }
};

export default class TeamsListView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <Accordion initiallyActiveSection={null} expanded={false} activeOpacity={0.5}
                           underlayColor="#2ecc71" align="bottom"
                           sections={this.props.teams}
                           renderHeader={
                               (section, i, isActive, sections) =>
                                   <TeamHeader section={section}/>
                           }
                           renderContent={
                               (section, i, isActive, sections) =>
                                   <TeamContent section={section}
                                                 onCallPress={this.props.onCallPress}
                                                 onViewTeamPress={this.props.onViewTeamPress}
                                                 onMakeDealPress={this.props.onFollowTeamPress}

                                   />
                           }

                />
            </View>
        )
    };
}


TeamsListView.propTypes = propTypes;
TeamsListView.defaultProps = defaultProps;

const styles = StyleSheet.create({
    container: {flex: 1}
});
