export enum EnvMapping {
  PORT = 'PORT',
  BCRYPT_SALT_ROUNDS = 'BCRYPT_SALT_ROUNDS',
  JWT_SECRET_KEY = 'JWT_SECRET_KEY',
  JWT_REFRESH_KEY = 'JWT_REFRESH_KEY',
  JWT_REFRESH_EXPIRES_IN = '7d',
}

export const ETable = {
  CarPark: 'carpark',
  User: 'user',
  FavoriteList: 'favorite-list',
};

export enum EGuardDecoratorKey {
  IS_PUBLIC_KEY = 'IS_PUBLIC_KEY',
}
