"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EGuardDecoratorKey = exports.ETable = exports.EnvMapping = void 0;
var EnvMapping;
(function (EnvMapping) {
    EnvMapping["PORT"] = "PORT";
    EnvMapping["BCRYPT_SALT_ROUNDS"] = "BCRYPT_SALT_ROUNDS";
    EnvMapping["JWT_SECRET_KEY"] = "JWT_SECRET_KEY";
    EnvMapping["JWT_REFRESH_KEY"] = "JWT_REFRESH_KEY";
    EnvMapping["JWT_REFRESH_EXPIRES_IN"] = "7d";
})(EnvMapping || (exports.EnvMapping = EnvMapping = {}));
exports.ETable = {
    CarPark: 'carpark',
    User: 'user',
    FavoriteList: 'favorite-list',
};
var EGuardDecoratorKey;
(function (EGuardDecoratorKey) {
    EGuardDecoratorKey["IS_PUBLIC_KEY"] = "IS_PUBLIC_KEY";
})(EGuardDecoratorKey || (exports.EGuardDecoratorKey = EGuardDecoratorKey = {}));
//# sourceMappingURL=constant.js.map