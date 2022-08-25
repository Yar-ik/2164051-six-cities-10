import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state';
import { State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Offer } from '../types';
import {
  requireAuthorization,
  setOfferList,
  setError,
  setDataLoadedStatus,
  redirectToRoute,
} from './action';
import {
  APIRoute,
  AppRoute,
  AuthorizationStatus,
  TIMEOUT_SHOW_ERROR,
} from '../const';
import { dropToken, saveToken } from '../services/token';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { store } from './index';

export const clearErrorAction = createAsyncThunk('game/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

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

  // dispatch(setDataLoadedStatus)(true);
  dispatch(setOfferList(data));
  dispatch(setDataLoadedStatus)(false);
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
  const {
    data: { token },
  } = await api.post<UserData>(APIRoute.Login, { email, password });

  saveToken(token);
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
  dispatch(redirectToRoute(AppRoute.Main));
});
