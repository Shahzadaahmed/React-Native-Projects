import React from 'react'
import
{
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    ScrollView,
    Platform,
    Alert,
    KeyboardAvoidingView,
    BackHandler,
    TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {Colors} from '../../../style';
import {sendAuthSMS, getFbData, getGmailData, getAppleData, socialMediaId, countryCode, getSignupStaticdata} from '../../redux/auth/auth.action';
import Images from '../../common/Images';
import PhoneInput from "react-native-phone-number-input"
import Toast from '../ToastFlashMessage';
import {theme} from '../../common';
import
{
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {getData, setData} from '../../common/Methods';
import normalize from 'react-native-normalize';
import {appleAuth, appleAuthAndroid} from '@invertase/react-native-apple-authentication';
import icons from '../../../assets/icons';
import Buttons from '../../common/comButton';
import Loader from '../../common/Loader';
import {compose} from 'redux';


// ADD INTERFACE FOR PROPS
interface Props
{
    // using interface
    navigation: any;
    navigate: any;
    countryCode: string;
    phoneNumber: string;
    languageId: string;
    sendSMS: CallableFunction;
    defaultCode: string;
    data: any;
    isFetching: boolean;
    screen_refresh: CallableFunction;
    interval: CallableFunction;
    find: CallableFunction;
    JSONObj: any;
    obj: any;
    modalVisible: Boolean;
    facebookUserInfo: any;
    getCountryCode: any;
    getFbData: CallableFunction;
    getGmailData: CallableFunction;
    getAppleData: CallableFunction;
    socialMediaId: CallableFunction;
    getSignupStaticdata: CallableFunction;
    staticSignupdata: any;

};


// ADD INTERFACE FOR STATE
interface IState
{
    countryCode: any;
    languageId: number;
    phoneNumber: any;
    callingCode: any;
    translationData: any;
    isFetching: any;
    loading: any;
    setFormatValue: any;
    timer: any;
    modalVisible: any;
    userInfo: any;
    textDirection: string | undefined | null;
    versionData: any;
    currentCountryCode: any;
    staticSignupdata: any;
    countriesList: any;
    countriesCodeNumber: any;
    COUNTRY_CODES: any;


}





// REF 
let ref: any = '';

class Login extends React.Component<Props, IState> {
    constructor(props: Props)
    {
        const {navigation} = props;
        super(props);
        // ADD STATE

        this.state = {
            countryCode: '',
            languageId: 1,
            phoneNumber: '',
            callingCode: '+91',
            translationData: '',
            //isFetching: false,
            loading: false,
            setFormatValue: '',
            timer: 30,
            modalVisible: false,
            userInfo: '',
            textDirection: 'L',
            countriesList: null,
            countriesCodeNumber: '92',
            COUNTRY_CODES: null



        };
    }


    componentDidMount = () =>
    {
        this.props.getSignupStaticdata();
        this.check_fb_user();
        // this.init_facebook();
        this.screen_refresh();
        this.google_signin();

        GoogleSignin.configure({
            scopes: ["https://www.googleapis.com/auth/userinfo.profile"],
            webClientId: '538454994099-foodq9vn4a0s5f2e8clk82dcbqr1ugfk.apps.googleusercontent.com', // CLIENT ID '538454994099-lam01tsghbvce5o8jpfquboo4rg5cs0n.apps.googleusercontent.com'
            offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            iosClientId: '538454994099-5d4thjkrqmbl0i0mvtb43pqc64rvmqn6.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        });
    }

    //TO CHECK IF SOCIAL USER AVIALABLE IN DB
    social_user_available = async (socialMediaId: number) =>
    {
        this.props.socialMediaId({
            data:
            {
                socialMediaId: socialMediaId
            },
            navigation: this.props.navigation,
            textDirection: this.state.textDirection,
        });
    }

    get_country_code = async () =>
    {
        let COUNTRY_CODES: any = await getData('COUNTRY_CODES');
        let List = JSON.parse(COUNTRY_CODES);
        let countryCode = await getData('countryCode');
        this.setState({countriesList: COUNTRY_CODES})
        if (COUNTRY_CODES)
        {
            for (let i = 0; i < List.length; i++)
            {
                if (countryCode === List[i].country_id)
                {
                    this.setState({countriesCodeNumber: List[i].phonecode})
                }
            }
        }
        if (countryCode == "" || countryCode == null)
        {
            this.setState({countryCode: 'AF'});

            // Toast.Message(this.state.translationData.lbl_network_failed, theme.colors.error);
        }
        else
        {
            this.setState({countryCode: countryCode});
        }
    }

    //CHECK FB USER IN DB
    check_fb_user = async () =>
    {
        var a = await getData('FbSignIN');
        var c = await getData('AppleLogin');
        if (a)
        {
            let userinfo = JSON.parse(a);
            this.navigateSocial(userinfo.userID);
        }
        else if (c)
        {

        }
    }


    //INIT SCREEN DATA
    async screen_refresh()
    {
        this.get_country_code();
        let lang = await getData('languageId');
        let data: any = await getData('APP_VERSION');
        let textD = await getData('TEXT_DIRECTION');
        this.setState({translationData: JSON.parse(data), languageId: Number(lang), textDirection: textD});
    }

    //WHEN BACK PRESSED
    back_pressed = () =>
    {
        Alert.alert(
            this.state.translationData.lblExitApp,
            this.state.translationData.lblDoYouWantToExit,
            [
                {text: this.state.translationData.lbl_no, onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: this.state.translationData.lbl_yes, onPress: () => BackHandler.exitApp()},
            ],
            {cancelable: false});
        return true;
    }

    //INIT GOOGLE SIGN IN
    init_google = async () =>
    {
        try
        {
            this.setState({modalVisible: true});
            await GoogleSignin.hasPlayServices({
                showPlayServicesUpdateDialog: true,
            });

            const userInfo = await GoogleSignin.signIn();
            if (userInfo)
            {
                const user = {
                    "column": {
                        "googleid": userInfo.user.id,
                        "namefirst": userInfo.user.givenName,
                        "namelast": userInfo.user.familyName,
                        "email": userInfo.user.email,
                        "urlprofileimage": userInfo.user.photo
                    }
                };


                //    await setData('GoogleSingIN', JSON.stringify(userInfo) );
                //    await setData('UserSession', 'In');
                this.props.getGmailData({
                    data: user,
                    navigation: this.props.navigation
                })
                this.setState({modalVisible: false});
                this.navigateSocial(userInfo.user.id);
            }
        }
        catch (error: any)
        {
            console.log('Message', error.message);
            if (error.code === statusCodes.SIGN_IN_CANCELLED)
            {
                console.log('User Cancelled the Login Flow');
            }
            else if (error.code === statusCodes.IN_PROGRESS)
            {
                console.log('Signing In');
            }
            else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE)
            {
                console.log('Play Services Not Available or Outdated');
            }
            else
            {
                console.log('Some Other Error Happened', error);
            }
        }
    };
    // FUCNTION TO CHECK USER IS SINGED IN OR NOT
    google_signin = async () =>
    {
        this.setState({modalVisible: true});
        const isSignedIn = await getData('GoogleSingIN');
        if (isSignedIn)
        {
            let user = JSON.parse(isSignedIn);
            let socialId: any = user.user.id;
            this.navigateSocial(socialId);
        }
        else
        {
            console.log('Please Login');
        }
    };

    //TO NAVIGATE WHEN SOCIAL IS CLICKED
    navigateSocial = (id: any) =>
    {
        if (id) this.social_user_available(id);
    }

    // TO GET USER LOGIN INFO
    getCurrentUserInfo = async (userInfoTwo: any) =>
    {
        try
        {
            this.setState({modalVisible: true});
            const userInfo = await GoogleSignin.signInSilently();
            if (userInfo)
            {
                await setData('GoogleSingIN', JSON.stringify(userInfo));
                this.setState({userInfo: userInfo})
                this.navigateSocial(userInfoTwo.user.id);
            }
        }
        catch (error: any)
        {
            if (error.code === statusCodes.SIGN_IN_REQUIRED)
            {
                console.log('User has not signed in yet');
            }
            else
            {
                console.log("Something went wrong. Unable to get user's info");
            }
        }
    };

    //FB AUTH
     initUser(data: any)
    {
        fetch('https://graph.facebook.com/v2.5/me?fields=email,first_name,last_name,picture&access_token=' + data.accessToken)
        .then((response) => response.json())
        .then((json) =>
        {

            console.log("**************************", json)
            const user = {
                "column": {
                    "facebookid": json.id,
                    "namefirst": json.first_name,
                    "namelast": json.last_name ? json.last_name : "",
                    "email": json.email ? json.email : "",
                    "urlprofileimage": json.picture ? json.picture.data.url : ""
                }
            }
            this.props.getFbData({
                data: user,
                navigation: this.props.navigation
            })
        })
    }



    //INIT WHEN FB IS CLICKED
    init_facebook = async () =>
    {
        try
        {
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
            if (result.isCancelled)
            {
                throw 'User cancelled the login process';
            }

            const data = await AccessToken.getCurrentAccessToken();
           
             this.initUser(data)


            if (!data)
            {
                throw 'Something went wrong obtaining access token';
            }
            else
            {

             
                // let id = data.userID;
                // this.navigateSocial(id)

            }

        } catch (error)
        {
            console.log(error, 'fb error');
        }
    }

    //INIT WHEN APPLE IS CLICKED
    init_apple = async () =>
    {
        try
        {
            const appleAuthRequestResponse = await appleAuth.performRequest({
                requestedOperation: appleAuth.Operation.LOGIN,
                requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
            });
            const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
            if (credentialState === appleAuth.State.AUTHORIZED)
            {
                const response = appleAuthRequestResponse;
                const user = {
                    'appleid': response.user,
                    'namefirst': response.fullName ? response.fullName.givenName : '-',
                    'namelast': response.fullName ? response.fullName.familyName : '-',
                    'email': response.email,
                    urlprofileimg: " "
                }
                this.props.getAppleData({
                    data: user,
                    navigation: this.props.navigation
                })
                setData('AppleLogin', JSON.stringify(user));
                this.props.navigation.navigate('profileSetup');  //To send user to next screen
                this.navigateSocial(appleAuthRequestResponse.user)
            }

        } catch (error)
        {
            console.log(error, 'ios error')
        }
    };


    //OTP SEND FUNCTION
    send_otp = (id: number) =>
    {
        const res = /^\d+$/.test(this.state.phoneNumber);;
        if (!res)
        {
            // Toast.Message(this.state.translationData?.lbl_EnterOnlyDiigits, '', theme.colors.error);
            this.setState({loading: false});
            return;
        }
        if (this.state.phoneNumber.length == 10)
        {

            this.setState({loading: true});
            this.props.sendSMS({
                data: {
                    // appType: Platform.OS === 'ios' ? 1 : 2,
                    // languageId: this.state.languageId,
                    mobile: `+${this.state.countriesCodeNumber}${this.state.phoneNumber}`
                }, navigation: this.props.navigation
            });
            setData('contact', this.state.setFormatValue);

            setTimeout(() => {this.setState({loading: false});}, 10000);
        }
        else
        {
            // Toast.Message(this.state.translationData?.lbl_phoneValidation, '', theme.colors.error);
            this.setState({loading: false});
        }
    }

    //TO GO BACK FROM THE PAGE
    go_to_language = async (e: any) =>
    {
        e && e.preventDfault && e.preventDefault()
        let session = await getData('UserSession');

        if (session === 'In')
        {
            this.back_pressed();
        }
        else
        {
            this.props.navigation.navigate('Language');
        }
    }

    // on Change Phone Statw
    onChangePhone = async (value: any, phonecode: any) =>
    {
        this.setState({countryCode: value, countriesCodeNumber: phonecode});
    }

    render()
    {
        return (
            <View style={styles.container}>

                {/* <Loader loading={this.props.isFetching} /> */}
                <ScrollView
                    keyboardShouldPersistTaps='handled'
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}>
                    <KeyboardAvoidingView>
                        <>
                            <View style={{
                                marginTop: Platform.OS === 'ios' ? normalize(20) : -20,
                                flexDirection: this.state.textDirection == "R" ? 'row-reverse' : 'row'
                            }}>
                                <TouchableOpacity onPress={(e) => this.go_to_language(e)} style={styles.backLanguage}>
                                    <Image source={icons.backCrossIcon} style={styles.backCrossIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.logoStyle}>
                                <Image source={icons.Logo} resizeMode='contain' style={styles.logoImageStyle} />
                            </View>

                            <View style={[styles.loginText, {flexDirection: this.state.textDirection == "R" ? 'row-reverse' : 'row', }]}>
                                <Text style={[styles.headingText]}>{this.state.translationData?.lbl_SignuporLogin}</Text>
                            </View>

                            <View style={[styles.inpuStyle, {justifyContent: this.state.textDirection == 'R' ? 'flex-end' : 'flex-start'}]}>
                                <Text style={[styles.inputText]}>{this.state.translationData?.lbl_PhoneNo2}</Text>
                            </View>
                            {(this.state.countryCode && this.state.countryCode.length) > 0 &&
                                <View style={styles.outerContainer}>
                                    <View style={styles.innerContainer}>
                                        <Text style={styles.fieldName} onPress={() => this.props.navigation.navigate('CountriesList', {countriesList: this.state.countriesList, onChangePhone: this.onChangePhone, countryCode: this.state.countryCode})}>
                                            {` + ${this.state.countriesCodeNumber}`}
                                        </Text>
                                        <View style={styles.textInputContainer}>
                                            <TextInput
                                                ref={input => ref = input}
                                                placeholder={'Phone Number'}
                                                keyboardType="numeric"
                                                onChangeText={(value) =>
                                                {
                                                    this.setState({ phoneNumber: value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '') });
                                                }
                                                }
                                            />
                                        </View>
                                    </View>
                                </View>
                            }
                            {/*  <View style={{display: 'flex',flexDirection:'row',width:'100%',justifyContent: 'center',alignItems: 'center'}}>
                                {(this.state.countryCode && this.state.countryCode.length) > 0 &&
                                    <PhoneInput
                                        layout="first"
                                        defaultCode={this.state.countryCode}
                                        onChangeText={(value) =>
                                        {
                                            this.setState({phoneNumber: value})
                                        }
                                    }
                                    onChangeFormattedText={(text) => this.setState({ setFormatValue: text })}
                                    containerStyle={[styles.newInputStyle]}
                                    textContainerStyle={{ alignSelf: 'center'}}
                                    flagButtonStyle={{ width: 35}}
                                    textInputProps={{ style: { height: 40,width:"100%",marginTop: Platform.OS == 'ios' ? 0 : 4,fontSize:16,fontFamily:'Montserrat',textAlign: this.state.textDirection == "R" ? 'right' : 'left'}}}
                                    placeholder={this.state.translationData?.lbl_placeholder}
                                    disableArrowIcon={true}
                                />}
                            </View> */}

                            {
                                this.state.loading ? (
                                    <ActivityIndicator
                                        size={"large"}
                                        color={Colors.buttonText}
                                        style={{marginTop: normalize(15)}}
                                    />
                                ) : (
                                    <Buttons title={'Continue'} onPress={() => this.send_otp(1)} style={{marginTop: normalize(15), width: '92%'}} />
                                )
                            }
                            <View style={styles.agreeMainDiv}>

                                <View style={styles.policy_container}>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: this.state.textDirection == "R" ? 'row-reverse' : 'row',
                                        width: '100%',
                                    }}>

                                        <Text style={styles.agreeText}>{'By continuing you agree to our '} </Text>
                                        <Text style={styles.termsPolicyText} onPress={() => this.props.navigation.navigate('termsComponent')}>{'terms of service'}</Text>
                                        <Text style={styles.agreeText}> {'and'} </Text>
                                    </View>
                                    <Text style={styles.termsPolicyTextPolicy} onPress={() => this.props.navigation.navigate('policyComponent')}>{'privacy policy'}</Text>
                                </View>
                            </View>

                            <View style={styles.breakLineSocial}>
                                <View style={styles.breackLine}>
                                    <View style={styles.mainLine}></View>
                                    <Text style={{margin: 10, fontSize: 12, fontFamily: "Montserrat", color: "#BEBECD"}}>{'Or use'} </Text>
                                    <View style={styles.mainLine}></View>
                                    {/* <Image source={Images.LoginLine} /> */}
                                </View>
                                <View style={styles.socialIconStyle}>
                                    {
                                        Platform.OS === 'ios' ? (
                                            <TouchableOpacity onPress={() => {this.init_apple()}}><Image source={Images.Apple} />
                                            </TouchableOpacity>
                                        ) : null
                                    }
                                    <TouchableOpacity onPress={() => {this.init_google()}}><Image source={Images.Google} /></TouchableOpacity>
                                    <TouchableOpacity onPress={() => {this.init_facebook()}}><Image source={Images.Facebook} /></TouchableOpacity>
                                </View>
                            </View>
                        </>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state: any) =>
{
    return {
        // isFetching: state.AuthReducers.sendAuthSMS?.isFetching,
        versionData: state.AuthReducers.checkAppVersion?.appVersion,
        currentCountryCode: state.AuthReducers.countryCodeStateReducer?.countryCode,
        isFetching: state.AuthReducers.isFetching,
        staticSignupdata: state.AuthReducers.staticSignupdata
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    sendSMS: (params: any) => dispatch(sendAuthSMS(params)),
    socialMediaId: (params: any) => dispatch(socialMediaId(params)),
    countryCode: (params: any) => dispatch(countryCode(params)),
    getFbData: (params: any) => dispatch(getFbData(params)),
    getGmailData: (params: any) => dispatch(getGmailData(params)),
    getAppleData: (params: any) => dispatch(getAppleData(params)),
    getSignupStaticdata: () => dispatch(getSignupStaticdata())
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor
    },
    backLanguage: {
        width: 35,
        height: 35,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 40,
    },
    logoStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: normalize(10),
    },
    logoImageStyle: {
        width: normalize(131),
        height: normalize(140),
    },
    loginText: {
        justifyContent: 'center',
        marginTop: normalize(20),
    },
    headingText: {
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '600',
        color: Colors.headingTextColor,
    },
    backCrossIcon: {
        width: normalize(50),
        height: normalize(50),
    },
    inpuStyle: {
        flexDirection: 'row',
        marginTop: normalize(25),
        marginLeft: 15,
        marginRight: 20,
    },
    inputText: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        color: Colors.TextInputTextColor,
    },
    agreeMainDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: normalize(10),
        width: '100%'
    },
    agreeText: {
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
        color: Colors.grayColor,
        marginTop: 5,
        fontFamily: 'Montserrat'
    },
    termsPolicyText: {
        fontSize: 12,
        fontStyle: 'normal',
        fontFamily: "Montserrat",
        color: Colors.logoColor,
        marginTop: 5,
    },
    termsPolicyTextPolicy: {
        fontSize: 12,
        fontStyle: 'normal',
        color: Colors.logoColor,
        fontFamily: "Montserrat",
        marginTop: 1,
    },
    breackLine: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 15,
        paddingHorizontal: 20,
        width: '92%',
        display: 'flex',
        alignItems: 'center',
    },
    mainLine: {
        borderBottomColor: '#E0E0EA',
        borderBottomWidth: 1,
        width: '30%',
        padding: normalize(2)
    },
    breakLineText: {
        fontSize: 10,
        fontStyle: 'normal',
        color: Colors.loginBreakLineText,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    breakLineSocial: {
        justifyContent: 'space-evenly',
        marginTop: normalize(20),
    },

    socialIconStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: normalize(15),
        height: 120
    },

    policy_container: {
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%',
    },

    newInputStyle: {
        height: Platform.OS == 'android' ? 50 : 55,
        width: '92%',
        overflow: 'hidden',
        backgroundColor: Colors.textInputColor,
        borderRadius: 16,
        marginTop: normalize(5),
        color: '#000000',
        paddingHorizontal: 20,

    },
    textContainerStyle: {
        height: 70,
    },
    row: {
        flex: 1,
        flexDirection: "row"
    },
    inputWrap: {
        flex: 1,
        borderColor: "#cccccc",
        borderBottomWidth: 1,
        marginBottom: 10
    },
    inputdate: {
        fontSize: 14,
        marginBottom: -12,
        color: "#6a4595"
    },
    outerContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
    },
    innerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        flex: 0.95,
        flexDirection: 'row',
        height: Platform.OS == 'android' ? 50 : 55,
        width: '100%',
        overflow: 'hidden',
        backgroundColor: Colors.textInputColor,
        borderRadius: 16,
        marginTop: normalize(5),
        color: '#000000',
        paddingHorizontal: 20,
    },
    fieldName: {
        flex: 1,
    },
    textInputContainer: {
        flex: 3,
    },
});
