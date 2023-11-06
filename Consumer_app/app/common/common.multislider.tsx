import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {actuatedNormalize, Fonts} from '../utils';
import {theme} from '.';
import {windowWidth} from './Constants';

interface Props
{
    min: any,
    max: any,
    setValues: any

}
const Multislider = (props: Props) =>
{
  const {min, max, setValues} = props
//   const [min, setMin] = useState(0);
//   const [max, setMax] = useState(500);

//   const setValues = (values:any) => {
//     try {
//       setMin(values[0]);
//       setMax(values[1]);
//     } catch (error) {
//       console.error(error);
//     }
//   };


  return (
      <View style={styles.sliderContainer}>
        <MultiSlider
          min={min}
          max={max}
          values={[min, max]}
          onValuesChangeFinish={values => setValues(values)}
          onValuesChange={values => setValues(values)}
          sliderLength={windowWidth - actuatedNormalize(80)}
          trackStyle={{
            height: actuatedNormalize(5),
            backgroundColor: theme.colors.lightGray,
          }}
          selectedStyle={{
            height: actuatedNormalize(5),
            backgroundColor: theme.colors.active,
          }}
          markerStyle={styles.markerStyle}
          pressedMarkerStyle={styles.pressedMarkerStyle}
        />
        <View style={styles.valuesContainer}>
          <Text style={styles.valueText}>
            {`$ ${min}`}
          </Text>
          <Text style={styles.valueText}>
          {`$ ${max}`}
          </Text>
        </View>
      </View>
  );
}

export default Multislider;

const styles = StyleSheet.create
({
  sliderContainer: 
  {
    paddingHorizontal: actuatedNormalize(30),
    // paddingVertical: actuatedNormalize(50),
    alignItems: 'center',
  },
  valuesContainer: 
  {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: actuatedNormalize(5),
  },
  valueText: 
  {
    fontFamily: Fonts.Regular,
    fontSize: actuatedNormalize(15),
    color: theme.colors.black,
  },
  markerStyle: {
    backgroundColor: theme.colors.active,
    height: actuatedNormalize(25),
    width: actuatedNormalize(25) ,
    borderRadius: 100,
    borderColor: theme.colors.active,
    borderWidth: 1,
    zIndex: 100
  },
  pressedMarkerStyle: {
    backgroundColor: theme.colors.active,
    height: actuatedNormalize(30),
    width: actuatedNormalize(30),
    borderRadius: 100,
    borderColor: theme.colors.active,
    borderWidth: 1,
  },
});
