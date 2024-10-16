import chunkArrayLoop from "../utils/chunkArrayLoop";
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
      transformResponse: (response) => {
        const totalPage = Math.ceil(response.total / response.limit);
        return {
          ...response,
          totalPage,
        };
      },
      keepUnusedDateFor: 30,
    }),
    getPost: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const post = await fetchWithBQ(`${POST_URL}/${_arg}`);
        const comments = await fetchWithBQ(`${POST_URL}/${_arg}/comments`);
        return { data: { post: post.data, comments: comments.data } };
      },
    }),
    getPostsCategories: builder.query({
      query: () => ({
        url: `${POST_URL}/tag-list`,
      }),
      transformResponse: (response) => {
        return chunkArrayLoop(response, 30);
      },
      keepUnusedDateFor: 30,
    }),
    getPostsByTags: builder.query({
      query: (tag) => ({
        url: `${POST_URL}/tag/${tag}`,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostsCategoriesQuery, useGetPostQuery } =
  postsApiSlice;
