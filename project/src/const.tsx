export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = 'favorites',
  Room = 'offer/:id',
  Page404 = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
