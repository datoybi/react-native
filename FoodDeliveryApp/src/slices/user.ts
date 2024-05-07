import {createSlice} from '@reduxjs/toolkit';

// action : state를 바꾸는 행위/동작
// dispatch : 그 액션을 실제로 실행하는 함수
// reducer : 액션이 실제로 실행되면 state를 바꾸는 로직

const initialState = {
  name: '',
  email: '',
  accessToken: '',
  refreshToken: '',
  money: 0,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken; // 10분, 5분, 1시간
      // state.refreshToken = action.payload.refreshToken; // 1일, 30일, 1년
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setMoney(state, action) {
      state.money = action.payload;
    },
  },
  extraReducers: builder => {}, // 비동기 액션
});

export default userSlice;
