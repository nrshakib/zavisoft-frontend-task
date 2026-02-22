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
    getSingleProduct: builder.query({
      query: (slug) => {
        console.log(slug);
        return {
          url: `/products/slug/${slug}`,
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

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;
