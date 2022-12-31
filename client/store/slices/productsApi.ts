import { createApi } from "@reduxjs/toolkit/query/react";
import { ProductType, CartProductType } from "client/types/definition";
import axiosBaseQuery from "client/lib/baseQuery";
import { AxiosResponse } from "axios";

interface OrderRequestType {
    data: {
        customer: {
            name: string;
            address: string;
            number: string;
        };
        calculation: {
            vat: string;
            price: string;
            total: string;
        };
        items: CartProductType[];
    };
    headers: {
        ["x-access-user"]: string;
    };
}

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
            addOrder: build.mutation<AxiosResponse, OrderRequestType>({
                query: ({ data, headers }) => {
                    return { url: "/order", method: "post", data, headers};
                },
            }),
        };
    },
});

export default productsApi;
export const { useProductsQuery, useAddOrderMutation } = productsApi;
