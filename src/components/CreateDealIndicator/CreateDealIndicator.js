import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

import StepIndicator from 'react-native-step-indicator';
import {ProgressDialog} from 'react-native-simple-dialogs';
import {ConfirmDialog} from 'react-native-simple-dialogs';
import {height, width} from 'react-native-dimension';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types'
import ChooseInfoStep from "./ChooseInfoStep";
import ChooseAddressStep from "./ChooseAddressStep";
import PostDealStep from "./PostDealStep";
import {SUB_TEXT_STYLES} from "../../styles/text";
import {defaultRegion} from "../../config/map";
import {
    BACKGROUND_COLOR, BACKGROUND_COLOR_TWO, CONTENT_COLOR, CONTENT_COLOR_TWO, PRIMARY_COLOR,
    PRIMARY_COLOR_TWO
} from "../../styles/color";
import {ICON_SIZE} from "../../styles/icon";


const propTypes = ({
    style: PropTypes.any,
    onPressPostDeal: PropTypes.func,
    onPressBack: PropTypes.func,
    onDealChange: PropTypes.func,
});

const defaultProps = {
    style: {},
    onPressPostDeal() {
    },
    onPressBack() {
    },
    onDealChange() {
    }
};


let date=new Date();
let time1= new Date(0, 0, 0, new Date().getHours(), new Date().getMinutes(), 0, 0);
let time2=new Date(0, 0, 0, new Date().getHours() + 1, new Date().getMinutes(), 0, 0);


export default class CreateDealIndicator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deal: {
                id: "",
                latitude: defaultRegion.latitude,
                longitude: defaultRegion.longitude,
                position: "Tất cả",
                type: "Tất cả",
                age: "Tất cả",
                district: "Tất cả",
                dealType:"Khác",
                date: "",
                time1:"",
                time2:"",
                addressText:"",
            },
            currentStep: 0,
            alert: "Thành công",
            alertVisible: false,
            progressVisible: false,
        };

        this.onPressPostDeal = this.onPressPostDeal.bind(this);
        this.onPressBack = this.onPressBack.bind(this);
        this.onLatitudeChange = this.onLatitudeChange.bind(this);
        this.onLongitudeChange = this.onLongitudeChange.bind(this);
        this.onDealChange = this.onDealChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.onTeamTypeChange = this.onTeamTypeChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onTimeStartChange = this.onTimeStartChange.bind(this);
        this.onTimeEndChange = this.onTimeEndChange.bind(this);
        this.onDealTypeChange = this.onDealTypeChange.bind(this);
        this.onDistrictChange = this.onDistrictChange.bind(this);
    }


    onPressPostDeal() {
        const {onPressPostDeal} = this.props;
        onPressPostDeal();
    }

    onPressBack() {
        const {onPressBack} = this.props;
        onPressBack();
    }

    onDealChange(newDeal) {
        const {onDealChange} = this.props;
        onDealChange(newDeal);
        this.setState({deal: newDeal});
        console.log(this.state.deal);
    }

    onTeamTypeChange(teamType) {
        let newDeal = Object.assign({}, this.state.deal);
        newDeal.type = teamType;
        this.onDealChange(newDeal);
    };

    onAgeChange(age) {
        let newDeal = Object.assign({}, this.state.deal);
        newDeal.age = age;
        this.onDealChange(newDeal);
    }

    onDealTypeChange(dealType) {
        let newDeal = Object.assign({}, this.state.deal);
        newDeal.dealType = dealType;
        this.onDealChange(newDeal);
    };

    onDistrictChange(district) {
        let newDeal = Object.assign({}, this.state.deal);
        newDeal.district = district;
        this.onDealChange(newDeal);
    };

    onDateChange(date) {
        let newDeal = Object.assign({}, this.state.deal);
        newDeal.date = date;
        this.onDealChange(newDeal);
    };

    onTimeStartChange(time1) {
        let newDeal = Object.assign({}, this.state.deal);
        newDeal.time1 = time1;
        this.onDealChange(newDeal);
    };

    onTimeEndChange(time2) {
        let newDeal = Object.assign({}, this.state.deal);
        newDeal.time2 = time2;
        this.onDealChange(newDeal);
    };

    onLatitudeChange(latitude) {
        let newDeal = Object.assign({}, this.state.deal);
        newDeal.latitude = latitude;
        this.onDealChange(newDeal);
    };

    onLongitudeChange(longitude) {
        let newDeal = Object.assign({}, this.state.deal);
        newDeal.longitude = longitude;
        this.onDealChange(newDeal);
    };

    onAddressChange(address){
        this.setState({addressText:address});
    }

    renderStep() {
        if (this.state.currentStep === 0)
            return (<ChooseInfoStep
                onTeamTypeChange={this.onTeamTypeChange}
                onDistrictChange={this.onDistrictChange}
                onAgeChange={this.onAgeChange}
                onTimeStartChange={this.onTimeStartChange}
                onTimeEndChange={this.onTimeEndChange}
                onDealTypeChange={this.onDealTypeChange}
                onPressPreviousStep={this.onPressBack}
                onPressFollowingStep={() => {
                    this.setState({currentStep: 1})
                }}

            />);
        if (this.state.currentStep === 1)
            return (<ChooseAddressStep
                onLatitudeChange={this.onLatitudeChange}
                onLongitudeChange={this.onLongitudeChange}
                onAddressChange={this.onAddressChange}
                onPressFollowingStep={() => {
                    this.setState({currentStep: 2})
                }}
                onPressPreviousStep={() => {
                    this.setState({currentStep: 0})
                }}
            />);
        if (this.state.currentStep === 2)
            return (<PostDealStep deal={this.state.deal}/>);
        return (<View/>);
    }

    onPressPreviousStep = () => {
        if (this.state.currentStep > 0) {
            let newStep = this.state.currentStep - 1;
            this.setState({currentStep: newStep});
        }
        else  this.setState({alertVisible:false});

    };
    onPressFollowingStep = () => {
        if (this.state.currentStep < 2) {
            let newStep = this.state.currentStep + 1;
            this.setState({currentStep: newStep});
        }
        else this.onPressBack();
    };


    render() {
        const {style} = this.props;
        return (
            <View style={[styles.container, style]}>
                <StepIndicator
                    stepCount={3}
                    customStyles={customStyles}
                    currentPosition={this.state.currentStep}
                    labels={["Thêm thông tin kèo", "Tùy chọn vị trí", "Đăng tin"]}
                />


                {this.renderStep()}

                <View style={styles.stepButtonContainer}>
                    <TouchableOpacity style={styles.stepButton} onPress={this.onPressPreviousStep}>
                        <Icon size={ICON_SIZE.SMALL} name="keyboard-arrow-left" color={BACKGROUND_COLOR}/>
                        <Text style={styles.stepButtonText}>Trở về</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.stepButton} onPress={this.onPressFollowingStep}>
                        <Text style={styles.stepButtonText}>{this.state.currentStep!==2?"Tiếp theo":"Đăng kèo"}</Text>
                        <Icon size={ICON_SIZE.SMALL} name="keyboard-arrow-right" color={BACKGROUND_COLOR}/>
                    </TouchableOpacity>
                </View>

                <ConfirmDialog
                    title="Đăng bài"
                    message={this.state.alert}
                    visible={this.state.alertVisible}
                    onTouchOutside={() => this.setState({alertVisible: false})}
                    positiveButton={{
                        title: "OK",
                        onPress: () => {
                            this.onPressPostDeal();
                        },
                    }}
                />
                <ProgressDialog
                    visible={this.state.progressVisible}
                    title="Đăng bài"
                    message="Đang đăng..."
                />
            </View>
        )
    }
}

