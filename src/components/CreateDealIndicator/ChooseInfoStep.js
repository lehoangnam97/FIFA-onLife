import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import ModalDropdown from "react-native-modal-dropdown";
import DatePicker from "react-native-datepicker";
import {Icon} from 'react-native-elements';
import filterOptions from '../../ultils/filterOptions';
import datePickerStyle from '../../styles/datePicker';
import {greyText, whiteText, blackText} from '../../styles/text';
import {height} from 'react-native-dimension';
import PropTypes from 'prop-types'


const propTypes = ({
    style: PropTypes.any,
    onTeamTypeChange: PropTypes.func,
    onAgeChange: PropTypes.func,
    onDistrictChange: PropTypes.func,
    onDealTypeChange: PropTypes.func,
    onDateChange: PropTypes.func,
    onTimeStartChange: PropTypes.func,
    onTimeEndChange: PropTypes.func,

});

const defaultProps = {
    style: {},
    onTeamTypeChange() {
    },
    onAgeChange() {
    },
    onDealTypeChange() {
    },
    onDistrictChange() {
    },
    onDateChange() {
    },
    onTimeStartChange() {
    },
    onTimeEndChange() {
    },

};


export default class ChooseInfoStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamType: "Tất cả",
            age: "Tất cả",
            district: "Tất cả",
            dealType:"Khác",
            date: new Date(),
            time1: new Date(0, 0, 0, new Date().getHours(), new Date().getMinutes(), 0, 0),
            time2: new Date(0, 0, 0, new Date().getHours() + 1, new Date().getMinutes(), 0, 0),
        };
        this.onTeamTypeChange = this.onTeamTypeChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.onDistrictChange = this.onDistrictChange.bind(this);
        this.onDealTypeChange=this.onDealTypeChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onTimeStartChange = this.onTimeStartChange.bind(this);
        this.onTimeEndChange = this.onTimeEndChange.bind(this);

    }

    componentWillMount(){
        const {onTeamTypeChange,onAgeChange,onDistrictChange,onDealTypeChange,onDateChange,onTimeStartChange,onTimeEndChange}=this.props;
        onTeamTypeChange(this.state.teamType);
        onAgeChange(this.state.age);
        onDistrictChange(this.state.district);
        onTimeStartChange(this.state.time1);
        onTimeEndChange(this.state.time2);
        onDateChange(this.state.date);
        onDealTypeChange(this.state.dealType);
    }

    onTeamTypeChange(idx, teamType) {
        const {onTeamTypeChange} = this.props;
        this.setState({teamType: teamType});
        onTeamTypeChange(teamType);
    }

    onAgeChange(idx, age) {
        const {onAgeChange} = this.props;
        this.setState({age: age});
        onAgeChange(age);
    }


    onDistrictChange(idx, district) {
        const {onDistrictChange} = this.props;
        this.setState({district: district});
        onDistrictChange(district);
    }

    onDealTypeChange(idx,dealType){
        const {onDealTypeChange}=this.props;
        this.setState({dealType:dealType});
        onDealTypeChange(dealType);
    }

    onDateChange(date) {
        const {onDateChange} = this.props;
        let res = date.split(/-/);
        this.setState({date: new Date(res[2], res[1] - 1, res[0], 0, 0, 0, 0)});
        onDateChange(date);
    }

    onTimeStartChange(time) {
        const {onTimeStartChange, onTimeEndChange} = this.props;
        let first = time.split(/:/);
        let second = first[1].split(/ /);
        let time1=new Date(0, 0, 0, Number(first[0]), Number(second[0]), 0, 0, 0);
        let time2=(1 * (this.state.time1) > 1 * (this.state.time2))?new Date(0, 0, 0, Number(first[0])):this.state.time2;

        this.setState({time1: time1,time2:time2});
        onTimeStartChange(time1);
        onTimeEndChange(time2);
    }

    onTimeEndChange(time) {
        const {onTimeEndChange} = this.props;
        let first = time.split(/:/);
        let second = first[1].split(/ /);
        let time2= new Date(0, 0, 0, Number(first[0]), Number(second[0]), 0, 0, 0);
        this.setState({time2:time2});
        onTimeEndChange(time2);
    }




    maxDate = (addition) => {
        let today = new Date();
        return new Date(today.getFullYear(), today.getMonth(), today.getDate() + addition, 0, 0, 0, 0);
    };

    render() {
        const {style} = this.props;
        return (
            <View style={[styles.container, style]}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.subContentContainer}>
                        <Text style={styles.subTitleText}>Loại đội bóng :</Text>
                        <ModalDropdown
                            style={styles.modalDropDownContentView} options={filterOptions.teamType}
                            dropdownStyle={styles.dropDownStyle} dropdownTextStyle={styles.dropDownTextStyle}
                            defaultIndex={0}
                            onSelect={this.onTeamTypeChange}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.chosenText}>{this.state.teamType}</Text>
                                <Icon style={{alignSelf: 'flex-end'}} name="keyboard-arrow-down" size={height(3)}/>
                            </View>
                        </ModalDropdown>
                    </View>

                    <View style={styles.subContentContainer}>
                        <Text style={styles.subTitleText}>Độ tuổi :</Text>
                        <ModalDropdown
                            style={styles.modalDropDownContentView} options={filterOptions.age}
                            dropdownStyle={styles.dropDownStyle} dropdownTextStyle={styles.dropDownTextStyle}
                            onSelect={this.onAgeChange}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.chosenText}>{this.state.age}</Text>
                                <Icon style={{alignSelf: 'flex-end'}} name="keyboard-arrow-down" size={height(3)}/>
                            </View>
                        </ModalDropdown>
                    </View>

                    <View style={styles.subContentContainer}>
                        <Text style={styles.subTitleText}>Khu vực :</Text>
                        <ModalDropdown
                            style={styles.modalDropDownContentView} options={filterOptions.district}
                            dropdownStyle={styles.dropDownStyle} dropdownTextStyle={styles.dropDownTextStyle}
                            onSelect={this.onDistrictChange}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.chosenText}>{this.state.district}</Text>
                                <Icon style={{alignSelf: 'flex-end'}} name="keyboard-arrow-down" size={height(3)}/>
                            </View>
                        </ModalDropdown>
                    </View>

                    <View style={styles.subContentContainer}>
                        <Text style={styles.subTitleText}>Loại kèo :</Text>
                        <ModalDropdown
                            style={styles.modalDropDownContentView} options={filterOptions.dealType}
                            dropdownStyle={styles.dropDownStyle} dropdownTextStyle={styles.dropDownTextStyle}
                            onSelect={this.onDealTypeChange}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.chosenText}>{this.state.dealType}</Text>
                                <Icon style={{alignSelf: 'flex-end'}} name="keyboard-arrow-down" size={height(3)}/>
                            </View>
                        </ModalDropdown>
                    </View>


                    <View style={styles.subContentContainer}>
                        <Text style={styles.subTitleText}>Ngày :</Text>
                        <DatePicker
                            style={styles.modalDropDownContentView} customStyles={datePickerStyle}
                            date={this.state.date} showIcon={false}
                            mode="date" format="DD-MM-YYYY"
                            minDate={new Date()} maxDate={this.maxDate(7)}
                            androidMode='spinner'
                            onDateChange={this.onDateChange}
                        />
                    </View>


                    <View style={styles.subContentContainer}>
                        <Text style={styles.subTitleText}>Thời gian :</Text>
                        <View style={{flexDirection: 'row', width: '100%'}}>
                            <Text style={styles.contentText}>Từ: </Text>
                            <DatePicker
                                style={styles.timePickerStyle} customStyles={datePickerStyle}
                                date={this.state.time1}
                                showIcon={false} minTime={new Date()} minuteInterval={30} androidMode='spinner'
                                mode='time' format="HH:mm a"
                                onDateChange={this.onTimeStartChange}
                            />


                            <Text style={styles.contentText}>Đến:</Text>
                            <DatePicker
                                style={styles.timePickerStyle} customStyles={datePickerStyle}
                                date={this.state.time2} showIcon={false} androidMode='spinner'
                                minTime={this.state.time1} minuteInterval={10}
                                mode='time' format="HH:mm a" onDateChange={this.onTimeEndChange}
                            />
                        </View>

                    </View>
                </ScrollView>


            </View>

        )
    }
}

ChooseInfoStep.propTypes = propTypes;
ChooseInfoStep.defaultProps = defaultProps;

const styles = StyleSheet.create({
    container: {flex: 1,},
    scrollView: {height: '90%', width: '100%', flexGrow: 9},

    dropDownStyle: {width: '85%', marginLeft: 10},
    dropDownTextStyle: {textAlign: 'right'},
    chosenText: StyleSheet.flatten(blackText.subTitle),
    modalDropDownContentView: {
        width: '85%', marginLeft: 10, alignItems: 'flex-end',
        backgroundColor: '#2ecc71', borderRadius: 10,
    },

    timePickerStyle: {
        width: '30%', marginLeft: 10, marginRight: 20, alignItems: 'flex-end',
        backgroundColor: '#2ecc71', borderRadius: 10
    },
    subContentContainer: {margin: 10, width: '100%'},
    subTitleText: StyleSheet.flatten(greyText.subTitle),
    contentText: StyleSheet.flatten(greyText.data),

});