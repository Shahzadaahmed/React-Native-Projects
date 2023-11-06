import React, {useEffect, useState, FC, useCallback} from 'react'
import
{
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    Platform,
    KeyboardAvoidingView
} from 'react-native';
import {ActivityIndicator, Button} from 'react-native-paper';
import {connect} from 'react-redux';
import {Colors} from '../../../style';
import {getData, setData} from '../../common/Methods';
import {otpVerify, sendAuthSMS, userVerifyOtp, userResendVerifyOtpAction} from '../../redux/auth/auth.action';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Toast from '../ToastFlashMessage';
import {theme} from '../../common';
import normalize from 'react-native-normalize';
import icons from '../../../assets/icons';
import Buttons from '../../common/comButton';
import RNOtpVerify from 'react-native-otp-verify';




interface Props
{
    // using interface 
    navigation: any;
    navigate: any;
    countryCode: string;
    phoneNumber: string;
    languageId: string;
    verify_otp: CallableFunction;
    defaultCode: string;
    smsData: any;
    screen_refresh: CallableFunction;
    mobileNum: string;
    send_sms: CallableFunction;


    userVerifyOtp: CallableFunction;
    userResendOtp: CallableFunction;
    route: any;
};

interface IState
{
    countryCode: any;

    languageId: number;
    phoneNumber: any;
    code: any;
    translationData: any;
    userId: number;
    timer: any;
    userCode: any;
    loading: any;
    voiceCallData: any;
    textD: string;
    detectedOTP: string;
}

let userID;

class Login extends React.Component<Props, IState> {
    interval: any;

    constructor(props: Props)
    {
        super(props);

        this.state = {

            countryCode: 'IN',
            languageId: 1,
            phoneNumber: 1,
            code: '',
            translationData: '',
            userId: (props.route && props.route.params) ? props.route.params.userId : "",
            timer: 30,
            userCode: '',
            loading: false,
            voiceCallData: '',
            textD: 'L',
            detectedOTP: ''

        };
    }

    //OTP AUTO FILL FUNCTIONS
    componentDidMount = async () =>
    {


        this.screen_refresh();
        this.counter_interval();
        RNOtpVerify.getHash()
            .then((p => console.log(p, "hash")))
            .catch(p => console.log(p, "hashTwo"));

        RNOtpVerify.getOtp()
            .then(p => RNOtpVerify.addListener(this.otp_handler))
            .catch(p => console.log(p, ""));


    }

    //TIMER FOR SEND AND RESEND OTP
    counter_interval = () => 
    {
        this.interval = setInterval(
            () => this.setState({
                timer: this.state.timer - 1
            }, () =>
            {
                if (this.state.timer === 0)
                {
                    clearInterval(this.interval);
                }
            }), 1000);
    }

    //SCREEN INITIALIZE DATA

    screen_refresh = async () => 
    {
        let data: any = await getData('APP_VERSION');
        this.setState({translationData: JSON.parse(data)});
        console.log(this.props?.smsData, 'data from smsData');
        let userID = await getData('USER_ID');
        console.log(userID, 'userID');

        let LANGUAGE_ID = await getData('languageId');
        let textD: any = await getData('TEXT_DIRECTION');
        this.setState({languageId: Number(LANGUAGE_ID), phoneNumber: this.props?.mobileNum, textD: textD});

    }



    //DETECTED OTP WE GET HERE
    otp_handler = async (message: string) => 
    {
        const otp = /(\d{4})/g.exec(message)[1];
        await this.setState({detectedOTP: otp, userCode: otp})
        if (otp.length > 0)
        {
            this.verify_otp(1);
        }
        RNOtpVerify.removeListener();
    }

    //WHEN VERIFY OTP
    verify_otp = async (code: any) => 
    {

        this.setState({loading: true});

        this.props.userVerifyOtp({
            data:
            {

                "otpmobile": parseInt(this.state.userCode),
                "mobile": this.props.mobileNum

            },
            navigation: this.props.navigation, textD: this.state.textD
        });


        setTimeout(() => {this.setState({loading: false});}, 4000);

    }



    //TO RESEND OTP
    resend_otp = () => 
    {
        this.props.userResendOtp({
            data:
            {
                "mobile": this.props.mobileNum

            },
            navigation: this.props.navigation, textD: this.state.textD
        });
        this.setState({timer: 30});
        this.counter_interval();
        setTimeout(async () =>
        {
            this.setState({code: this.props?.smsData.verificationCode, });
        }, 5000);

    }

