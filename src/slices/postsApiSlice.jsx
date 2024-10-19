import chunkArrayLoop from "../utils/chunkArrayLoop";
import { POST_URL } from "../utils/constants";
import { apiSlice } from "./apiSlice";

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      //   query: (page = 1, limit = 10) => ({
      //     url: `${POST_URL}?limit=${limit}&skip=${
      //       (page - 1) * limit
      //     }&select=id,title,tags,body`,
      //   }),
      //   transformResponse: (response) => {
      //     const totalPage = Math.ceil(response.total / response.limit);
      //     return {
      //       ...response,
      //       totalPage,
      //     };
      //   },
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        let { page, tag, limit, searchQuery, sortBy } = _arg;
        let sortQuery = "";

        if (limit === undefined) {
          limit = 10;
        }

        if (sortBy !== "") {
          const [sort, order] = sortBy.split(";");
          sortQuery = `sortBy=${sort}&order=${order}&`;
        }
        let url = `${POST_URL}?${sortQuery}&limit=${limit}&skip=${
          page * limit
        }&select=id,title,tags,body`;

        if (searchQuery && searchQuery !== "") {
          url = `${POST_URL}/search?q=${searchQuery}&${sortQuery}limit=${limit}&skip=${
            page * limit
          }&select=id,title,tags,body`;
        }
        if (tag) {
          url = `${POST_URL}/tag/${tag}?&${sortQuery}limit=${limit}&skip=${
            page * limit
          }&select=id,title,tags,body`;
        }

        const result = await fetchWithBQ(url);
        const totalPage = Math.ceil(result.data.total / limit);

        return result.data
          ? { data: { ...result.data, totalPage } }
          : { error: result.error || "Something went wrong" };
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
  }),
});

export const { useGetPostsQuery, useGetPostsCategoriesQuery, useGetPostQuery } =
  postsApiSlice;
