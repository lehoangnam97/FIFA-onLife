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
import {subText} from "../../styles/text";
import {defaultRegion} from "../../config/map";
import {
    backgroundColor, backgroundColor2, contentColor, contentColor2, mainColor,
    mainColor2
} from "../../styles/color";
import {iconSize} from "../../styles/icon";


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
                        <Icon size={iconSize.small} name="keyboard-arrow-left" color={backgroundColor}/>
                        <Text style={styles.stepButtonText}>Trở về</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.stepButton} onPress={this.onPressFollowingStep}>
                        <Text style={styles.stepButtonText}>{this.state.currentStep!==2?"Tiếp theo":"Đăng kèo"}</Text>
                        <Icon size={iconSize.small} name="keyboard-arrow-right" color={backgroundColor}/>
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
    container: {flex: 1, backgroundColor:backgroundColor},
    stepButtonContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor:'transparent'
    },
    stepButtonText: StyleSheet.flatten(subText.whiteColor),
    stepButton: {
        width: '30%', flexDirection: 'row',
        height:30,
        borderRadius: 30,
        backgroundColor: mainColor, alignItems: 'center',
        justifyContent: 'center',
        margin:3
    },
});

const customStyles = {
    stepIndicatorSize: 45,
    currentStepIndicatorSize: 55,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: mainColor2,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: mainColor2,
    stepStrokeUnFinishedColor: backgroundColor2,
    separatorFinishedColor: mainColor2,
    separatorUnFinishedColor: backgroundColor2,
    stepIndicatorFinishedColor: mainColor2,
    stepIndicatorUnFinishedColor: backgroundColor2,
    stepIndicatorCurrentColor: mainColor,
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: backgroundColor2,
    stepIndicatorLabelFinishedColor: backgroundColor2,
    stepIndicatorLabelUnFinishedColor: contentColor2,
    labelColor: contentColor2,
    labelSize: 13,
    currentStepLabelColor: contentColor
};
