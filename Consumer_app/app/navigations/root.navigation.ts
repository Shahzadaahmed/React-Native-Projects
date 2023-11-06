import * as React from 'react';
import {StackActions} from '@react-navigation/native';
export const navigationRef: any = React.createRef();

export function navigate(name: any, params: any) {
  navigationRef.current?.navigate(name, params);
}
export function reset(name: any, params: any) {
    navigationRef.current?.reset({
        index:0,
        routes:[{name:name}],
        params
      });
  }
  

export function push(name: any) {
  navigationRef.current?.dispatch(StackActions.push(name));
}

export function goBack() {
  navigationRef.current?.dispatch(StackActions.pop(1));
}
