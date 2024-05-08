import React, {useCallback, useState} from 'react';
import {
  Pressable,
  Text,
  Alert,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import orderSlice, {Order} from '../slices/order';
import {useAppDispatch} from '../store';
import axios, {AxiosError} from 'axios';
import Config from 'react-native-config';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';
import {LoggedInParamList} from '../../AppInner';
import NaverMapView, {Marker, Path} from 'react-native-nmap';
import getDistanceFromLatLonInKm from '../util';

function EachOrder({item}: {item: Order}) {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<LoggedInParamList>>();
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState(false);
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const {start, end} = item;

  const toggleDetail = useCallback(() => {
    setDetail(prev => !prev);
  }, []);

  const onAccept = useCallback(async () => {
    try {
      setLoading(false);
      await axios.post(
        `${Config.API_URL}/accept`,
        {orderId: item.orderId},
        {headers: {authorization: `Bearer ${accessToken}`}},
      );
      dispatch(orderSlice.actions.acceptOrder(item.orderId));
      setLoading(true);
      navigation.navigate('Delivery');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response?.status === 400) {
          Alert.alert('알림', error?.response?.data.message);
          dispatch(orderSlice.actions.rejectOrder(item.orderId));
        }
      }
      setLoading(true);
    }
  }, [item.orderId]);

  const onReject = useCallback(() => {
    dispatch(orderSlice.actions.rejectOrder(item.orderId));
  }, [item.orderId]);

  return (
    <View key={item.orderId} style={styles.orderContainer}>
      <Pressable onPress={toggleDetail} style={styles.info}>
        <Text style={styles.eachInfo}>
          {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>
        <Text style={styles.eachInfo}>
          {getDistanceFromLatLonInKm(
            start.latitude,
            start.longitude,
            end.latitude,
            end.longitude,
          ).toFixed(1)}
          km
        </Text>
        <Text>삼성동</Text>
        <Text>왕십리동</Text>
      </Pressable>
      {detail ? (
        <View>
          <View>
            <View
              style={{
                width: Dimensions.get('window').width - 30,
                height: 200,
                marginTop: 10,
              }}>
              <NaverMapView
                style={{width: '100%', height: '100%'}}
                zoomControl={false}
                center={{
                  zoom: 10,
                  tilt: 50,
                  bearing: 0,
                  latitude: (start.latitude + end.latitude) / 2,
                  longitude: (start.longitude + end.longitude) / 2,
                }}>
                <Marker
                  coordinate={{
                    latitude: start.latitude,
                    longitude: start.longitude,
                  }}
                  pinColor="blue"
                />
                <Path
                  coordinates={[
                    {
                      latitude: start.latitude,
                      longitude: start.longitude,
                    },
                    {latitude: end.latitude, longitude: end.longitude},
                  ]}
                />
                <Marker
                  coordinate={{
                    latitude: end.latitude,
                    longitude: end.longitude,
                  }}
                />
              </NaverMapView>
            </View>
          </View>
          <View style={styles.buttonWrapper}>
            <Pressable
              onPress={onAccept}
              disabled={loading}
              style={styles.acceptButton}>
              <Text style={styles.buttonText}>수락</Text>
            </Pressable>
            <Pressable
              onPress={onReject}
              disabled={loading}
              style={styles.rejectButton}>
              <Text style={styles.buttonText}>거절</Text>
            </Pressable>
          </View>
        </View>
      ) : null}
    </View>
  );
}

export default EachOrder;

const styles = StyleSheet.create({
  orderContainer: {
    borderRadius: 5,
    margin: 5,
    padding: 10,
    backgroundColor: 'lightgray',
  },
  info: {
    flexDirection: 'row',
  },
  eachInfo: {
    flex: 1,
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  acceptButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    flex: 1,
  },
  rejectButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
