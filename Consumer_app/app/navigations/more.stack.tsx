import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import More from '../components/more/more.component';
import Address from '../components/more/address.component'
import AddAddress from '../components/more/addAdrress.coomponent'
import Offers from '../components/more/offers.component'
import OfferDetail from '../components/more/offerDetail.component'
import Setting from '../components/more/setting.components'
import Account from '../components/more/account.component'
import Notification from '../components/more/notification.component'
import Privacy from '../components/more/privacy.component'
import Terms from '../components/more/terms.component'
import Faq from '../components/more/faq.component'
import ReferAFriend from '../components/more/referAFriend.component'
const Stack = createNativeStackNavigator();
const MoreStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="more" component={More} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="AddAddress" component={AddAddress} />
      <Stack.Screen name="Offers" component={Offers} />
      <Stack.Screen name="OfferDetail" component={OfferDetail} />
      <Stack.Screen name="Setting" component={Setting}/>
      <Stack.Screen name="Account" component={Account}/>
      <Stack.Screen name="Notification" component={Notification}/>
      <Stack.Screen name="Privacy" component={Privacy}/>
      <Stack.Screen name="Terms" component={Terms}/>
      <Stack.Screen name="Faq" component={Faq}/>
      <Stack.Screen name="ReferAFriend" component={ReferAFriend}/>
    </Stack.Navigator>
  );
}

export default MoreStack;
