"use client";

import { getToken } from "@/components/protected/ProtectedRoute";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Base_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const AuthApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: Base_URL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: any) => {
        localStorage.setItem("wsr_token", response?.data?.token);
        return response;
      },
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/addbuyer",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: any) => {
        localStorage.setItem("wsr_token", response?.data?.token);
        return response;
      },
    }),
    emailAuth: builder.mutation({
      query: (credentials) => ({
        url: `/email-check?email=${credentials.mail}`,
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: any) => {
        localStorage.setItem("wsr_token", response?.data?.token);
        return response;
      },
    }),
    state: builder.query({
      query: (credentials) => ({
        url: "/state",
        method: "GET",
        body: credentials,
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),
    countries: builder.query({
      query: (credentials) => ({
        url: "/countries",
        method: "GET",
        body: credentials,
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),
    account: builder.query({
      query: (credentials) => ({
        url: "/countries",
        method: "GET",
        body: credentials,
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),
    ListingCategory: builder.query({
      query: (credentials) => ({
        url: "/ListingCategory",
        method: "GET",
        body: credentials,
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),
    changePassword: builder.mutation({
      query: (credentials) => ({
        url: "/my-account/change-password/4",
        method: "POST",
        body: credentials,
        headers: getToken().headers,
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),
    forgotPassword: builder.mutation({ 
      query: (credentials) => ( {   
         url: "/forgot-password",
         method: "POST",
         body: credentials,
       }),
       transformResponse: (response: any) => {
         return response;
       },
     }),
     resetPassword: builder.mutation({ 
      query: (credentials) => ( {   
         url: "/reset-password",
         method: "POST",
         body: credentials,
       }),
       transformResponse: (response: any) => {
         return response;
       },
     })
  }),
});
export const {
  useLoginMutation,
  useRegisterMutation,
  useEmailAuthMutation,
  useStateQuery,
  useCountriesQuery,
  useChangePasswordMutation,
  useListingCategoryQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = AuthApi;
