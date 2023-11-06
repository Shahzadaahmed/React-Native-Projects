/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   SELECT FOOD ITEM COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useRef} from 'react'
import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import PlanSelectionView from './plan.selectionview'
import styles from '../components/special_order/special_order.style'
import { RNS3 } from 'react-native-aws3';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import moment from 'moment'

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
  label: string,
  data: Array<any>,
  navigation: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
const SelectFoodItem = (props: Props) =>
{
  const scrollView = useRef<any>()
  const {label, data, navigation} = props
  const dateObj = new Date
  const year = moment(dateObj).format('YYYY');
  const month = moment(dateObj).format('MM');
  const date = moment(dateObj).format('DD')
  const time = moment(dateObj).format('HH')
    // TO OPEN FILES
    const open_gallery = async () => 
    {
        let options =
        {
            title: 'Select Image',
            customButtons:
                [
                    {
                        name: 'customOptionKey',
                        title: 'Choose Photo from Custom Option'
                    },
                ],
            storageOptions:
            {
                skipBackup: true,
                path: 'images',
            },
        };
        try {
            launchImageLibrary(options, async (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                }
                else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                }
                else if (response.customButton) {
                    console.log(
                        'User tapped custom button: ',
                        response.customButton
                    );
                    alert(response.customButton);
                } 
                else
                {
                  // console.warn(response.uri)
                  // console.warn(response)
                  const file = 
                  {
                    // `uri` can also be a file system path (i.e. file://)
                    uri: response.uri,
                    name: `${dateObj.valueOf()}`,
                    type: "image/jpg"
                  }
                  const options = {
                    keyPrefix: `media/user/images/${year}/${month}/${date}/${time}/`,
                    bucket: "homeats",
                    region: "ap-south-1",
                    accessKey: "AKIAXT5Y7XCCUYXITCOH",
                    secretKey: "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",
                    successActionStatus: 201
                  }

                  RNS3.put(file, options).then((result:any) => {
                    console.warn(result)
                    
                    const decodedURI = decodeURIComponent(result.body.postResponse.location)
                    console.warn(decodedURI)
                    if (result.status !== 201)
                      throw new Error("Failed to upload image to S3");
                  })
                }
            });
        }
        catch (error) {
            console.log(error, 'camera library error')
        }

    }

  return (
    <View>
      <Text style={[styles.subHeadingText, styles.margin]}>{label}</Text>
      <ScrollView
        ref={scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}>
        <View style={styles.row}>
          {data.map(item => (
            <View key={item.id}>
              <PlanSelectionView
                uri={item.uri}
                onPress={null}
              />
            </View>
          ))}
          <PlanSelectionView
            onPress={()=> navigation.navigate('FoodList')}
          />
        </View>
      </ScrollView>

    </View>
  )
}

export default SelectFoodItem;
