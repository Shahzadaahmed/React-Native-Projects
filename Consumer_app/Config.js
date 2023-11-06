import axios from 'axios';
import textStrings from './app/common/textStrings';
import getData from './app/common/Methods';

export const APIS = {
  // POST METHOD APIs
  getSliderImages: '/GetSliderImagesLanguageWise',
  customerRegister: '/updateCustomerProfile_V2',
  customerRegisterSocial: '/CustomerRegister_V1',
  socialMediaId: '/CheckSocialMediaId',
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


export const config = {

  POST: (url, params) => {
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
    const token = await getData(textStrings.TOKEN)
    return axios.get(url, { params: params, headers: { ...headers2, 'Authorization': token }, timeout: 30000 });
  },
  POST_WITH_HEADER: async (url, params) => {
    // const token = await getData(textStrings.TOKEN);
    return axios.post(url, params, { headers: { ...headers2, }, timeout: 30000 });
  },
  POST_WITH_HEADER_TOKEN: async (url, params) => {
    const token = 'VnZLb0o2TVNSYVR0cW5MUkJ5YVRUbEdjTFY0PQo=';
    return axios.post(url, params, { headers: { ...headers2, 'Authorization': token }, timeout: 30000 });
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
}

