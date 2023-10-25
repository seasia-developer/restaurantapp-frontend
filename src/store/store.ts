import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AuthApi } from "./services/auth";
import { searchOptions } from "./services/searchOptions";
import { searchFilterApi } from "./services/searchFilterApi";
import searchFilterReducer from "./slices/searchFilterSlice";
import searchFilterIdReducer from "./slices/searchFilterIdSlice";
import sendSearchNameReducer from "./slices/sendSearchNameSlice";
import { AgreementApi } from "./services/agreement";
import dataSliceReducer from "./slices/authSlice";
import selectedPageReducer from "./slices/paginationSlice";
import headerSlugSliceReducer from "./slices/headerSlugSlice";
import agentListIdSliceReducer from "./slices/agentListIdSlice";
import agentDetailedListSliceReducer from "./slices/agentDetailedListSlice";


export const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
    [searchOptions.reducerPath]: searchOptions.reducer,
    [searchFilterApi.reducerPath]: searchFilterApi.reducer,
    [AgreementApi.reducerPath]: AgreementApi.reducer,
    searchFilter: searchFilterReducer,
    searchFilterId: searchFilterIdReducer,
    data: dataSliceReducer,
    sendSearchName: sendSearchNameReducer,
    selectedPage: selectedPageReducer,
    headerSlugSlice: headerSlugSliceReducer,
    agentListId: agentListIdSliceReducer,
    agentDetailedList:agentDetailedListSliceReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthApi.middleware,
      searchOptions.middleware,
      searchFilterApi.middleware,
      AgreementApi.middleware
    ),
});

setupListeners(store.dispatch);
