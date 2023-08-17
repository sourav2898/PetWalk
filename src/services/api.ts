import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

// access this url from the env
const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" })

const baseQueryWithInterceptor: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {

    }

    return result
}

export const api = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithInterceptor,
    tagTypes: ["Products"],
    endpoints: (builder) => ({
        // ? Query: Get All Products
        getProducts: builder.query<any[], void>({
            query() {
                return "products";
            },
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({
                            type: "Products" as const,
                            id,
                        })),
                        { type: "Products", id: "LIST" },
                    ]
                    : [{ type: "Products", id: "LIST" }],
            // ? Transform the result to prevent nested data
            transformResponse: (response: { data: { products: any[] } }) =>
                response.data.products,
        }),
    }),
});

export const {
    usePrefetch,
    useGetProductsQuery
} = api;
