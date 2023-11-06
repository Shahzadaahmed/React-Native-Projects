/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   GALARY VIEW SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react';
import { Text, View, Image } from 'react-native';
import {charityCategoryList,dataImage} from '../../data/index';
import styles from './information.style';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    item: any
}

let data = dataImage //ARRAY OF IMAGES 
//FUNCTION TYPE ONE WHICH IS USE TO ACHIVE IMAGE GRID DESIGN 
const TypeOne = ({ item }: any) => (
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
const TypeTwo = ({ item }:any) => (
  <View style={[styles.row, styles.rowWrap]}>
    {item.data.map((x:any) => (
      <View key={x} style={styles.item1}>
        <CommonItempart data={x} />
      </View>
    ))}
  </View>
);
//FUNCTION TYPE THREE WHICH IS USE TO ACHIVE IMAGE GRID DESIGN 
const TypeThree = ({ item }:any) => (
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
const CommonItempart = ({ data }:any) =>
  data ? (
    <View style={styles.item1Inner}>
      <Image source={ data }
        resizeMode='cover' style={styles.fill} />
      {/* <Text style={styles.index}>{data}</Text> */}
    </View>
  ) : null;

// START THE GALARY GRID VIEW FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
const GalaryGridView = (props: Props) =>
{
    const { item } = props;
    if (item.type == 4) return (<TypeOne item={item} />);
    if (item.type == 1) return (<TypeTwo item={item} />);
    if (item.type == 2) return (<TypeThree item={item} />);
    if (item.type == 3) return (<TypeTwo item={item} />);

}

export default GalaryGridView;
