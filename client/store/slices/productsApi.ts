import { createApi } from "@reduxjs/toolkit/query/react";
import { ProductType } from "client/types/definition";
import axiosBaseQuery from "client/lib/baseQuery";

const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: axiosBaseQuery({ baseUrl: process.env.apiBaseUrl! }),
    endpoints(build) {
        return {
            products: build.query<ProductType[], void>({
                query: () => {
                    return { url: "/products", method: "get" };
                },
            }),
            order: build.query<void, { data: object; headers: object }>({
                query: ({ data, headers }) => {
                    return { url: "/order", method: "post", data, params: { headers } };
                },
            }),
        };
    },
});

export default productsApi;
export const { useProductsQuery, useOrderQuery } = productsApi;
