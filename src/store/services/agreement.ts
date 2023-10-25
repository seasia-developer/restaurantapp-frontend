import { getToken } from '@/components/protected/ProtectedRoute';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const Base_URL = process.env.NEXT_PUBLIC_BASE_URL

export const AgreementApi = createApi({
  reducerPath: "AgreementApi",
  baseQuery: fetchBaseQuery({ baseUrl: Base_URL }),
  endpoints: (builder) => ({
    confirm: builder.query({
      query: (credentials) => ({
        url: `/confirm-agreement/${credentials}`,
        headers: getToken().headers,
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),
    view: builder.mutation({
      query: (credentials) => (console.log(credentials, "credentials"), {
        url: `/view-address-details/${credentials}`,
        method: "POST",
        headers: getToken().headers,
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),
    thankyousellerpage: builder.mutation({
      query: (credentials) => ({
        url: "/thankyousellerpage",
        method: "POST",
        headers: getToken().headers,
        body: credentials,
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),
    accountHome: builder.query({
      query: (credentials) => ({
        url: "/account-home",
        method: "GET",
        headers: getToken().headers,
        body: credentials
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),
    flipBook: builder.query({
      query: (credentials) => ({
        url: `/flip-book/${credentials}`,
        method: "GET",
        headers: getToken().headers,
        // body: credentials,
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),
    requestInfo: builder.mutation({
      query: (credentials) => ({
        url: "/request-info",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),
    EmailBroker: builder.mutation({
      query: (credentials) =>({
        url: "/Emai-Restaurant-Broker",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),
    AccountUpdate: builder.mutation({
      query: (credentials) => ({
        url: `account-update/${credentials?.id}`,
        method: "POST",
        headers:getToken().headers,
        body:credentials
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),
  }),
});

export const { useConfirmQuery, useViewMutation, useThankyousellerpageMutation, useAccountHomeQuery, useFlipBookQuery, useRequestInfoMutation, useEmailBrokerMutation, useAccountUpdateMutation } = AgreementApi;