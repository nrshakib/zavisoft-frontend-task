import { baseApi } from "../baseApi";

const categoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => {
        return {
          url: "/categories",
          method: "GET",
          // headers: {
          //   "content-type": "application/json",
          //   Authorization: `Bearer ${accessToken}`,
          // },
        };
      },
      providesTags: ["categories"],
    }),
  }),
});

export const { useGetAllCategoriesQuery } = categoriesApi;
