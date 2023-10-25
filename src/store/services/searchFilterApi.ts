import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Base_URL = process.env.NEXT_PUBLIC_BASE_URL;

console.log(Base_URL, "Base_URLBase_URL");

export const searchFilterApi = createApi({
  reducerPath: "searchFilterApi",
  baseQuery: fetchBaseQuery({ baseUrl: Base_URL }),
  endpoints: (builder) => ({
    searchFilter: builder.mutation({
      query: (searchFilterData) => ({
        url: `/searchFilter`,
        method: "POST",
        body: searchFilterData,
      }),
    }),
    searchFilterId: builder.mutation({
      query: ({ name, id }: any) => ({
        url: `restaurant-for-sale/${encodeURIComponent(name)}/${id}`,
        method: "POST",
      }),
    }),
    ListByName: builder.query({
      query: (name) => `Restaurent-for-sale/${name}`,
    }),
    contentByUrl: builder.query({
      query: (url) => `restaurant-for-sale/${url}`,
    }),
    recommendedListId: builder.mutation({
      query: (stateCode) => ({
        url: `Recommended-list`,
        method: "POST",
        body: { state: stateCode },
      }),
    }),
    gettingSearchReco: builder.query({
      query: (param) => ({
        url: `footerSection`,
      }),
    }),
    getAlsoSearch: builder.mutation({
      query: (listingId) => ({
        url: `also-search`,
        method: "POST",
        body: {
          listingId: listingId,
        },
      }),
    }),
    getFilterDetails: builder.mutation({
      query: (sfilter) => ({
        url: `filter/details`,
        method: "POST",
        body: sfilter,
      }),
    }),
    getAgentList: builder.query({
      query: (id) => ({
        url: `/agent-listings/${id}`,
      }),
    }),
    getDetailedList: builder.query({
      query: (detailedList) => ({
        url: `/restaurant-broker/${detailedList}`,
      }),
    }),
    getDataByHeadSlug: builder.query({
      query: (slug) => ({
        url: `restaurants/${slug}`,
      }),
    }),
  }),
});

export const {
  useSearchFilterMutation,
  useSearchFilterIdMutation,
  useRecommendedListIdMutation,
  useGettingSearchRecoQuery,
  useListByNameQuery,
  useContentByUrlQuery,
  useGetAlsoSearchMutation,
  useGetFilterDetailsMutation,
  useGetDataByHeadSlugQuery,
  useGetAgentListQuery,
  useGetDetailedListQuery,
} = searchFilterApi;