CreateDealIndicator.propTypes = propTypes;
CreateDealIndicator.defaultProps = defaultProps;


const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor:BACKGROUND_COLOR},
    stepButtonContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor:'transparent'
    },
    stepButtonText: StyleSheet.flatten(SUB_TEXT_STYLES.WHITE_COLOR),
    stepButton: {
        width: '30%', flexDirection: 'row',
        height:30,
        borderRadius: 30,
        backgroundColor: PRIMARY_COLOR, alignItems: 'center',
        justifyContent: 'center',
        margin:3
    },
});

const customStyles = {
    stepIndicatorSize: 45,
    currentStepIndicatorSize: 55,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: PRIMARY_COLOR_TWO,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: PRIMARY_COLOR_TWO,
    stepStrokeUnFinishedColor: BACKGROUND_COLOR_TWO,
    separatorFinishedColor: PRIMARY_COLOR_TWO,
    separatorUnFinishedColor: BACKGROUND_COLOR_TWO,
    stepIndicatorFinishedColor: PRIMARY_COLOR_TWO,
    stepIndicatorUnFinishedColor: BACKGROUND_COLOR_TWO,
    stepIndicatorCurrentColor: PRIMARY_COLOR,
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: BACKGROUND_COLOR_TWO,
    stepIndicatorLabelFinishedColor: BACKGROUND_COLOR_TWO,
    stepIndicatorLabelUnFinishedColor: CONTENT_COLOR_TWO,
    labelColor: CONTENT_COLOR_TWO,
    labelSize: 13,
    currentStepLabelColor: CONTENT_COLOR
};
