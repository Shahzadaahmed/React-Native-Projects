import AsyncStorage from '@react-native-async-storage/async-storage';
export async function saveUserLocation(item: any)
{
  AsyncStorage.setItem('userLocation', JSON.stringify(item))
    .then(() =>
    {
      console.log('data saved');
    })
    .catch(error =>
    {
      console.log(error);
    });
}

export function getUserLocation(userData: any)
{
  AsyncStorage.getItem('userLocation')
    .then((value: any) =>
    {
      const user = JSON.parse(value);
      userData(user);
    })
    .catch(error =>
    {
      console.log(error);
    });
}

export async function removeUserLocation()
{
  AsyncStorage.removeItem('userLocation')
    .then(() =>
    {
      console.log('data removed');
    })
    .catch(error =>
    {
      console.log(error);
    });
}