    render()
    {
        return (
            <View style={styles.container}>
                <View style={{
                    marginTop: Platform.OS === 'ios' ? normalize(20) : -20,
                    flexDirection: this.state.textD == "R" ? 'row-reverse' : 'row'
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('loginComponent')} style={styles.backLanguage}>
                        <Image source={icons.backCrossIcon} style={styles.backCrossIcon} />
                    </TouchableOpacity>
                </View>
                <KeyboardAvoidingView style={{flexGrow: 1}} behavior={Platform.OS == 'ios' ? 'padding' : 'height'} enabled={true}>
                    <ScrollView>
                        <>
                            <View style={styles.logoStyle}>
                                <Image source={icons.Logo} resizeMode='contain' style={styles.logoImageStyle} />
                            </View>
                            <View style={styles.textCenter}>
                                <Text style={styles.headingText}>{'Verification code'} </Text>
                            </View>
                            <View style={styles.textCenter}>
                                <OTPInputView
                                    style={{width: '70%', height: 30, marginVertical: 20}}
                                    pinCount={4}
                                    code={this.state.detectedOTP}
                                    onCodeChanged={value => {this.setState({detectedOTP: value})}}
                                    onCodeFilled={(async (code) =>
                                    {
                                        {
                                            const re = /[0-9]+/;
                                            await this.setState({userCode: code, loading: false, detectedOTP: code});
                                            if (code)
                                            {
                                                this.verify_otp(1);
                                            }
                                        }
                                    })}
                                    codeInputFieldStyle={styles.underlineStyleBase}
                                />
                            </View>
                            {
                                this.state.timer != 0 ? (
                                    <View style={styles.textCenter}>
                                        <Text style={[styles.resendOtpText, {marginBottom: 30}]}>{'Resend code in '} 0:{this.state.timer}</Text>
                                    </View>
                                ) : (
                                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 40, marginBottom: 10}}>
                                        <Text onPress={() => this.resend_otp()} style={[styles.resendOtpText, {color: '#0E5561'}]}>Resend</Text>

                                    </View>

                                )
                            }

                            {
                                this.state.loading ? (
                                    <ActivityIndicator
                                        size={"large"}
                                        color={Colors.buttonText}
                                    />
                                ) : (
                                    <Buttons title={'Continue'} onPress={() => this.verify_otp(1)} />
                                   
                                )
                            }
                        </>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }

}



const mapStateToProps = (state: any) =>
{
    // isFetching: state.MainReducers.getSliderImages,
    return {
        smsData: state.AuthReducers.sendAuthSMS?.smsData,
        mobileNum: state.AuthReducers.mobileNumber,
        voiceCallData: state.AuthReducers.voiceCall?.voiceCallData,

    }
};

const mapDispatchToProps = (dispatch: any) => ({
    verify_otp: (params: any) => dispatch(otpVerify(params)),
    send_sms: (params: any) => dispatch(sendAuthSMS(params)),

    userVerifyOtp: (params: any) => dispatch(userVerifyOtp(params)),
    userResendOtp: (params: any) => dispatch(userResendVerifyOtpAction(params)),
    // checkApp: (params: any) => dispatch(checkAppVersion(params)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-around',
        backgroundColor: Colors.backgroundColor
    },
    backLanguage: {
        // flex:1,
        width: 35,
        height: 35,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 10,
        marginTop: 40,
    },
    backCrossIcon: {
        width: normalize(50),
        height: normalize(50),

    },
    logoStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: normalize(25),
    },
    logoImageStyle: {
        width: normalize(131),
        height: normalize(140),
    },
    textCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    },

    headingText: {
        fontSize: normalize(26),
        // fontFamily:'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
        color: Colors.headingTextColor,
    },
    resendOtpText: {
        fontSize: 14,
        fontStyle: 'normal',
        color: '#818C99',
        fontWeight: '500',
        marginBottom: 30
    },
    inpuStyle: {

        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 20,
        marginLeft: 15,
    },
    inputText: {
        fontSize: 14,
        fontStyle: 'normal',
        color: Colors.headingTextColor,
    },
    agreeMainDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 0
    },
    agreeText: {
        fontSize: 14,
        fontStyle: 'normal',
        color: Colors.headingTextColor,
        marginLeft: 15,
        marginTop: 15,
        marginRight: 15,
    },
    breackLine: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50
    },
    breakLineText: {
        fontSize: 10,
        fontStyle: 'normal',
        color: Colors.loginBreakLineText,
        marginLeft: 15,
        marginTop: 10,
        marginRight: 15,
    },

    bgImage: {
        width: '50%',
    },
    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 12,
        opacity: 1,
    },


    underlineStyleBase: {
        width: 48,
        height: 48,
        borderWidth: 0,
        // borderBottomWidth: 1,
        backgroundColor: Colors.textInputColor,
        borderRadius: 16,
        color: '#818C99'
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
    button:
    {
        alignItems: 'center',
        backgroundColor: '#FABC5A',
        width: "90%",
        alignSelf: 'center',
        height: 53,
        justifyContent: 'center',
        borderRadius: 15,
        opacity: 1,

    },
});