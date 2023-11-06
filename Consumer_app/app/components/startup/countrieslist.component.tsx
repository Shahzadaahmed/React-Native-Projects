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
    Dimensions,
    TouchableHighlight,
    FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../common/headerTitleBack';
import {Colors} from '../../../style';
import normalize from 'react-native-normalize';
import icons from '../../../assets/icons';
import Loader from '../../common/Loader';
import {getData, setData} from '../../common/Methods';
import CustomTextInput from '../../common/text.input';
import {actuatedNormalize, Fonts} from '../../utils';
import {theme} from '../../common';
import {RadioButton} from 'react-native-paper';
import {windowHeight, windowWidth} from '../../common/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface Props
{
    // using interface
    navigation: any;
    navigate: any;
    countriesList: any;
    isFetching: boolean;
    route: any
};


// ADD INTERFACE FOR STATE
interface IState
{
    translationData: any;
    search: any;
    textDirection: string | undefined | null;
    searchState: any;
    hasFocus: any;
    searchData: any;
    clear: any;
}

let ref: any = ''

class CountriesList extends React.Component<Props, IState> {
    constructor(props: Props)
    {
        const {navigation} = props;
        super(props);
        // ADD STATE

        this.state = {
            translationData: '',
            search: '',
            textDirection: 'L',
            searchState: '',
            hasFocus: false,
            searchData: '',
            clear: false,
        };
    }

    componentDidMount = () =>
    {
        this.screen_refresh();
    }

    //INIT SCREEN DATA
    async screen_refresh()
    {
        let data: any = await getData('COUNTRY_CODES');
        //console.log('data', data)
    }

    // WHEN BACK PRESSED
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

    // TO GO BACK FROM THE PAGE
    go_to_login = async (e: any) =>
    {
        e && e.preventDfault && e.preventDefault()
        let session = await getData('UserSession');

        if (session === 'In')
        {
            this.back_pressed();
        }
        else
        {
            this.props.navigation.navigate('loginComponent');
        }
    }
    
    // on SEARCH focus
    on_search_focus = (value: any) => 
    {
        this.setState({hasFocus: value})
    }

    // Search filter
    searchText = (value: any) => {
        const {countriesList} = this.props.route.params;
        let text = value.toLowerCase();
        let trucks = JSON.parse(countriesList);
    
        // search by food truck name
        let filteredName = trucks.filter((truck: any) => {
          
          return truck.country.toLowerCase().match(text); 
        });
        this.setState({searchData: filteredName})
    }
     setValue = (text: any) =>
    {
      if (text.length > 0)
      {
        this.setState({clear:true})
      } else
      {
        this.setState({clear:false})
      }
    }
    setSelectedValue = (item :any) => {
        const {onChangePhone, } = this.props.route.params;
        onChangePhone(item.country_id, item.phonecode);
        this.props.navigation.navigate('loginComponent')
    }

    render()
    {
        const {countriesList ,countryCode} = this.props.route.params;
        
        const {hasFocus, searchData , clear} = this.state;
        return (
            <View style={styles.container}>
                <Loader loading={this.props.isFetching} />
                    <KeyboardAvoidingView>
                        <>
                            <View style={{
                                marginTop: Platform.OS === 'ios' ? normalize(20) : 20,
                                flexDirection: this.state.textDirection == "R" ? 'row-reverse' : 'row'
                            }}>
                                <Header title={""} iconName={"arrow-back"} iconColor={theme.colors.darkGrey} onPress={()=> this.props.navigation.goBack()}/>
                            </View>
                            <View style={[styles.header,styles.row]}>
                                <CustomTextInput
                                    InputStyle={{width: windowWidth-40,}}
                                    closeBtnStyle ={{width: windowWidth * 0.76,}}
                                    placeholderTitle={'Search'}
                                    placeholderTextColor={{fontFamily: Fonts.Regular}}
                                    value={this.state.search}
                                    //on_search_focus={this.on_search_focus}
                                    
                                    onChange={(value: any)=>{
                                        this.setState({search: value});
                                        //this.searchText(value);
                                    }}
                                    iconName={'search'}
                                    iconSize={22}
                                />
{/*                                 <Text style={styles.cancelButton} 
                                onPress={()=> this.props.navigation.goBack()}>Cancel</Text> */}
                                </View>
                                <ScrollView
                    keyboardShouldPersistTaps='handled'
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}>
                            {!hasFocus ? <View>
                                {(countriesList && countriesList.length) > 0 &&
                                    <>
                                    {JSON.parse(countriesList).map((item:any,index:any)=>
                                    {
                                        return(
                                            <View key={index}>
                                                 <View style={{flexDirection: 'row', alignContent: 'center'}}>
                                                    <View style={{flex: 4, alignSelf: 'center'}}>
                                                        <Text style={styles.item} onPress={() => {
                                                         this.setSelectedValue(item)
                                                    }}>
                                                            {`+ ${item.phonecode} `}
                                                            <Text style={styles.itemInner}>
                                                                {`  ${item.country}`}
                                                            </Text>
                                                        </Text>
                                                    </View>
                                                    <View style={styles.radioBtn}>
                                                        <RadioButton
                                                        color='#0E5561'
                                                            value={`+ ${item.phonecode}  ${item.country}`}
                                                            status={countryCode === `${item.country_id}` ? 'checked' : 'unchecked'}
                                                            onPress={() =>
                                                            {
                                                                this.setSelectedValue(item);
                                                            }}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    })}
                                    </>
                                }
                            </View> : null}
                            </ScrollView>

                        </>
                    </KeyboardAvoidingView>
            </View>
        );
    }
}

const mapStateToProps = (state: any) =>
{
    return {
        isFetching: state.AuthReducers.isFetching,
    }
};

export default connect(mapStateToProps)(CountriesList);


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
    backCrossIcon: {
        width: normalize(50),
        height: normalize(50),
    },
    item: {
        fontSize: actuatedNormalize(18),
        fontFamily: Fonts.Regular,
        color: theme.colors.black,
        padding: 10,
        height: 44,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    itemInner: {
        fontSize: actuatedNormalize(18),
        fontFamily: Fonts.Regular,
        color: theme.colors.darkGrey,
        padding: 10,
        height: 44,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    radioBtn: {
        backgroundColor: theme.colors.white,
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 5,
    },
    header: 
    {
     padding: 20,   
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row', alignItems: 'center'
    },
    inputView:
    {
      marginHorizontal: 20,
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
      borderRadius: 15,
      backgroundColor: theme.colors.bgColor,
      width: windowWidth * 0.75
    },
    input:
    {
      fontSize: actuatedNormalize('16'),
      fontFamily: Fonts.Regular,
      paddingHorizontal: 5,
      width: windowWidth * 0.6
    },
    clear:
    {
      position: 'absolute',
      top: 10,
      right: 5
    }
});
