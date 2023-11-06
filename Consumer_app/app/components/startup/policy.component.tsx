import React, { useEffect, useState, FC, useCallback } from 'react'
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity,
    Pressable,
    Image,
    TextInput,
    ActivityIndicator,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { Colors } from '../../../style';
import { getData } from '../../common/Methods';
import { getPrivacy } from '../../redux/auth/auth.action';

interface Props {
    // using interface 
    navigation: any;
    navigate: any;
    getPrivacyData: CallableFunction;
    privacyData: string;
};

interface IState {
    contents: any;
    textDat: any;
    languageId: number;
}

class Policy extends React.Component<Props, IState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            contents: 'IN',
            textDat: '',
            languageId: 1,
        };
    }

    componentDidMount = () => {

        setTimeout(async () => {
            let data = await getData('APP_VERSION');
            this.setState({ textDat: data });
            let lanId = await getData('LANGUAGE_ID');
            this.setState({ languageId: Number(lanId) });
            this.props.getPrivacyData({ data: { languageId: this.state.languageId, contentId: 14 } });
        }, 500);

        setTimeout(() => {
            // console.log(this.props?.privacyData);
            if (this.props?.privacyData?.length == 0) {
                console.log("Sfs");
            } else {
                this.setState({ contents: this.props?.privacyData[0] });
            }
            console.log(this.state.contents.headerText);
        }, 1000);
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', margin: 15 }} >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('loginComponent')}>
                            {/* <AntDesign name="arrowleft" size={30} /> */}
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: Colors.AuthBackCrossButton, marginLeft: 100 }} >{this.state.contents?.headerText ? this.state.contents?.headerText : ''}</Text>
                    </View>
                    <ScrollView >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, margin: 15 }} >
                            {/* <HTMLView
                                value={this.state.contents?.content ? this.state.contents?.content : ''}
                                stylesheet={styles}
                            /> */}
                        </View>
                    </ScrollView>
                </View>

            </View>
        )
    }
}

const mapStateToProps = (state: any) => {
    // isFetching: state.AuthReducers.getSliderImages,
    return {
        privacyData: state.AuthReducers.getPrivacy?.privacyData,
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    getPrivacyData: (params: any) => dispatch(getPrivacy(params)),
    // checkApp: (params: any) => dispatch(checkAppVersion(params)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Policy);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-around',
        backgroundColor: Colors.backgroundColor
    },
    backLanguage: {
        // flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginTop: 50,
    },
    backCrossIcon: {
        fontSize: 24,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        // fontWeight:'bold',
        color: Colors.AuthBackCrossButton,
        marginTop: -20,
        marginLeft: -10
    },
    a: {
        // fontWeight: '300',
        fontSize: 16,
        color: '#4F4F5F', // make links coloured pink
    },
});