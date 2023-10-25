import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Base_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const searchOptions = createApi({
    reducerPath: 'searchOptions',
    baseQuery: fetchBaseQuery({ baseUrl: Base_URL }),
    endpoints: (builder) => ({
        getStates: builder.query({
            query: () => 'state',
        }),
        getListingCategories: builder.query({
            query: () => 'ListingCategory',
        }),
        getFilterOptions: builder.query({
            query: () => 'listingFilter',
        }),
        getFeaturedListing: builder.query({
            query: () => 'featuredListingSlider',
        }),
        getRecentySold: builder.query({
            query: () => 'recentySold',
        }),
        getLatest: builder.query({
            query: ()=> 'latest',
        }),
        getListingSold: builder.query({
            query: ()=> 'listingSold',
        }),
        getCustomerStories: builder.query({
            query: ()=> 'customer-stories',
        }),
        getAgentOffice: builder.query({
            query: ()=> 'agent-office',
        }),
    })
});

export const { useGetStatesQuery, useGetListingCategoriesQuery, useGetFilterOptionsQuery, useGetFeaturedListingQuery, useGetRecentySoldQuery, useGetLatestQuery, useGetListingSoldQuery, useGetCustomerStoriesQuery, useGetAgentOfficeQuery } = searchOptions;