// This file is auto-generated by @hey-api/openapi-ts

import {
  createClient,
  createConfig,
  type OptionsLegacyParser,
  urlSearchParamsBodySerializer,
} from "@hey-api/client-axios";
import type {
  AuthJwtLoginData,
  AuthJwtLoginError,
  AuthJwtLoginResponse,
  AuthJwtLogoutError,
  AuthJwtLogoutResponse,
  RegisterRegisterData,
  RegisterRegisterError,
  RegisterRegisterResponse,
  ResetForgotPasswordData,
  ResetForgotPasswordError,
  ResetForgotPasswordResponse,
  ResetResetPasswordData,
  ResetResetPasswordError,
  ResetResetPasswordResponse,
  VerifyRequestTokenData,
  VerifyRequestTokenError,
  VerifyRequestTokenResponse,
  VerifyVerifyData,
  VerifyVerifyError,
  VerifyVerifyResponse,
  UsersCurrentUserError,
  UsersCurrentUserResponse,
  UsersPatchCurrentUserData,
  UsersPatchCurrentUserError,
  UsersPatchCurrentUserResponse,
  UsersUserData,
  UsersUserError,
  UsersUserResponse,
  UsersPatchUserData,
  UsersPatchUserError,
  UsersPatchUserResponse,
  UsersDeleteUserData,
  UsersDeleteUserError,
  UsersDeleteUserResponse,
  ReadItemData,
  ReadItemError,
  ReadItemResponse,
  CreateItemData,
  CreateItemError,
  CreateItemResponse,
  DeleteItemData,
  DeleteItemError,
  DeleteItemResponse,
} from "./types.gen";

export const client = createClient(createConfig());

/**
 * Auth:Jwt.Login
 */
export const authJwtLogin = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<AuthJwtLoginData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    AuthJwtLoginResponse,
    AuthJwtLoginError,
    ThrowOnError
  >({
    ...options,
    ...urlSearchParamsBodySerializer,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      ...options?.headers,
    },
    url: "/auth/jwt/login",
  });
};

/**
 * Auth:Jwt.Logout
 */
export const authJwtLogout = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    AuthJwtLogoutResponse,
    AuthJwtLogoutError,
    ThrowOnError
  >({
    ...options,
    url: "/auth/jwt/logout",
  });
};

/**
 * Register:Register
 */
export const registerRegister = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<RegisterRegisterData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    RegisterRegisterResponse,
    RegisterRegisterError,
    ThrowOnError
  >({
    ...options,
    url: "/auth/register",
  });
};

/**
 * Reset:Forgot Password
 */
export const resetForgotPassword = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<ResetForgotPasswordData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ResetForgotPasswordResponse,
    ResetForgotPasswordError,
    ThrowOnError
  >({
    ...options,
    url: "/auth/forgot-password",
  });
};

/**
 * Reset:Reset Password
 */
export const resetResetPassword = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<ResetResetPasswordData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ResetResetPasswordResponse,
    ResetResetPasswordError,
    ThrowOnError
  >({
    ...options,
    url: "/auth/reset-password",
  });
};

/**
 * Verify:Request-Token
 */
export const verifyRequestToken = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<VerifyRequestTokenData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    VerifyRequestTokenResponse,
    VerifyRequestTokenError,
    ThrowOnError
  >({
    ...options,
    url: "/auth/request-verify-token",
  });
};

/**
 * Verify:Verify
 */
export const verifyVerify = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<VerifyVerifyData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    VerifyVerifyResponse,
    VerifyVerifyError,
    ThrowOnError
  >({
    ...options,
    url: "/auth/verify",
  });
};

/**
 * Users:Current User
 */
export const usersCurrentUser = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    UsersCurrentUserResponse,
    UsersCurrentUserError,
    ThrowOnError
  >({
    ...options,
    url: "/users/me",
  });
};

/**
 * Users:Patch Current User
 */
export const usersPatchCurrentUser = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<UsersPatchCurrentUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).patch<
    UsersPatchCurrentUserResponse,
    UsersPatchCurrentUserError,
    ThrowOnError
  >({
    ...options,
    url: "/users/me",
  });
};

/**
 * Users:User
 */
export const usersUser = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<UsersUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    UsersUserResponse,
    UsersUserError,
    ThrowOnError
  >({
    ...options,
    url: "/users/{id}",
  });
};

/**
 * Users:Patch User
 */
export const usersPatchUser = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<UsersPatchUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).patch<
    UsersPatchUserResponse,
    UsersPatchUserError,
    ThrowOnError
  >({
    ...options,
    url: "/users/{id}",
  });
};

/**
 * Users:Delete User
 */
export const usersDeleteUser = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<UsersDeleteUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    UsersDeleteUserResponse,
    UsersDeleteUserError,
    ThrowOnError
  >({
    ...options,
    url: "/users/{id}",
  });
};

/**
 * Read Item
 */
export const readItem = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<ReadItemData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ReadItemResponse,
    ReadItemError,
    ThrowOnError
  >({
    ...options,
    url: "/items/",
  });
};

/**
 * Create Item
 */
export const createItem = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<CreateItemData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CreateItemResponse,
    CreateItemError,
    ThrowOnError
  >({
    ...options,
    url: "/items/",
  });
};

/**
 * Delete Item
 */
export const deleteItem = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<DeleteItemData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    DeleteItemResponse,
    DeleteItemError,
    ThrowOnError
  >({
    ...options,
    url: "/items/{item_id}",
  });
};
