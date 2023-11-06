import React from 'react'
import { Alert, Image, StyleSheet, Text, View, } from 'react-native'
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler'
import { theme } from '../../common'
import { windowHeight, windowWidth } from '../../common/Constants'
import { actuatedNormalize, Fonts, Svgs } from '../../utils'
import RBSheet from "react-native-raw-bottom-sheet";
import MapView, {PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import svgs from '../../utils/svgs'
import icons from '../../../assets/icons'
import Images from '../../common/Images';
import {charityCategoryList,dataImage} from '../../data/index'
import {FlatList} from 'react-native-gesture-handler'

const smallWidth = windowWidth / 3;
// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT
interface Props
{
    charityData:any
    details:any
}
//THIS VIEW IS RENDER IN VENDOR.COMPONENT.TSX WHICH IS DISPLAY IN BOTTOMSHEET 
const InformationSheetView = (props: Props) =>
    {
        const {charityData,details} = props //PASSING PARENT DATA
        let data = dataImage //ARRAY OF IMAGES 
        //FUNCTION TYPE ONE WHICH IS USE TO ACHIVE IMAGE GRID DESIGN 
        const TypeOne = ({ item }) => (
          <View style={styles.row}>
            <View style={styles.flex}>
              <View style={styles.item1}>
                <CommonItempart data={item.data[0]} />
              </View>
              <View style={styles.item1}>
                <CommonItempart data={item.data[1]} />
              </View>
            </View>
            <View style={styles.item2}>
              <CommonItempart data={item.data[2]} />
            </View>
          </View>
        );
        //FUNCTION TYPE TWO WHICH IS USE TO ACHIVE IMAGE GRID DESIGN 
        const TypeTwo = ({ item }) => (
          <View style={[styles.row, styles.rowWrap]}>
            {item.data.map(x => (
              <View key={x} style={styles.item1}>
                <CommonItempart data={x} />
              </View>
            ))}
          </View>
        );
        //FUNCTION TYPE THREE WHICH IS USE TO ACHIVE IMAGE GRID DESIGN 
        const TypeThree = ({ item }) => (
          <View style={styles.row}>
            <View style={styles.item2}>
              <CommonItempart data={item.data[0]} />
            </View>
            <View style={styles.flex}>
              <View style={styles.item1}>
                <CommonItempart data={item.data[1]} />
              </View>
              <View style={styles.item1}>
                <CommonItempart data={item.data[2]} />
              </View>
            </View>
          </View>
        );
         //FUNCTION COMMON ITEM PART WHICH IS USE TO ACHIVE IMAGE GRID DESIGN 
        const CommonItempart = ({ data }) =>
          data ? (
            <View style={styles.item1Inner}>
              <Image source={ data }
                resizeMode='cover' style={styles.fill} />
              {/* <Text style={styles.index}>{data}</Text> */}
            </View>
          ) : null;
        //FUNCTION USE TO MODIFYDATA OF ARRAY WHICH PASS FROM ACTUAL ARRAY OF IMAGE
        const modifyData = arr => {
          let finalData = [];
          let type1 = true;
          let type = 1;
          let add = true;
          for (let i = 0; i < arr.length; i += type1 ? 6 : 3) { //HERE ITS FILTER AND THEN PUSH DATA IN ARRAY AFTER MATCHING FUNCTION TYPES
            let j = 0;
            let data = [];
            while (j < (type1 ? 3 : 6)) {
              arr[i + j] && data.push(arr[i + j]);
              j += 1;
            }
            finalData.push({
              id: Math.random().toString(),
              data,
              type,
            });
            type1 = !type1;
            if (type == 1) {
              add = true;
            }
            if (type == 4) {
              add = false;
            }
            add ? type++ : type--;
          }
          return finalData;
        };
      //FUNCTION RENDER ACCESS FROM FLATLIST WHICH IS SELECT TYPE ACCORDING TO ITEM TYPE
      const renderItem = ({ item }) => {
          if (item.type == 4) return <TypeOne item={item} />;
          if (item.type == 1) return <TypeTwo item={item} />;
          if (item.type == 2) return <TypeThree item={item} />;
          if (item.type == 3) return <TypeTwo item={item} />;
        };
      const finalData = modifyData(data);// VARITABLE WHICH IS PASS IN FLATLIST FOR RENDER DATA
      //FUNCTION HEADER COMPONENT WHICH IS ACCESS FROM FLATLIST IN RENDER HEADER COMPONENT
      const RenerHeaderComponents =()=>
      {
        return(
          <View>
          <View style={{justifyContent:"center",padding:20}}>
          <Text style={styles.titleText}>Inforamtion</Text>
          <Text style={styles.BottomSheetText}>{charityData.description}</Text>
          </View>   
          <MapView   // MAPVIEW FOR DIRECTION PURPOSE 
              // provider={PROVIDER_GOOGLE}
              initialRegion={{ //MAP INITITAL REGION FOR SHOWING LOCATION ON REGION
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
          }}
              style={styles.map}
              showsUserLocation={false}
              zoomEnabled={true}
              maxZoomLevel={14}
              minZoomLevel={14}
          >
          <Marker //MARKER WHICH SHOW COORDINATE
              coordinate={{ latitude : 37.78825 , longitude : -122.4324 }}
              title={"Harley Strert Clinic"}
              image={Images.MapMarker}
          />
          </MapView>
          <View style={{padding:15,backgroundColor:"transprent"}}>
              <View style={styles.addressView}>
                  <Svgs.marker height={25} width={20} style={{right:"30%"}} />
                  <Text style={styles.BottomSheetText}>{details.description}</Text>
              </View>
              <View style={styles.addressView}>
                  <Svgs.clockGray height={25}  width={20} style={{right:"30%"}} />
                  <Text style={styles.BottomSheetText}>Daily 8:00 - 20:00</Text>
              </View>
              </View>
              <View style={styles.bottomBox}>
                  <TouchableOpacity style={styles.buttonView}>
                  <Svgs.inbox height={17} width={17} style={{right:"20%"}} />
                  <Text style={styles.btnText}>Message</Text>
                  </TouchableOpacity>
              
                  <TouchableOpacity style={styles.CallButtonView}>
                  <Svgs.call height={17} width={17} style={{alignSelf:"center"}} />
                  </TouchableOpacity>
              </View>
              <View style={{flexDirection:"row",justifyContent:"space-between",padding:20}}>
              <Text style={styles.text}>Media</Text>
              <Text style={styles.textNumeric}>25</Text>
              </View>
              </View>
        )
        }
        return(
            <View style={{width:"98%",backgroundColor:"white",}}>
                 <FlatList
                     ListHeaderComponent={
                       <RenerHeaderComponents/>
                     }
                    data={finalData}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    />
                </View>
            ) 
        }
export default InformationSheetView;
const styles = StyleSheet.create({
    map: 
  {
    height:windowHeight*0.2,
    width:windowWidth*.88,
    alignSelf:"center",
    borderRadius:10,
  },
  titleText:
  {
    fontSize: actuatedNormalize('22'),
    fontFamily: Fonts.SemiBold,
    color: theme.colors.lightBlack
  },
  text:
  {
    fontSize: actuatedNormalize('22'),
    fontFamily: Fonts.Medium,
    color: theme.colors.black
  },
  BottomSheetText:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.darkGrey,
    top:5,
    padding:1
  },
  textNumeric:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily:Fonts.Regular,
    color:theme.colors.black,
  },
  addressView:{
    padding:10,
    flexDirection:"row",
    backgroundColor:"transparent"
  },
  btnText:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.text,
    textAlign: 'center',
  },
  buttonView:
  {
    borderRadius: 15,
    backgroundColor: theme.colors.bgColor,
    flexDirection:"row",
    width:windowWidth*0.7,
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    height:50,
  },
  CallButtonView:
  {
    borderRadius: 15,
    backgroundColor: theme.colors.bgColor,
    width:windowWidth*0.15,
    justifyContent:"center",
    height:50,
  },
  bottomBox:{
    flexDirection:"row",
    backgroundColor:"transprent",
    justifyContent:"space-evenly",
    padding:5
  },
  row: { flexDirection: 'row', width: '100%',borderRadius:15,backgroundColor:"transparent" },
  rowWrap: { flexWrap: 'wrap',borderRadius:15 },
  flex: { flex: 1,borderRadius:15 },
  item1: { height: smallWidth, width: windowWidth*0.326, padding: 1,borderRadius:15 },
  item2: { height: smallWidth * 2, width: smallWidth * 1.95, padding: 1,borderRadius:15 },
  item1Inner: { flex: 1, backgroundColor: 'transparent' },
  index: { color: '#fff', fontSize: 20, position: 'absolute', bottom: 5, right: 5,borderRadius:15 },
  fill: { height: '93%', width: '95%',borderRadius:15 }
})
