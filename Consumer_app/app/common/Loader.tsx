import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator
} from 'react-native';
import  theme  from './theme';

// Loader Component
const Loader = (props: { loading: boolean }) => {
  const { loading } = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={loading}
            size={"large"}
            color={theme.colors.primary}
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    height: 120,
    width: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default Loader;