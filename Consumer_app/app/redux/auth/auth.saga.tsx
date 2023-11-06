/*
             AUTHOR:   Khuram Haseeb
            SUMMARY:   import the saga from the redux saga and in this file all the
                       authenfication saga function that used in the app 
*/
//  import the put,call hooks from the redux saga
import {put, call} from 'redux-saga/effects';
import {setData, getData} from '../../common/Methods';
import textStrings from '../../common/textStrings';
import {config, APIS, getFullUrl} from '../../Config';
import {takeLatest, takeEvery} from 'redux-saga/effects';
import Toast from '../../components/ToastFlashMessage';
import actionType from './auth.constant';
import theme from '../../common/theme';
import {env} from '../../env';
import axios from 'axios';
import {AnyTypeAnnotation} from '@babel/types';

//  USER PROFILE INFORMATION OF EMAIL,DATE OF BIRTH, NAME REQUEST SAAG
function* userSetupProfileData(action: any): Generator<any>
{
    try 
    {
        //  PROFILE INFORMATION REQUEST CALL AND GIVE THE RESPONSE
        const response: any = yield call(axios.post, env.api_url + 'user/basic/profile/update', action.params.data as any);
        //   check if response success then move into home
        if (response.data.success)
        {
            //  move to home page and also show toast if response success
            action.params.navigation.navigate('Logout');
            Toast.Message("Successfully update profile", '', theme.colors.success)
            yield put({
                type: actionType.USER_PROFILE_SETUP_DATA_SUCCESS,
                payload:
                {
                    data: response.data,
                },
            })
        }
        //  check if response show error
        else
        {
            //  show toast if any error
            Toast.Message("Error", "Please put the correct information", theme.colors.error)
            yield put({
                type: actionType.USER_PROFILE_IMAGE_UPLOAD_FAILURE,
            });
        }

    }
    catch (error) 
    {
        yield put({
            type: actionType.USER_PROFILE_IMAGE_UPLOAD_FAILURE,
        })
    }
}
//  user add the profile picture in the personal information screen
function* userProfileImageUpload(action: any): Generator<any>
{
    try 
    {
        //  set the data of the user profile image
        const sendData =
        {
            user_id: action.params.customerId,
            imageData: action.params.data
        }
        //  api call for the image upload in the user profile information component
        const response: any = yield call(axios.post, env.api_url + 'user/profileimage/upload', sendData as any);
        if (response.data.success)
        {
            //  image upload successfully show toast
            Toast.Message("Successfully upload image", '', theme.colors.success)
            yield put({
                type: actionType.USER_PROFILE_IMAGE_UPLOAD_SUCCESS,
                payload:
                {
                    data: response.data,
                },
            })
        }
        else
        {
            //  show toast if any error in the image upload
            Toast.Message("Error", "image not upload", theme.colors.error)
            yield put({
                type: actionType.USER_PROFILE_IMAGE_UPLOAD_FAILURE,
            });
        }
    }
    catch (error) 
    {
        yield put({
            type: actionType.USER_PROFILE_IMAGE_UPLOAD_FAILURE,
        })
    }
}
//  after remove
function* checkAppVersion(action: any): Generator<any> 
{
    try 
    {
        const response: any = yield call(axios.post, env.api_url + '/CheckAppVersion', action.params.data as any);
        let a = JSON.parse(response.data.d)
        const data = a
        if (response && response.data) 
        {
            const userData = response.data;
            if (userData && response.data) 
            {
                let newData = {};
                for (let i = 0; i < data.result.messages.length; i++)
                {
                    if (data.result.messages[i].messageKey)
                    {
                        // newData[data.result.messages[i].messageKey]= data.result.messages[i].messageValue;
                    }
                }
                const setLableData = async (newData: any) => 
                {
                    // await setData(textStrings.APP_VERSION, JSON.stringify(newData));
                }
                setLableData(newData);
                yield put({
                    type: actionType.LANGUAGE_STORE_SUCCESS,
                    payload: {
                        data: userData.d,
                        appVersion: newData,
                    },
                })

            }

        }
        else 
        {
            yield put({
                type: actionType.LANGUAGE_STORE_FAILURE,
            });
        }
    }
    catch (error)
    {
        yield put({
            type: actionType.LANGUAGE_STORE_FAILURE,
        })
    }
}
//  login in with facebook authentication
function* getFbData(action: any): Generator<any>
{
    try 
    {
        //  api call for facebook authentication 
        const response: any = yield call(axios.post, env.api_url + 'user/facebook/auth', action.params.data as any);
        //  if the user login first time and not updated profile info data
        if (response.data.success === true && response.data.user.facebookid !== null && response.data.user.dateofbirth === null)
        {
            //  show toast and navigate to the profile info component
            action.params.navigation.navigate('profileSetup')
            Toast.Message("Successfully verify account", '', theme.colors.success)
            yield put({
                type: actionType.ADD_FB_SUCCESS,
                payload:
                {
                    data: response.data,
                },
            })
        }
        //  if the user already register then its move to home page if success
        else if (response.data.success === true && response.data.user.facebookid !== null && response.data.user.dateofbirth !== null)
        {
            //  navigate to home page if the user login 
            action.params.navigation.navigate('Logout')
            Toast.Message("Successfully Login", '', theme.colors.success)
            yield put({
                type: actionType.ADD_FB_SUCCESS,
                payload:
                {
                    data: response.data,
                },
            })
        }
        //  show the error if user not login successfully
        else 
        {
            Toast.Message("Wrong account", "Please put the correct account", theme.colors.error)
            yield put({
                type: actionType.ADD_FB_FAILURE,
            });
        }
    }
    catch (error) 
    {
        yield put({
            type: actionType.ADD_FB_FAILURE,
        })
    }
}
//  login in with gmail authentication
function* getGmailData(action: any): Generator<any>
{
    try 
    {
        // user gmail info get from google account and call the api
        const response: any = yield call(axios.post, env.api_url + 'user/google/auth', action.params.data as any);
        //  if the user first time login then it move to user profile info component
        if (response.data.success === true && response.data.user.googleid !== null && response.data.user.dateofbirth === null)
        {
            //  show the toast and move to profile info if successfully login in
            action.params.navigation.navigate('profileSetup')
            Toast.Message("Successfully verify account", '', theme.colors.success)
            yield put({
                type: actionType.LOGIN_GMAIL_SUCCESS,
                payload:
                {
                    data: response.data,
                },
            })
        }
        //  if the user already login with google account then it move to home page
        else if (response.data.success === true && response.data.user.googleid !== null && response.data.user.dateofbirth !== null)
        {
            //  show the toast message and move to home page
            action.params.navigation.navigate('Logout')
            Toast.Message("Successfully Login", '', theme.colors.success)
            yield put({
                type: actionType.LOGIN_GMAIL_SUCCESS,
                payload:
                {
                    data: response.data,
                },
            })
        }
        //  show the error if user not successfully login with google account
        else 
        {
            Toast.Message("Wrong gmail", "Please put the correct Gmail account", theme.colors.error)
            yield put({
                type: actionType.LOGIN_GMAIL_FAILURE,
            });
        }
    }
    catch (error) 
    {
        yield put({
            type: actionType.LOGIN_GMAIL_FAILURE,
        });
    }
}
//  login in with apple authentication
function* getAppleData(action: any): Generator<any>
{
    try 
    {
        // user gmail info get from apple account and call the api
        const response: any = yield call(axios.post, env.api_url + 'user/apple/auth', action.params.data as any);
        //  if the user first time login with apple account then it move to user profile info component
        if (response.data.success === true && response.data.user.appleid !== null && response.data.user.dateofbirth === null)
        {
            //  show the toast and move to profile info if successfully login in
            action.params.navigation.navigate('profileSetup')
            Toast.Message("Apple account verify sccessfully", '', theme.colors.success)
            yield put({
                type: actionType.LOGIN_APPLE_SUCCESS,
                payload:
                {
                    data: response.data,
                },
            })
        }
        //  if the user already login with apple account then it move to home page
        else if (response.data.success === true && response.data.user.appleid !== null && response.data.user.dateofbirth !== null)
        {
            //  show the toast message and move to home page
            action.params.navigation.navigate('Logout')
            Toast.Message("Successfully Login", '', theme.colors.success)
            yield put({
                type: actionType.LOGIN_APPLE_SUCCESS,
                payload:
                {
                    data: response.data,
                },
            })
        }
        //  show the error if user not successfully login with apple account
        else 
        {
            Toast.Message("Invalid account", "Please put the correct account", theme.colors.error)
            yield put({
                type: actionType.LOGIN_APPLE_FAILURE,
            });
        }
    }
    catch (error) 
    {
        yield put({
            type: actionType.LOGIN_APPLE_FAILURE,
        });
    }
}
//  getlanguage static data load fron the first time with the asy storage
function* getLanguage(action: any): Generator<any>
{
    try 
    {
        //  language list api call and give the result of languages
        const response: any = yield call(axios.get, env.api_url + 'app/language/list' as any);
        //  if the response successfuly show the language lists
        if (response && response.data.success) 
        {
            //  show toast when open the app every time
            Toast.Message("Languages", 'Successfully Loaded', theme.colors.success)
            yield put({
                type: actionType.LANGUAGE_SUCCESS,
                payload: {
                    data: response.data.languages,
                },
            })
        }
        //   if the languages list api not call show the error
        else 
        {
            //  show the messsage if the language not loaded
            Toast.Message("Not Loaded ", "Languages not loaded", theme.colors.error)
            yield put({
                type: actionType.LANGUAGE_FAILURE,
            });
        }
    }
    catch (error)
    {

        yield put({
            type: actionType.LANGUAGE_FAILURE,
        })
    }
}
//  remove after
function* getPrivacy(action: any): Generator<any> 
{
    try 
    {
        const response: any = yield call(axios.post, env.api_url + '/getcontent', action.params.data as any);
        let a = JSON.parse(response.data.d)
        const data = a
        if (response && response.data)
        {
            const userData = response.data;
            yield put({
                type: actionType.GET_PRIVACY_SUCCESS,
                payload: {
                    data: data.result,
                },
            })
        }
        else
        {
            yield put({
                type: actionType.GET_PRIVACY_FAILURE,
            });
        }
    }
    catch (error)
    {
        yield put({
            type: actionType.GET_PRIVACY_FAILURE,
        })
    }
}
//  remove after
function* otpVerify(action: any): Generator<any>
{
    try 
    {
        const response: any = yield call(axios.post, env.api_url + '/otpVerification', action.params.data as any);
        let a = JSON.parse(response.data.d)
        const data = a
        if (response && data.status == 1) 
        {
             setData('UserSession', 'In');
            yield put({
                type: actionType.OTP_VERIFY_SUCCESS,
                payload: {
                    data: data.result,
                },
            })
            setData('customerId', JSON.stringify(data.result.customerId));
            if (data.result.name == "")
            {
                action.params.navigation.navigate('profileSetup', {customerID: (data.result && data.result.customerId) ? data.result.customerId : 0});
            }
            else 
            {
                setData('registered', '1');
                let textD = action.params.textD;
                if (textD == 'R') 
                {
                    action.params.navigation.navigate('LogoutArabic')
                }
                else 
                {
                    action.params.navigation.navigate('Logout')
                }
            }
            // Toast.Message(data.message, '', theme.colors.success)
        }
        else 
        {
            yield put({
                type: actionType.OTP_VERIFY_FAILURE,
            });
            if (data.status === 4) 
            {

                // Toast.Message(data.message, '', theme.colors.error)
            }
        }
    }
    catch (error)
    {

        yield put({
            type: actionType.OTP_VERIFY_FAILURE,
        })
    }
}
//  if the otp send and user put wrong otp or time expire then resend otp api call
function* resendVerifyOtpSaga(action: any): Generator<any>
{
    try 
    {
        // api call for resend otp resend with mobile number send 
        const response: any = yield call(axios.post, env.api_url + "user/phone/resendotp", action.params.data as any);
        //  if the response successfuly then resend otp sms received on mobile
        if (response && response.data.success) 
        {
            //  show toast when resend otp sms recived on the user mobile
            Toast.Message("Resend OTP successfully", '', theme.colors.success)
            yield put({
                type: actionType.RESEND_VERIFY_OTP_SUCCESS,
                payload: response.data,
            })
        }
        //  show the messsage if the otp sms not recived on the user mobile
        else
        {
            //  show the message if the user not recived the sms on the mobile
            Toast.Message("Not recived SMS ", "Please resend OTP Request", theme.colors.error)
            yield put({
                type: actionType.RESEND_VERIFY_OTP_FAILURE,
            });
        }
    }
    catch (error) 
    {
        yield put({
            type: actionType.RESEND_VERIFY_OTP_FAILURE,
        })
    }
}
//  send sms in the login screen after user put the mobile number
function* sendAuthSMS(action: any): Generator<any>
{
    try 
    {
        //  when user enter the mobile number for login then api call
        const response: any = yield call(axios.post, env.api_url + 'user/create', action.params.data as any);
        //  if the response successfuly then  otp sms received on mobile
        if (response && response.data.success)
        {
            //  show toast when mobile number entered and  otp sms recived on the user mobile
            Toast.Message("Please put OTP", '', theme.colors.success)
            action.params.navigation.navigate('verifyotpComponent', theme.colors.success)
            yield put({
                type: actionType.AUTH_SEND_SMS_SUCCESS,
                payload:
                {
                    data: response.data,
                    mobileNumber: action.params.data.mobile,
                },
            })
        }
        else
        {
            //  show the message if the user not recived the sms on the mobile
            Toast.Message("Not recived SMS ", "Please enter coorect mobile number", theme.colors.error)
            yield put({
                type: actionType.AUTH_SEND_SMS_FAILURE,
            });
        }
    }
    catch (error) 
    {
        yield put({
            type: actionType.AUTH_SEND_SMS_FAILURE,
        })
    }
}
//  onboarding static data load when user enter the app first time that api call
function* getSplashScreen(action: any): Generator<any>
{
    try 
    {
        //  static data api call and its used for the whole application
        const response: any = yield call(axios.get, env.api_url + "app/staticdata?language_id=en" as any);
        setData(textStrings.SPLASH_SCREEN, JSON.stringify(response.data))
        yield put({
            type: actionType.GET_SPLASH_SCREEN_SUCCESS,
            payload: {
                data: response.data,
            },
        })
    } catch (error)
    {
        yield put({
            type: actionType.GET_SPLASH_SCREEN_FAILURE,
        })
    }
}
//  verify OTP request after user enter the mobile number
function* verifyOtpSaga(action: any): Generator<any>
{
    try 
    {
        //  enter the 4 digit mobile number and then api call for verification
        const response: any = yield call(axios.post, env.api_url + "user/phone/verifyotp", action.params.data as any);
        //  if the user first time login in with mobile number then its move profile info component
        if (response.data.success === true && response.data.user.mobile !== null && response.data.user.dateofbirth === null)
        {
            //  on the successfull response show the toast and also navigate
            action.params.navigation.navigate('profileSetup')
            Toast.Message("Successfully verify OTP", '', theme.colors.success)
            yield put({
                type: actionType.VERIFY_OTP_SUCCESS,
                payload:
                {
                    data: response.data,
                },
            })
        }
        //  if the user already register then it move to home page
        else if (response.data.success === true && response.data.user.mobile !== null && response.data.user.dateofbirth !== null)
        {
            //  show the toast message and move to home page if it is already login
            action.params.navigation.navigate('Logout')
            Toast.Message("Successfully Login", '', theme.colors.success)
            yield put({
                type: actionType.VERIFY_OTP_SUCCESS,
                payload:
                {
                    data: response.data,
                },
            })
        }
        //   put the wrong number then error show
        else
        {
            //  show the toast message if the user put the wrong number
            Toast.Message("Invalid OTP", "Please put the correct OTP", theme.colors.error)
            yield put({
                type: actionType.VERIFY_OTP_FAILURE,
            });
        }

    }
    catch (error) 
    {
        yield put({
            type: actionType.VERIFY_OTP_FAILURE,
        })
    }
}
//  remove after
function* voiceCall(action: any): Generator<any>
{
    try
    {
        const response: any = yield call(axios.post, env.api_url + '/VoiceCall', action.params.data as any);
        let a = JSON.parse(response.data.d)
        const data = a
        if (response && data.status == 1) 
        {
            const userData = response.data;
            yield put({
                type: actionType.VOICE_CALL_SUCCESS,
                payload: {
                    data: data.result,
                    mobileNumber: action.params.data.phone,
                },
            })
            if (userData) 
            {
                // setData(textStrings.MOBILE_NUMBER, action.params.data.phone);
                // setData(textStrings.USER_ID, data.result.userId.toString());
            }
            // Toast.Message(textStrings.data.message, '', theme.colors.success)
        }
        else
        {

            yield put({
                type: actionType.VOICE_CALL_FAILURE,
            });

            if (data.message)
            {
                // Toast.Message("Error", data.message, theme.colors.error)
            }
        }
    }
    catch (error)
    {

        yield put({
            type: actionType.VOICE_CALL_FAILURE,
        })
    }
}
//  remove after 
function* countryCode(action: any): Generator<any>
{
    try
    {
        const response: any = yield call(axios.get, env.api_url + 'app/signup/staticdata?language_id=en' as any);
        let data = response.data;
        setData(textStrings.COUNTRY_CODES, JSON.stringify( response.data))
        yield put({
            type: actionType.COUNTRY_CODE_SUCCESS,
            payload: {
                data: data,
            },
        })
       
    }
    catch (error)
    {
        yield put({
            type: actionType.COUNTRY_CODE_FAILURE,
            payload: {
                // error: error.message,
                data: 'AF'
            }
        })
    }
}
// remove after
function* customerRegistrationData(action: any): Generator<any>
{
    try
    {
        // const response: any = yield call(config.POST_WITH_HEADER_TOKEN, getFullUrl(APIS.customerRegister), action.params.data);
        // if (response && response.data.d) 
        // {
        //     let a = JSON.parse(response.data.d)
        //     const data = a
        //     if (data.message == 'This email already exists.') 
        //     {
        //         // Toast.Message("Error", textStrings.EmailExists, theme.colors.error)
        //         return false;
        //     }
        //     yield put({
        //         type: actionType.CUSTOMER_REGISTRATION_SUCCESS,
        //         payload: {
        //             data: data.result.restuarentMenu,
        //         },
        //     })
        //     // Toast.Message("Success", textStrings.registerSuccess, theme.colors.success)
        //     //navigate to next page with imagedetails
        //     setData('registered', "1");
        //     let textD = action.params.textD;
        //     if (textD == 'R')
        //     {
        //         action.params.navigation.navigate('LogoutArabic')
        //     }
        //     else
        //     {
        //         action.params.navigation.navigate('Logout')
        //     }
        // }
        // else
        // {
        //     yield put({
        //         type: actionType.CUSTOMER_REGISTRATION_FAILURE,
        //         payload: {
        //             error: 'error'
        //         }
        //     });
        // }
    }
    catch (error)
    {

        // if (error.message == textStrings.NetworkError) 
        // {
        //     Toast.Message("Error", textStrings.NoInternetConnectionMsg, theme.colors.error)
        // }
        // else if (error.message == textStrings.TimeOutError) 
        // {
        //     Toast.Message("Error", textStrings.TimeOutMsg, theme.colors.error)
        // }
        // else 
        // {
        //     Toast.Message("Error", error.message, theme.colors.error)
        // }
        yield put({
            type: actionType.CUSTOMER_REGISTRATION_FAILURE,
            payload: {
                // error: error.message
            }
        })
    }
}
//  remove after
function* getSliderImagesData(action: any): Generator<any>
{
    try
    {
        // const response: any = yield call(config.POST_WITH_HEADER, getFullUrl(APIS.getSliderImages), action.params.data as any);
        // if (response && response.data && response.data.d) 
        // {
        //     let a = JSON.parse(response.data.d)
        //     const data = a
        //     yield put({
        //         type: actionType.GET_SLIDER_IMAGE_SUCCESS,
        //         payload: {
        //             data: data.result.restuarentMenu,
        //         },
        //     })

        // }
        // else 
        // {
        //     yield put({
        //         type: actionType.GET_SLIDER_IMAGE_FAILURE,
        //         payload: {
        //             error: 'error'
        //         }
        //     });
        // }
    }
    catch (error)
    {
        // if (error.message == textStrings.NetworkError) 
        // {
        //     Toast.Message("Error", textStrings.NoInternetConnectionMsg, theme.colors.error)
        // }
        // else if (error.message == textStrings.TimeOutError)
        // {
        //     Toast.Message("Error", textStrings.TimeOutMsg, theme.colors.error)
        // }
        // else 
        // {
        //     Toast.Message("Error", error.message, theme.colors.error)
        //     console.log(error.message, error.response, 'error message ')
        // }
        yield put({
            type: actionType.GET_SLIDER_IMAGE_FAILURE,
            payload: {
                // error: error.message
            }
        })
    }
}
//  remove after
function* socialRegistration(action: any): Generator<any>
{
    try
    {
        // const response = yield call(config.POST_WITH_HEADER_TOKEN, getFullUrl(APIS.customerRegisterSocial), action.params.data);
        // if (response && response.data.d)
        // {
        //     let a = JSON.parse(response.data.d)
        //     const data = a
        //     if (data.message == 'This email already exists.') 
        //     {
        //         // Toast.Message("Error", textStrings.EmailExists, theme.colors.error);
        //         return false;
        //     }
        //     yield put({
        //         type: actionType.SOCIAL_REGISTRATION_SUCCESS,
        //         payload: {
        //             data: data.result.restuarentMenu,
        //         },
        //     })
        //     // Toast.Message("Success", textStrings.registerSuccess, theme.colors.success)
        //     setData('registered', "1");
        //     let textD = action.params.textD;
        //     if (textD == 'R') 
        //     {
        //         action.params.navigation.navigate('LogoutArabic')
        //     }
        //     else 
        //     {
        //         action.params.navigation.navigate('Logout')
        //     }

        // }
        // else
        // {
        //     yield put({
        //         type: actionType.SOCIAL_REGISTRATION_FAILURE,
        //         payload: {
        //             error: 'error'
        //         }
        //     });
        // }
    }
    catch (error)
    {
        // if (error.message == textStrings.NetworkError) 
        // {
        //     Toast.Message("Error", textStrings.NoInternetConnectionMsg, theme.colors.error)
        // }
        // else if (error.message == textStrings.TimeOutError) 
        // {
        //     Toast.Message("Error", textStrings.TimeOutMsg, theme.colors.error)
        // }
        // else 
        // {
        //     Toast.Message("Error", error.message, theme.colors.error)
        // }
        yield put({
            type: actionType.SOCIAL_REGISTRATION_FAILURE,
            payload: {
                // error: error.message
            }
        })
    }
}
//  remove after
function* socialMediaId(action: any): Generator<any>
{
    try
    {
        // const response = yield call(config.POST_WITH_HEADER_TOKEN, getFullUrl(APIS.socialMediaId), action.params.data);
        // if (response)
        // {
        //     // let a = JSON.parse(response.data.d)
        //     // const data = a
        //     yield put({
        //         type: actionType.SOCIAL_MEDIA_ID_SUCCESS,
        //         payload: {
        //             // data: data,
        //         },
        //     })
        //     // Toast.Message("Success", textStrings.registerSuccess, theme.colors.success)
        //     let textD = action.params.textD;
        //     if (data) 
        //     {
        //         setData('registered', "1");
        //         if (textD == 'R') 
        //         {
        //             action.params.navigation.navigate('LogoutArabic');
        //         }
        //         else 
        //         {
        //             action.params.navigation.navigate('Logout');
        //         }
        //     }
        //     else 
        //     {
        //         action.params.navigation.navigate('profileSetup');
        //     }

        // }
        // else
        // {
        //     yield put({
        //         type: actionType.SOCIAL_MEDIA_ID_FAILURE,
        //         payload: {
        //             error: 'error'
        //         }
        //     });
        // }
    }
    catch (error)
    {
        // console.log(error, ' customerRegistrationData')
        // if (error.message == textStrings.NetworkError) 
        // {
        //     Toast.Message("Error", textStrings.NoInternetConnectionMsg, theme.colors.error)
        // }
        // else if (error.message == textStrings.TimeOutError) 
        // {
        //     Toast.Message("Error", textStrings.TimeOutMsg, theme.colors.error)
        // }
        // else 
        // {
        //     Toast.Message("Error", error.message, theme.colors.error)
        // }
        yield put({
            type: actionType.SOCIAL_MEDIA_ID_FAILURE,
            payload: {
                // error: error.message
            }
        })
    }
}
//  get signup static data load for whole application saga
function* getSignupStaticData(action: any): Generator<any>
{
    try 
    {
        //  language list api call and give the result of languages
        const response: any = yield call(axios.get, env.api_url + 'app/signup/staticdata?language_id=en' as any);
        setData('COUNTRY_CODES', JSON.stringify(response.data.countries))
 
        //  check the response success or failure
        if (response && response.data) 
        {
            yield put({
                type: actionType.STATIC_SIGNUP_DATALOAD_SUCCESS,
                payload: {
                    data: response.data,
                },
            })
        }
        else 
        {
            yield put({
                type: actionType.STATIC_SIGNUP_DATALOAD_FAILURE,
            });
        }
    }
    catch (error)
    {
        yield put({
            type: actionType.STATIC_SIGNUP_DATALOAD_FAILURE,
        })
    }
}

