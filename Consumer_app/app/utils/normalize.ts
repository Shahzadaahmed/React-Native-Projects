import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// BASED ON IPHONE 5s's SCALE
const scale = SCREEN_WIDTH / 420;

export default function actuatedNormalize(size: any) 
{
  const newSize = size * scale;
  if (Platform.OS === 'ios') 
  {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } 
  else 
  {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
