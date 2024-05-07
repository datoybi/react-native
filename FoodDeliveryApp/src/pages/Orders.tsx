import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {RootState} from '../store/reducer';
import {Order} from '../slices/order';
import EachOrder from '../components/EachOrder';

function Orders() {
  const orders = useSelector((state: RootState) => state.order.orders);
  const renderItem = useCallback(
    ({item}: {item: Order}) => <EachOrder item={item} />,
    [],
  );

  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.orderId}
      renderItem={renderItem}
    />
  );
}

export default Orders;

const styles = StyleSheet.create({});
