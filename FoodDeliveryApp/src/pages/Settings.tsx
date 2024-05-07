import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Pressable, Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import {useAppDispatch} from '../store';
import axios, {AxiosError} from 'axios';
import Config from 'react-native-config';
import userSlice from '../slices/user';
import EncryptedStorage from 'react-native-encrypted-storage';

function Settings() {
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const dispatch = useAppDispatch();
  const money = useSelector((state: RootState) => state.user.money);
  const name = useSelector((state: RootState) => state.user.name);

  useEffect(() => {
    async function getMoney() {
      const response = await axios.get<{data: {data: number}}>(
        `${Config.API_URL}/showmethemoney`,
        {headers: {authorization: `Bearer ${accessToken}`}},
      );
      dispatch(userSlice.actions.setMoney(response.data.data));
    }
    getMoney();
  }, [accessToken, dispatch]);

  const onLogout = useCallback(async () => {
    try {
      await axios.post(
        `${Config.API_URL}/logout`,
        {},
        {headers: {authorization: `Bearer ${accessToken}`}},
      );
      Alert.alert('알림', '로그아웃 되었습니다');
      dispatch(
        userSlice.actions.setUser({
          name: '',
          email: '',
          accessToken: '',
        }),
      );
      await EncryptedStorage.removeItem('refreshToken');
    } catch (error) {
      const errorResponse = (error as AxiosError).response;
      console.error(errorResponse);
    }
  }, [accessToken, dispatch]);

  return (
    <View>
      <View style={styles.money}>
        <Text style={styles.moneyText}>
          {name}님의 수익금{' '}
          <Text style={{fontWeight: 'bold'}}>
            {money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Text>
          원
        </Text>
        <View style={styles.buttonZone}>
          <Pressable
            style={StyleSheet.compose(
              styles.loginButton,
              styles.loginButtonActive,
            )}
            onPress={onLogout}>
            <Text style={styles.loginButtonText}>로그아웃</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  money: {padding: 20},
  moneyText: {fontSize: 16},
  buttonZone: {
    alignItems: 'center',
    paddingTop: 20,
  },
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
