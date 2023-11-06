import axios from 'axios';
import { textStrings } from './common';
import { getData } from './common/Methods'

export const APIS = {
  // GET METHOD APIs
  getLanguages : 'app/language/list',
  checkAppVersion : '/CheckAppVersion',
  resendMobileOtp2: 'user/create',
  otpVerification : '/otpVerification',
  customerRegister : '/updateCustomerProfile_V2',
  getcontent : '/getcontent',
  voiceCall : '/VoiceCall',
  addprofilePhoto : 'user/profileimage/upload',
  addprofile : 'user/basic/profile/update',
  customerRegisterSocial : '/CustomerRegister_V1',
  getCountryList : 'https://ipapi.co/json/',
  getSplashScreen :"app/staticdata?language_id=en",
  verifyOtp : "user/phone/verifyotp",
  resendOtp : "user/phone/resendotp",
  staticDataLoad : "app/signup/staticdata?language_id=en"

};

var token = ''
const BaseUrl = "https://homeats.hiteshi.com/restaurantapionlinev2.asmx"

var headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

var headers2 = {
  'Content-Type': 'application/json',
};

var headers3 = {
  'Content-Type': 'multipart/form-data',
};

var headers4 = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + token
};

export const getFullUrl = url => BaseUrl + url;

export const config = 
{
  POST: (url, params) => { console.log(url);
    return axios.post(url, params, { headers: headers2, timeout: 30000 });
  },
  PUT: (url, params) => {
    return axios.put(url, params, { timeout: 30000 });
  },
  GET: url => {
    return axios.get(url, { timeout: 30000 });
  },
  GET_WITH_HEADER: async (url) => {
    const token = await getData(textStrings.TOKEN);
    return axios.get(url, { headers: { ...headers2, "Authorization": 'Bearer ' + token }, timeout: 30000 });
  },
  GET_WITH_PARAMS: async (url, params) => {
    const token = await getData(textStrings.TOKEN);
    return axios.get(url, { params: params, headers: { ...headers2, 'Authorization': token }, timeout: 30000 });
  },
  POST_WITH_HEADER: async (url, params) => {
    const token = await getData(textStrings.TOKEN);
    return axios.post(url, params, { headers: { ...headers2, "Authorization": 'Bearer ' + token }, timeout: 30000 });
  },
  POST_WITH_MULTIPART: async (url, params) => {
    const token = await getData(textStrings.TOKEN);
    return axios.post(url, params, { headers: { ...headers3, "Authorization": 'Bearer ' + token }, timeout: 30000 });
  },
  POST_WITH_QUERY_PARAMS: async (url, params, headerParams = headers) => {
    return axios.post(url, null, { params: params }, { headers: headerParams, timeout: 30000 });
  },
  PUT_WITH_HEADER: async (url, params) => {
    return axios.put(url, params, { headers: headers, timeout: 30000 });
  },
  DELETE_WITH_HEADER: async (url, params) => {
    return axios.delete(url, { data: params, headers: headers, timeout: 30000 });
  },
};
