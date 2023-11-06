
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Platform, TouchableOpacity, Alert, BackHandler } from 'react-native';
import icons from '../../assets/icons';
import {
    GoogleSignin,
} from '@react-native-google-signin/google-signin';
import { getData } from '../common/Methods';
import AsyncStorage from '@react-native-async-storage/async-storage';


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

class HomeArabic extends Component<Props> {

    state = { item: '', modalVisible: false, userInfo: '' };

    componentDidMount() 
    {   
        this.sign_in_data();
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
            'Exit App',
            'Do you want to exit?',
            [
                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'Yes', onPress: () => BackHandler.exitApp() },
            ],
            { cancelable: false });
        return true;
    }
   //USER SIGN OUT
    sign_out() {
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
                        this.handle_logout();

                        if (this.state.userInfo != '') {
                            this.sign_out_confirm();
                        }
                    }
                }
            ],
            { cancelable: false }
        );
    }
    //USER HANDLE Logout
    handle_logout = async () => 
    {

        Platform.OS == 'ios' ? await AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove) : await AsyncStorage.clear();
        this.props.navigation.navigate('Language')

    }

    //KEEPING SIGN IN DATA
    sign_in_data = async () => {
        var a:any = await getData('GoogleSingIN');
        var c: any = await getData('AppleLogin');
        let b: any = JSON.parse(a);
        let d: any = JSON.parse(c);

        if (a || b) {
            //  console.log(b,'ooooooo');
            this.setState({ userInfo: b });
            this.setState({ userInfo: d });
        }
    };


    //SIGN OUT FUNCTION
    sign_out_confirm = async () => {
        try {

            this.setState({ modalVisible: true });
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            this.setState({ userInfo: null }); // Remember to remove the user from your app's state as well
            await AsyncStorage.clear();
            this.handle_logout();
            this.setState({ modalVisible: true });
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Header}>
                    <TouchableOpacity>
                        <Image
                            style={styles.headerIcon}
                            source={icons.head1}
                        />
                    </TouchableOpacity>
                    <Text style={styles.HeaderText}>الصفحة الرئيسية</Text>
                </View>

                <View style={styles.Center}>
                    <TouchableOpacity >
                        <Image
                            style={styles.CenterImage}
                            source={icons.centerArb}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.Mid}>
                    <View style={{ width: '45%' }}>
                        <TouchableOpacity >
                            <Image
                                style={styles.midImage}
                                source={icons.mid1Arb}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '45%' }}>
                        <TouchableOpacity>
                            <Image
                                style={styles.midImage}
                                source={icons.mid2Arb}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.Bottom}>
                    <View style={styles.tabView}>
                        <TouchableOpacity onPress={() => { this.sign_out() }}>
                            <Image
                                style={styles.tabs}
                                source={icons.tab1Arb}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tabView}>
                        <TouchableOpacity>
                            <Image
                                style={styles.tabs}
                                source={icons.tab2Arb}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.tabView}>
                        <TouchableOpacity>
                            <Image
                                style={styles.tabs}
                                source={icons.tab3Arb}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.tabView}>
                        <TouchableOpacity>
                            <Image
                                style={styles.tabs}
                                source={icons.tab4Arb}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.tabView}>
                        <TouchableOpacity >
                            <Image
                                style={styles.tabs}
                                source={icons.tab5Arb}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        );
    }
}

export default HomeArabic;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white'

    },
    Header: {
        flexDirection: 'row',
        marginTop: Platform.OS === 'ios' ? 35 : 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: '10%'
    },
    HeaderText: {
        fontSize: 30,
        fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
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