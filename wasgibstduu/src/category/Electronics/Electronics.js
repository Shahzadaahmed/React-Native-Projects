import React from 'react'
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
  StyleSheet
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import firestore from '@react-native-firebase/firestore'
import Loader from '../../comonents/Loader/Loader';
import { useSelector } from 'react-redux';
import { Categories_detail , Colors, Sizes } from '../../comonents/Constant/Constant';

export default function Electronics({ navigation }) {

  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [show, setshow] = React.useState(false)

  const toggle = () => {
    setshow(!show)
  }

  const user = useSelector(state => state.user)

  React.useEffect(() => {
    firestore()
      .collection('Category')
      .doc('Your all ads there !')
      .collection('Electronics')
      .onSnapshot(documentSnapshot => {
        setData(documentSnapshot.docs.map(e => e.data()));
        setLoading(false)
      });
  }, [])

  return (
    <ScrollView style={styles.ScrollView}>

      <TouchableOpacity onPress={navigation.goBack}>
        <Text style={styles.Arrow_left}>
          <Feather name="arrow-left" size={25} color="black" />
        </Text>
      </TouchableOpacity>

      <View style={styles.Main_ads_veiw}>
        <Text style={styles.Ads_name}>{Categories_detail.auto_mobiles}</Text>
        <Text style={styles.Ads_name_para}>{Categories_detail.fashion_second_para}</Text>
      </View>

      {loading ?
        <Loader />
        :
        data.length === 0 ?
          <View style={styles.View_data_length}>

            <Text style={styles.View_data_length_Not_avalaible}>Ads is not avalaible </Text>
            <AntDesign name='exclamationcircleo' size={25} style={styles.View_data_length_icon} />
          </View>
          :
          data.map((item, ind) => {
            return (
              <View key={ind} style={styles.main_view_map}>
                <TouchableOpacity onPress={() => navigation.navigate('Categories_detail',
                  {
                    IMAGE: item.ADS_IMAGES,
                    PRICE: item.PRICE,
                    DISCRIPTION: item.DISCRIPTION,
                    CITY: item.CITY,
                    CATEGORY: item.CATEGORY,
                    TITLE: item.TITLE,
                    UID: item.UID,
                  }
                )}>
                  <Animatable.View duration={1000} animation="bounceInLeft" style={styles.Animatable}>
                    <View style={styles.Animatable_child}>
                      <View style={styles.Animatable_child_to_child}>
                        <Image
                          style={styles.Animatable_image}
                          source={{ uri: item.ADS_IMAGES }}
                        />
                      </View>
                      <View style={styles.Animatable_Para}>
                        <Text style={styles.username}>ayan ahmed</Text>
                        <Text numberOfLines={2} style={styles.title}>{item.TITLE}</Text>
                        <Text style={styles.price}>{item.PRICE}</Text>
                        <View style={styles.Icon_view}>
                          <Text style={styles.Versand}>Versand moglich</Text>


                          <Pressable onPress={() => {
                            firestore()
                              .collection(`Stared Data ${user.USER_ID}`)
                              .doc(item.DISCRIPTION)
                              .set({
                                IMAGE: item.ADS_IMAGES,
                                PRICE: item.PRICE,
                                DISCRIPTION: item.DISCRIPTION,
                                CITY: item.CITY,
                                CATEGORY: item.CATEGORY,
                                UID: item.UID,
                                TITLE: item.TITLE,
                              })
                          }}>
                            <AntDesign style={styles.staro} name="staro" size={18} />
                          </Pressable>
                        </View>
                      </View>
                    </View>
                  </Animatable.View>
                </TouchableOpacity>
              </View>
            )
          })
      }


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView: {
    backgroundColor: Colors.white,
    paddingHorizontal: Sizes.thirteen
  },
  Arrow_left: {
    color: Colors.white,
    fontSize: Sizes.twenty,
    marginTop: Sizes.ten,
  },
  Main_ads_veiw: {
    marginVertical: Sizes.twenty
  },
  Ads_name: {
    color: Colors.black,
     fontSize: Sizes.twenty
  },
  Ads_name_para: {
    color: Colors.ads_para,
    fontSize: Sizes.fouteen,
    marginTop: Sizes.five
  },
  View_data_length: {
    flexDirection: 'row',
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  View_data_length_Not_avalaible: {
    fontSize: Sizes.fifteen
  },
  View_data_length_icon: {
    color: Colors.red,
    paddingHorizontal: Sizes.ten
  },
  main_view_map: {
    marginHorizontal: 1,
    backgroundColor: Colors.white,
    borderRadius: Sizes.two,
    marginTop: Sizes.ten
  },
  Animatable: {
    alignItems: 'center'
  },
  Animatable_child: {
    flexDirection: 'row',
    width: '100%'
  },
  Animatable_child_to_child: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Animatable_image: {
    height: Sizes.hundred,
    width: '100%',
    borderRadius: Sizes.two
  },
  Animatable_Para: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: Sizes.ten,
    padding: Sizes.five,
    width: '60%',
    lineHeihgt: 80
  },
  username: {
    color: Colors.card_username,
    fontSize: Sizes.ten
  },
  title: {
    color: Colors.card_title,
    fontSize:  Sizes.twelve
  },
  price: {
    color: Colors.green,
    fontSize:  Sizes.twelve
  },
  Icon_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  Versand: {
    color: Colors.card_username,
    fontSize: Sizes.twelve
  },
  staro: {
    color: Colors.card_username
  }
})