import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state';
import { State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Offer } from '../types';
import {
  requireAuthorization,
  setOfferList,
  // setDataLoadedStatus,
  redirectToRoute,
} from './action';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken } from '../services/token';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';

export const fetchOfferListAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('city/setOfferList', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer[]>(APIRoute.Hotels);

  dispatch(setOfferList(data));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkauth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  try {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });

    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  dispatch(redirectToRoute(AppRoute.Login));
});

export const isCheckedAuth = (
  authorizationStatus: AuthorizationStatus
): boolean => authorizationStatus === AuthorizationStatus.Unknown;

export const setBookmark = createAsyncThunk<
  void,
  { hotelId: number; isFavorite: boolean },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'offer/bookmark',
  async ({ hotelId, isFavorite }, { dispatch, extra: api }) => {
    const status = isFavorite ? 0 : 1;
    try {
      await api.post(`/favorite/${hotelId}/${status}`);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
);
