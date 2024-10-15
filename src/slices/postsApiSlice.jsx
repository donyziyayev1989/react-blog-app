import { POST_URL } from "../utils/constants";
import { apiSlice } from "./apiSlice";

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (page = 1, limit = 10) => ({
        url: `${POST_URL}?limit=${limit}&skip=${
          (page - 1) * limit
        }&select=id,title,tags,body`,
      }),
      transformResponse: (response, meta, arg) => {
        const totalPage = Math.ceil(response.total / response.limit);
        return {
          ...response,
          totalPage,
        };
      },
      keepUnusedDateFor: 0,
    }),
  }),
});

export const { useGetPostsQuery } = postsApiSlice;