//  import all the function of saga in the takeEvery hooks of redux saga
export function* AuthSagas()
{
    yield takeEvery(actionType.LANGUAGE_REQUEST, getLanguage);
    yield takeEvery(actionType.LANGUAGE_STORE_REQUEST, checkAppVersion);
    yield takeEvery(actionType.AUTH_SEND_SMS_REQUEST, sendAuthSMS);
    yield takeEvery(actionType.OTP_VERIFY_REQUEST, otpVerify);
    yield takeEvery(actionType.GET_PRIVACY_REQUEST, getPrivacy);
    yield takeEvery(actionType.VOICE_CALL_REQUEST, voiceCall);
    yield takeEvery(actionType.USER_PROFILE_IMAGE_UPLOAD_REQUEST, userProfileImageUpload);
    yield takeEvery(actionType.ADD_FB_REQUEST, getFbData);
    yield takeEvery(actionType.USER_PROFILE_SETUP_DATA_REQUEST, userSetupProfileData);
    yield takeEvery(actionType.GET_SPLASH_SCREEN_REQUEST, getSplashScreen);
    yield takeEvery(actionType.VERIFY_OTP_REQUEST, verifyOtpSaga);
    yield takeEvery(actionType.RESEND_VERIFY_OTP_REQUEST, resendVerifyOtpSaga);
    yield takeEvery(actionType.COUNTRY_CODE_REQUEST, countryCode);
    // yield takeEvery(actionType.CUSTOMER_REGISTRATION_REQUEST, customerRegistrationData);
    yield takeEvery(actionType.GET_SLIDER_IMAGE_REQUEST, getSliderImagesData);
    yield takeEvery(actionType.SOCIAL_REGISTRATION_REQUEST, socialRegistration);
    yield takeEvery(actionType.SOCIAL_MEDIA_ID_REQUEST, socialMediaId);
    yield takeEvery(actionType.STATIC_SIGNUP_DATALOAD_REQUEST, getSignupStaticData);
    yield takeEvery(actionType.LOGIN_GMAIL_REQUEST, getGmailData);
    yield takeEvery(actionType.LOGIN_APPLE_REQUEST, getAppleData);

}



