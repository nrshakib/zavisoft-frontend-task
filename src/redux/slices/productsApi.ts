
import { baseApi } from "../baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => {
        return {
          url: "/products",
          method: "GET",
          // headers: {
          //   "content-type": "application/json",
          //   Authorization: `Bearer ${accessToken}`,
          // },
        };
      },
      providesTags: ["products"],
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;