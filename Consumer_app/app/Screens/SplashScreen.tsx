
import React from 'react';
import { View, Image, StyleSheet, Alert } from 'react-native';
import Images from '../common/Images';
import { getData } from '../common/Methods';
import { connect } from 'react-redux';
import { checkAppVersion, getLanguage } from '../redux/auth/auth.action';
import * as RNLocalize from "react-native-localize";
interface Props {
    // using interface 
    navigation: any;
    navigate:any;
    languageId: any;
    getLang: CallableFunction;
};

    // Class component for splashscreen
 class SplashScreen extends React.Component  <Props> 
 {

    

    componentDidMount = () => 
    {
        this.get_language();
        setTimeout(() => {
            this.session_check();
            }, 2000);
    }

    //GET LANGUAGES
    get_language = async() =>
    {
        this.props.getLang({ data: { countryCode: RNLocalize.getCountry() } });
    }

    //TO CHECK SESSION OF USER
    session_check = async () => {
        const { navigation} = this.props;
        let session = await getData('UserSession');
        let registered = await getData('registered');
        let languageId = await getData('languageId');
        if (session === 'In') {
            if(registered == '1') {
                if (languageId == '2'){
                    navigation.navigate('LogoutArabic');
                } else {
                    navigation.navigate('Logout');
                }
            } else {
                navigation.navigate('loginComponent');
            }
        } else {
            navigation.navigate('Language');
        }
    }
 

    render() 
    {
        return(
            <View style={styles.container}>
                <Image  style={styles.bgImage} source={Images.Splash}  />
            </View>
        ) 
    }
}

// STYLEING 
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        alignItems:'center',
        backgroundColor:'#FFFFFF' // This should be there in color config file
        
    },
    bgImage: 
    {
        resizeMode: 'center',
        flex: 1
    }
})
const mapDispatchToProps = (dispatch: any) => ({

    getLang: (params: any) => dispatch(getLanguage(params)),
    checkApp: (params: any) => dispatch(checkAppVersion(params)),
});
export default connect( mapDispatchToProps)(SplashScreen);

