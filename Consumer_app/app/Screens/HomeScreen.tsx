
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Platform, TouchableOpacity, Alert, BackHandler } from 'react-native';
import icons from '../../assets/icons';
import {
    GoogleSignin,
} from '@react-native-google-signin/google-signin';
import { getData} from '../common/Methods';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Home} from '../components/home'

interface Props {
    navigation: any;
    navigate: any;
    languageId: string;
    getSliderImages: CallableFunction;
    sliderImageData: CallableFunction;
    modalVisible: Boolean;
    isFetching: Boolean;
    userInfo: any;
};

class HomeScreen extends Component<Props> {

    state = { item: '', modalVisible: false, userInfo:'' };

    componentDidMount() 
    {
        this.sign_in_data();
        BackHandler.addEventListener('hardwareBackPress', this.back_pressed);
    };

    componentWillUnmount = () => 
    {
        BackHandler.removeEventListener('hardwareBackPress', this.back_pressed);
    }

    //USER BACK PRESS
    back_pressed = () => 
    {
        Alert.alert(
            'Exit App',
            'Do you want to exit?',
            [
                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'Yes', onPress: () => BackHandler.exitApp() },
            ],
            { cancelable: false });
        return true;
    }

    //USER CLICK ON SIGN OUT
    sign_out() 
    {
        Alert.alert(
            "Confirmation",
            "Do You really want to Logout?",
            [
                {
                    text: "NO",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "YES", onPress: () => {

                        if (this.state.userInfo != '') {                           
                            this.sign_out_confirm();
                        }
                        this.handle_logout();

                    }
                }
            ],
            { cancelable: false }
        );
    }
    //WHEN USER CONFIRM TO SIGN OUT
    handle_logout = async () => 
    {
      
        if (Platform.OS == 'ios')
        {
            await AsyncStorage.clear();
            await AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
            this.apple_logout();
            this.sign_out_confirm();
            this.props.navigation.navigate('Language');
        } 
        else 
        {
            await AsyncStorage.clear();
            this.sign_out_confirm();
            this.props.navigation.navigate('Language');

        }
    }
   
    //KEEPING SIGING DATA ON HOME
    sign_in_data = async () => 
    {
        var a:any = await getData('GoogleSingIN');
        var c:any = await getData('AppleLogin');
        let b:any = JSON.parse(a);
        let d:any = JSON.parse(c); 
        
        if (a != null || b != null ) {     
            this.setState({ userInfo: a });
            this.setState({ userInfo: c });
        }
    };
   //APPLE LOGOUT
    apple_logout = async () => 
    {
        try {
            this.setState({ modalVisible: true })
            this.setState({ modalVisible: false })
            this.props.navigation.navigate('Language') //

        }
        catch (error) {
            console.log(error, 'ios error')
        }
    };


    // Google sign out function
    sign_out_confirm = async () => 
    {
        try {

            this.setState({ modalVisible: true });
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            await AsyncStorage.clear();
            this.handle_logout();
            this.setState({ modalVisible: true });
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <Home/>
            // <View style={styles.container}>
            //     <View style={styles.Header}>
            //         <Text style={styles.HeaderText}>Home</Text>
            //         <Image
            //             style={styles.headerIcon}
            //             source={icons.head1}
            //         />
            //     </View>

            //     <View style={styles.Center}>
            //         <TouchableOpacity >
            //             <Image
            //                 style={styles.CenterImage}
            //                 source={icons.center}
            //             />
            //         </TouchableOpacity>
            //     </View>

            //     <View style={styles.Mid}>
            //         <View style={{ width: '45%' }}>
            //             <TouchableOpacity >
            //                 <Image
            //                     style={styles.midImage}
            //                     source={icons.mid1}
            //                 />
            //             </TouchableOpacity>
            //         </View>
            //         <View style={{ width: '45%' }}>
            //             <TouchableOpacity>
            //                 <Image
            //                     style={styles.midImage}
            //                     source={icons.mid2}
            //                 />
            //             </TouchableOpacity>
            //         </View>
            //     </View>

            //     <View style={styles.Bottom}>
            //         <View style={styles.tabView}>
            //             <TouchableOpacity>
            //                 <Image
            //                     style={styles.tabs}
            //                     source={icons.tab1}
            //                 />
            //             </TouchableOpacity>
            //         </View>
            //         <View style={styles.tabView}>
            //             <TouchableOpacity>
            //                 <Image
            //                     style={styles.tabs}
            //                     source={icons.tab2}
            //                 />
            //             </TouchableOpacity>
            //         </View>

            //         <View style={styles.tabView}>
            //             <TouchableOpacity>
            //                 <Image
            //                     style={styles.tabs}
            //                     source={icons.tab3}
            //                 />
            //             </TouchableOpacity>
            //         </View>

            //         <View style={styles.tabView}>
            //             <TouchableOpacity>
            //                 <Image
            //                     style={styles.tabs}
            //                     source={icons.tab4}
            //                 />
            //             </TouchableOpacity>
            //         </View>

            //         <View style={styles.tabView}>
            //             <TouchableOpacity onPress={() => { this.sign_out() }}>
            //                 <Image
            //                     style={styles.tabs}
            //                     source={icons.tab5}
            //                 />
            //             </TouchableOpacity>
            //         </View>

            //     </View>
            // </View>

        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    Header: {
        flexDirection: 'row',
        marginTop: Platform.OS === 'ios' ? 25 : 0,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: '10%'
    },
    HeaderText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1C1C1C',
        lineHeight: 39,
        fontFamily: 'Montserrat'
    },
    Center: {
        paddingHorizontal: 5,
        height: '35%',
        width: '100%',
        // alignItems: 'center',
    },
    Mid: {
        flexDirection: 'row',
        height: '40%',
        paddingHorizontal: 16,
        justifyContent: 'space-evenly',
    },
    Bottom: {
        flexDirection: 'row',
        height: '8%',
        marginBottom: Platform.OS === 'ios' ? 15 : 5,
        alignItems: 'flex-end',
    },

    CenterImage: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
        resizeMode: 'contain'
    },
    midImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    headerIcon: {
        width: 50,
        height: 50
    },
    tabs: {
        width: '100%',
        height: '100%',
    },
    tabView: {
        width: '20%',
    }
});