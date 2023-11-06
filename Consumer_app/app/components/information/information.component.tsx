/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   INFORMATION PAGE SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from "react";
import {Text, View, TouchableOpacity} from 'react-native'
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
// IMPRT COMMON STYLING
import {theme} from '../../common';
import {windowHeight} from "../../common/Constants";
import styles from './information.style';
// IMPORT STATIC DATA
import {dataImage} from "../../data";
import {actuatedNormalize, Svgs} from "../../utils";
// IMPORT COMPONENTS
import MapView, {Marker} from 'react-native-maps';
import Images from "../../common/Images";
import GalaryGridView from "./galary.gridView";
import Handle from "../../common/handle.picker";

interface Region 
{
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number
}

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    title: string,
    detail: string,
    region: Region,
    address: string,
    totalSitting: any,
    timing: string,
    onClosePress: any
}

// START THE INFORMATION VIEW FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
const InformationView = (props: Props) =>
{
    const {title, detail, region, address, totalSitting, timing, onClosePress} = props
    let data = dataImage //ARRAY OF IMAGES 
    //FUNCTION USE TO MODIFYDATA OF ARRAY WHICH PASS FROM ACTUAL ARRAY OF IMAGE
    const modifyData = (arr: any) =>
    {
        let finalData = [];
        let type1 = true;
        let type = 1;
        let add = true;
        for (let i = 0; i < arr.length; i += type1 ? 6 : 3)
        { //HERE ITS FILTER AND THEN PUSH DATA IN ARRAY AFTER MATCHING FUNCTION TYPES
            let j = 0;
            let data = [];
            while (j < (type1 ? 3 : 6))
            {
                arr[i + j] && data.push(arr[i + j]);
                j += 1;
            }
            finalData.push({
                id: Math.random().toString(),
                data,
                type,
            });
            type1 = !type1;
            if (type == 1)
            {
                add = true;
            }
            if (type == 4)
            {
                add = false;
            }
            add ? type++ : type--;
        }
        return finalData;
    };

    const finalData = modifyData(data);// VARITABLE WHICH IS PASS IN FLATLIST FOR RENDER DATA

    return (
        <ScrollBottomSheet // If you are using TS, that'll infer the renderItem `item` type
            componentType="FlatList"
            snapPoints={[actuatedNormalize(100), '30%', '30%']}
            initialSnapIndex={0}
            style={{backgroundColor: theme.colors.white, zIndex: 1}}
            renderHandle={() => (<Handle onPress={onClosePress} />)}
            ListHeaderComponent={() => (
                <View>
                    <Text style={styles.headingText}>{title}</Text>
                    <Text style={styles.subText}>{detail}</Text>
                    <MapView   // MAPVIEW FOR DIRECTION PURPOSE 
                        // provider={PROVIDER_GOOGLE}
                        initialRegion={region}
                        style={styles.map}
                        showsUserLocation={false}
                        zoomEnabled={true}
                        maxZoomLevel={14}
                        minZoomLevel={14}
                    >
                        <Marker //MARKER WHICH SHOW COORDINATE
                            coordinate={{latitude: 37.78825, longitude: -122.4324}}
                            title={"Harley Strert Clinic"}
                            style={styles.markerImage}
                            image={Images.MapMarker}
                        />
                    </MapView>
                    <View style={{padding: 15}}>
                        <View style={styles.addressView}>
                            <Svgs.marker height={25} width={20} />
                            <Text style={styles.BottomSheetText}>{address}</Text>
                        </View>
                        <View style={styles.addressView}>
                            <Svgs.TableIcon height={25} width={20} />
                            <Text style={styles.BottomSheetText}>{totalSitting}</Text>
                        </View>
                        <View style={styles.addressView}>
                            <Svgs.clockGray height={25} width={20} />
                            <Text style={styles.BottomSheetText}>{timing}</Text>
                        </View>
                    </View>

                    <View style={styles.bottomBox}>
                        <TouchableOpacity style={{justifyContent: "center", backgroundColor: "transparent", }}>
                            <View style={styles.buttonView}>
                                <Svgs.inbox height={17} width={17} style={{right: "20%"}} />
                                <Text style={styles.btnText}>Message</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.CallButtonView}>
                            <TouchableOpacity style={{justifyContent: "center", height: "100%", width: "100%"}}>
                                <Svgs.call height={17} width={17} style={{alignSelf: "center"}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{...styles.row, justifyContent: 'space-between', margin: '5%'}}>
                        <Text style={{...styles.headingText, marginLeft: 0}}>{'Media'}</Text>
                        <Text style={{...styles.subText, color: theme.colors.active}}>{'25'}</Text>
                    </View>
                </View>
            )}

            data={finalData}
            keyExtractor={(item) => item.id}
            renderItem={({item}: any) =>
            {
                return (
                    <GalaryGridView
                        item={item} />
                )
            }
            }
        />
    )
}

export default InformationView;