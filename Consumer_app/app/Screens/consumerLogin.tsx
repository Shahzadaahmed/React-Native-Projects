import React from 'react';
import { View, Image, StyleSheet, Text, TextInput, Modal, KeyboardAvoidingView, TouchableOpacity, ScrollView, Platform, BackHandler, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import  { windowWidth } from '../common/Constants';
import Images from '../common/Images';
import { connect } from 'react-redux';
import { userProfileImage , userProfileSetupData,socialResgistration, customerResgistration} from '../redux/auth/auth.action';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { getData } from '../common/Methods';
import RNFS from 'react-native-fs';
import axios from 'axios'






// USING INTERFACE
interface Props {
    navigation: any;
    navigate: any;
    languageId: string;
    getSliderImages: CallableFunction;
    sliderImageData: CallableFunction;
    customerResgistration: CallableFunction;
    socialRegistration: CallableFunction;
    userProfileImage: CallableFunction;
    userProfileSetupData: CallableFunction;
    modalVisibles: Boolean;
    isFetching: Boolean;
    userInfo: any;
    email: string;
    verifyData: any;
    translationData: any
    imageName: string
};
// SAMPLE CLASS FOR CUSTOMER PROFILE WILL IMPLEMENT IT WITH MAIN LOGIN FILE

class CustomerProfile extends React.Component<Props>{

    static navigationOptions = 
    {
        title: 'Login',
    };

        constructor(props:any){
            super(props);

            this.state =
            {
                email: '',
                password: '',
                confirmPassword: '',
                languageId: '1',
                fullName: '',
                datePickerVisibility: false,
                imgfile: '',
                modalVisibles: false,
                errorEmail: '',
                errordob: '',
                errorPassword: '',
                errorName: '',
                errorCnfrm: '',
                modalVisible: false,
                passDate: '',
                translationData: {},
                isGoogle: false,
                socialId: '',
                imageName: "",
                textDirection: 'L',
                customerId: props.route && props.route.params? props.route.params.customerID:0
            };

        }


    // VALIDATION FOR TEXTINPUT FIELD
    validation = () => 
    {
        const { email, password, passDate, fullName, confirmPassword, dob } = this.state;

        let msg = "";
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        let pass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
        console.log(this.state.translationData?.lbl_requiredField,' ======= requiredField text string')
        if (fullName == '' || fullName.length < 3 ) 
            {
            this.setState({ errorName: this.state.translationData?.lbl_Minimum3Char });
            return false;
        }
        else {
            this.setState({ errorName: '' });

            }
            if (passDate == '' || passDate == undefined)
            {
                this.setState({ errordob: this.state.translationData?.lbl_PickADate })
            return false;
            } 
            else 
            {
            this.setState({  errordob: '' });
            }
            if (email == '' || reg.test(email) == false) 
            {
                this.setState({ errorEmail: this.state.translationData?.lbl_EnterValidEmail });
            return false;
            } 
            else 
            {
            this.setState({  errorEmail: '' });
            }
            if ( pass.test(password) == false) 
            {
                this.setState({ errorPassword: this.state.translationData?.lbl_requiredField && this.state.translationData?.lbl_requiredField.length > 0 ? this.state.translationData?.lbl_requiredField.split("*").join(" ") : this.state.translationData?.lbl_requiredField });
            return false;
            } 
            else 
            {
            this.setState({  errorPassword: '' });
            }
            if (confirmPassword != password) 
            {
                this.setState({ errorCnfrm: this.state.translationData?.lbl_PasswordNotMatch });

            return false;
        }
        else {
            this.setState({ errorCnfrm: '' });
        }
        return true;
    }

    //TO INIT ALL INPUTS DATA HERE
    sign_in_data = async () => 
    {
        var a: any = await getData('GoogleSingIN');
        var c: any = await getData('AppleLogin');
        var fb:any = await getData('FbSignIN');
        console.log(fb,a,c);
        let fbData = JSON.parse(fb);
        let b = JSON.parse(a);
        let d = JSON.parse(c);
        if(a){
            this.setState({ email: b.user.email, fullName: b.user.name, isGoogle: true, socialId: b.user.id, imgfile: b.user.photo });
        } 
        if (c) {
            this.setState({ email: d.email, fullName: d.fullName.givenName, isGoogle: true, socialId: d.user.id });
        }
        this.setState({imgfile: ''})
        if (fb) {
            this.setState({ email: fbData.email, fullName: fbData.name,  isGoogle: true, socialId: fbData.userID,imgfile:'' });
        }

    };


    componentDidMount = () => 
    {


        this.screen_refresh();
        setTimeout(()=>{ 
            this.sign_in_data();
        },2000);
        this.setState({ modalVisible: this.props.isFetching });
        // this.set_data();
        BackHandler.addEventListener('hardwareBackPress', this.back_pressed);

    };

    componentWillUnmount = () => 
    {
        BackHandler.removeEventListener('hardwareBackPress', this.back_pressed);
    }

    //USER BACK PRESSED
    back_pressed = () => 
    {
        Alert.alert(
            this.state.translationData?.lblExitApp,
            this.state.translationData?.lblDoYouWantToExit,
            [
                { text: this.state.translationData?.lbl_no, onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: this.state.translationData?.lbl_yes, onPress: () => BackHandler.exitApp() },
            ],
            { cancelable: false });
            return true;
    }

    //USER REFRESH SCREEN
    screen_refresh = async() => 
    {
        let data:any = await getData('APP_VERSION');
        let textD = await getData('TEXT_DIRECTION');
        this.setState({ translationData: JSON.parse(data), textDirection:textD });
    }

   
    

    //POST THE DATA 
    post_data = async () => 
    {
       // if (this.validation()) {
            //let langId = await getData('LANGUAGE_ID');
          
            if (!this.state.isGoogle) 
            {
                this.setState({ modalVisible: this.props.isFetching });
                // let contact = await getData('contact');
                // let customerId = await getData('USER_ID');
                // if(customerId == "" || customerId == null){
                //     customerId = this.state.customerId;
                // }
             const data=   {
                    "user_id": this.props.verifyData.user.user_id,
                    "column":{
                        "email": this.state.email,
                        "namefirst": this.state.fullName,
                        "dateofbirth": this.state.passDate
                    }
                }
                this.props.userProfileSetupData({
/*                     data:
                    {
                        customerId: customerId ? customerId : 0,
                        name: this.state.fullName,
                        phone: contact ? contact : "0",
                        email: this.state.email,
                        countryId: 0,
                        password: this.state.password,
                        stateId: 0,
                        cityId: 0,
                        area: "",
                        languageId: langId,
                        profileImage: this.state.imageName,
                        DOB: this.state.passDate
                    },
                    navigation: this.props.navigation,
                    textD: this.state.textDirection,
                }); */
                // data:
                // {
                //     user_id: this.props.verifyData.user.user_id ,
                //     email: this.state.email,
                //     namefirst: this.state.fullName,
                //     dateofbirth: "1999-05-14T04:00:00Z"
                //     // dateofbirth: this.state.passDate
                // },
                data,
                navigation: this.props.navigation,
                })
            } 
            else 
            {
                this.props.socialRegistration({
/*                     data:
                    {
                        name: this.state.fullName,
                        phone: '',
                        email: this.state.email,
                        password: this.state.password,
                        registertype: 0,
                        socialMediaId: this.state.socialId,
                        deviceToken: "Simulator",
                        deviceType: 1,
                        countryId: 0,
                        stateId: 0,
                        cityId: 0,
                        area: "",
                        languageId: langId,
                    },
                    navigation: this.props.navigation,
                    textD: this.state.textDirection, */
                    data:
                    {
                        user_id: customerId ? customerId : 0 ,
                        email: this.state.email,
                        namefirst: this.state.fullName,
                        dateofbirth: this.state.passDate
                    },
                    navigation: this.props.navigation,
                });
            }

      // }
    }

    //CALL API WHEN USER UPLOAD PICTURE
    add_picture = async (data:any) => 
    {
        console.log('data',data)
        let langId = await getData('LANGUAGE_ID');
        let customerId = await getData('USER_ID');
        if (customerId == "" || customerId == null) 
        {
            customerId = this.state.customerId;
        }

        const headers = {
            'Content-Type': 'multipart/form-data',
        }

        let data1: any = {
            flag: "addCustomerProfileImage",
            customerId: customerId,
            profileImage: "spp.png",
            Files: data,
            languageId: langId
        }

        let name = this.get_random_name();
        this.setState({ imageName: name + '.jpg' });
        const formData = new FormData();
        formData.append("Files", { uri: data, name: 'image.jpg', type: 'multipart/form-data' })
        formData.append('customerId', customerId);
        formData.append('profileImage', name + '.jpg');
        formData.append('flag', 'addCustomerProfileImage');
        formData.append('languageId', langId);


        axios.post('https://homeats.hiteshi.com/AppPostingData.ashx', formData, {
            headers: headers
        }).then((response: any) => {
            console.log(response, "response");
        }).catch((error) => {
            console.log(error);
        });
    }
    //BUTTONS COMPONENT
    Butttons = () => {
        return (
            <View style={{ position: 'relative' }}>
                <TouchableOpacity style={styles.button} onPress={() => { this.post_data() }}>
                    {/* <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('LogoutArabic')}> */}
                    <Text style={{ fontSize: 18, color: '#1C1C1C' }}>Confirm</Text>
                </TouchableOpacity>
            </View>
        )
    };

    //SHOW DATE PICKER
    show_date_picker = () => this.setState({ datePickerVisibility: true, errordob: '' });

    //HIDE DATE PICKER
    hide_date_picker = () => this.setState({ datePickerVisibility: false });

    //WHEN CONFIRM TO SELECT DATE FROM DATE PICKER
    handle_date_confirm = (date: any) => 
    {
        console.log("this.state.passDate",date)
        // let newz = moment(date).format('YYYY/MM/DD');
        this.setState({ dob: date, passDate: date })
        this.hide_date_picker();
    };

   //TO SET A NAME FOR UPLOADED IMAGE TO POST ON DB
    get_random_name() {
        let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 8; i++) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }

    // DATE TIME 
    Report = () => {
        let newy = moment().subtract(13, 'year');
        let newz = moment(newy).format('YYYY-MM-DD');
        return (
            <View>
                <View>
                    <View>
                        <TouchableOpacity
                            onPress={this.show_date_picker}>
                            <Text style={[styles.inputStyle, { textAlign: this.state.textDirection == "R" ? 'right' : 'left' }]}>
                                {this.state.dob ? moment(this.state.dob).format('ll') : <Text style={{
                                    fontFamily:"Montserrat",
                                    fontSize:16,
                                    color:'#818C99'
                                }}>Oct 1,1985</Text> }

                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <DateTimePickerModal
                    isVisible={this.state.datePickerVisibility}
                    mode='date'
                    style={{ backfaceVisibility: 'hidden' }}
                    onConfirm={this.handle_date_confirm}
                    onCancel={this.hide_date_picker}
                    timeZoneOffsetInMinutes={0}
                    maximumDate={new Date(newz)}
                />
            </View>
        );
    }
 
    open_model = () => this.setState({ modalVisibles: true, open: true, });

    close_model = () => this.setState({ modalVisibles: false, open: false, });

    //GALEERY PICKER MODEL
    current_Model() 
    {
      
        return (
            <View style={{ height: 120, width: 150, borderRadius: 15, alignSelf: 'center', marginTop: Platform.OS === 'ios' ? 132 : 100, backgroundColor: '#ffffff' }}>
                <TouchableOpacity style={[styles.cam]} onPress={() => { this.open_gallery() }}>
                    <Text >{this.state.translationData?.lbl_SelectFromGallery} </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.cam]} onPress={() => this.pick_camera()}>
                    <Text >{this.state.translationData?.lbl_takephoto} </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.cam]} onPress={this.close_model}>
                    <Text >{this.state.translationData?.lblCancel} </Text>
                </TouchableOpacity>
            </View>
        )
    }
    // TO OPEN FILES
    open_gallery= async () => 
    {
        let options =
        {
            title: 'Select Image',
            customButtons:
                [
                    {
                        name: 'customOptionKey',
                        title: 'Choose Photo from Custom Option'
                    },
                ],
            storageOptions:
            {
                skipBackup: true,
                path: 'images',
            },
        };
        try {
            launchImageLibrary(options, async (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                }
                else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                }
                else if (response.customButton) {
                    console.log(
                        'User tapped custom button: ',
                        response.customButton
                    );
                    alert(response.customButton);
                } else {
                    let source = response.uri;
                    var data = await RNFS.readFile(source, 'base64').then(res => { return res });
                    let customerId = this.props.verifyData.user.user_id;
                    console.log("customerId @@@@@@@@@@@@",)
                    this.props.userProfileImage({data, customerId});
                    //this.add_picture(source);
                    this.setState({ imgfile: source });
                    this.setState({ modalVisibles: false })
                }
            });
        }
        catch (error) {
            console.log(error, 'camera library error')
        }

    }
    // TO OPEN CAMERA
    pick_camera= () => {
        let options =
        {
            title: 'Select Image',
            customButtons: [
                {
                    name: 'customOptionKey',
                    title: 'Choose Photo from Custom Option'
                },
            ],
            storageOptions:
            {
                skipBackup: true,
                path: 'images',
            },
        };
        try {
            launchCamera(options, async (response) => 
            {
                if (response.didCancel) 
                {
                    console.log('User cancelled image picker');
                }
                else if (response.error) 
                {
                    console.log('ImagePicker Error: ', response.error);
                }
                else if (response.customButton) 
                {
                    console.log(
                        'User tapped custom button: ',
                        response.customButton
                    );
                    alert(response.customButton);
                }
                else 
                {
                    let source = response.uri;
                    var data = await RNFS.readFile(source, 'base64').then(res => { return res });
                    let customerId = this.props.verifyData.user.user_id;
                    this.props.userProfileImage({data, customerId});
                    //this.add_picture(source);
                    this.setState({ imgfile: source });
                    this.setState({ modalVisibles: false });
                }
            });
        }
        catch (error) {
            console.log(error, 'camera error')
        }
    }
    // MAIN UI OF SCREEN
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }} >
                <KeyboardAvoidingView style={{ flexGrow: 1 }} behavior={Platform.OS == 'ios' ? 'padding' : 'height'} enabled={ true }>
                <ScrollView
                    ref = {React.createRef()}                                  
                    keyboardShouldPersistTaps='handled'
                    contentContainerStyle={{ flexGrow: 1, }}
                >
                        <>
                            <View style={styles.container}>
                                <Text style={styles.bgImage}> {''}  </Text>
                                <TouchableOpacity style={{ alignItems: 'center', padding: 20, borderRadius: 20, width: 120, height: 120, alignSelf: 'center', marginBottom: 30 }} onPress={this.open_model}>
                                    <Image style={{ width: 110, height: 110, borderRadius: 60 }} source={this.state.imgfile == '' ? Images.ProfileImg : { uri: (this.state.imgfile) }} resizeMode='cover' />

                                </TouchableOpacity>
                                <View >
                                    <View style={{ paddingVertical: 5 }}>
                                        <Text style={styles.textStyle}>{'Full name'}</Text>
                                        <TextInput
                                            style={[styles.inputStyle,{textAlign: this.state.textDirection == "R"?'right':'left'}]}
                                            placeholder="Derrock Rose"
                                            underlineColorAndroid="transparent"
                                            keyboardType='name-phone-pad'
                                            value={this.state.fullName}
                                            // onChangeText={(fullName) => this.setState({ fullName })}
                                            onChangeText={(fullName) => ((/^[a-zA-Z\s]*$/.test(fullName) || fullName == '') && fullName.length < 33) && this.setState({ fullName, errorName: "" })}
                                        />
                                        {this.state.errorName !== '' ? <Text style={[styles.warn, { textAlign: this.state.textDirection == "R" ? 'right' : 'left' }]}>{this.state.errorName}</Text> : <>{ }</>}
                                    </View>
                                    <View style={{ paddingVertical: 5 }}>
                                        <TouchableOpacity onPress={this.show_date_picker}>
                                            <Text style={styles.textStyle}>{'Date of birth'}</Text>
                                            <this.Report></this.Report>
                                        </TouchableOpacity>
                                        {this.state.errordob !== '' ? <Text style={[styles.warn, { textAlign: this.state.textDirection == "R" ? 'right' : 'left' }]}>{this.state.errordob}</Text> : <>{ }</>}
                                    </View>
                                    <View style={{ paddingVertical: 5 }}>
                                        <Text style={styles.textStyle}>{'Email'}</Text>
                                        <TextInput
                                            style={[styles.inputStyle, { textAlign: this.state.textDirection == "R" ? 'right' : 'left' }]}
                                            placeholder="qwe123@gmail.com"
                                            underlineColorAndroid="transparent"
                                            keyboardType="email-address"
                                            value={this.state.email}
                                            onChangeText={(email) => {
                                                if(email.length < 65)
                                                {
                                                    this.setState({ email, errorEmail: '' })
                                                }
                                            }}
                                        />
                                        {this.state.errorEmail !== '' ? <Text style={[styles.warn, { textAlign: this.state.textDirection == "R" ? 'right' : 'left' }]}>{this.state.errorEmail}</Text> : <>{ }</>}
                                    </View>

                                   
                                </View>
                            </View>
                            <Modal
                                animationType="none"
                                transparent={true}
                                visible={this.state.modalVisibles}
                                onRequestClose={() => {
                                    this.setState({ modalVisibles: false });
                                }} >
                                {this.current_Model()}
                            </Modal>

                            <View style={{ marginBottom: 20, marginTop: 15 }}>
                                <this.Butttons />
                            </View>
                        </>
                </ScrollView >
                    </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }

}
// STYLING
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: 40

    },
    bgImage:
    {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: Platform.OS === 'ios' ? '600' : '700',
        fontFamily: 'Montserrat',
        color: '#1C1C1C',
        textAlign: 'center'

    },
    inputStyle:
    {
        fontSize: 16,
        padding: 10,
        borderRadius: 16,
        backgroundColor: '#F7F7FA',
        width: windowWidth - 45,
        marginTop: 5,
        height: 48,
        alignSelf: 'center',
        fontFamily: 'Montserrat',
        color: '#000',
        fontWeight: '400',
        justifyContent: 'center',
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

    },
    textStyle: {
        color: '#818C99',
        paddingLeft: "6.5%",

        paddingRight: "6.5%",
        fontSize:12,
        fontFamily:'Montserrat',
        fontWeight:'400'

    },
    cam:
    {
        height: 30,
        flexDirection: 'row',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center',
    },
    warn:
    {
        color: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 25,
        width:"92%",
    },
})


const mapStateToProps = (state: any) => {
  
    return (
        {

            isFetching: state.AuthReducers.isFetching,
            verifyData: state.AuthReducers.verifyOtp,
            // state.AuthReducers.getLanguage?.lanData
        })
};

const mapDispatchToProps = (dispatch: any) => ({
    customerResgistration: (params: any) => dispatch(customerResgistration(params)),
    socialRegistration: (params: any) => dispatch(socialResgistration(params)),
    userProfileImage: (params: any) => dispatch(userProfileImage(params)),
    userProfileSetupData: (params: any) => dispatch(userProfileSetupData(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CustomerProfile);