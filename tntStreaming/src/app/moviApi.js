import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api_key = '34c730a3ca445751a61c51bc32718ff7';

export const movieApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getUpcoming: builder.query({
      query: () => `movie/upcoming?api_key=${api_key}`,
    }),
    getNowPlaying: builder.query({
      query: () => `movie/now_playing?api_key=${api_key}&language=en-US`,
    }),

    getToprated: builder.query({
      query: () => `movie/top_rated?api_key=${api_key}&language=en-US`,
    }),

    getPopularTv: builder.query({
      query: () => `tv/popular?api_key=${api_key}&language=en-US`,
    }),
    getTopratedTv: builder.query({
      query: () => `tv/top_rated?api_key=${api_key}&language=en-US`,
    }),
    getTrendingMovie: builder.query({
      query: () => `trending/movie/day?api_key=${api_key}&language=en-US`,
    }),
    getTrendingTv: builder.query({
      query: () => `trending/tv/day?api_key=${api_key}&language=en-US`,
    }),
    getMovieDetial: builder.query({
      query: (id) => `movie/${id}?api_key=${api_key}&language=en-US`,
    }),
    getTvDetial: builder.query({
      query: (id) => `tv/${id}?api_key=${api_key}&language=en-US`,
    }),
    getMovieVideo: builder.query({
      query: (id) =>
        `movie/${id}/videos?api_key=${api_key}&append_to_response=video`,
    }),
    getTvVideo: builder.query({
      query: (id) =>
        `tv/${id}/videos?api_key=${api_key}&append_to_response=video`,
    }),
    getSearchMovie: builder.query({
      query: (title) =>
        `search/movie?query=${title}&api_key=${api_key}&language=en-US`,
    }),
  }),
});

export const {
  useGetUpcomingQuery,
  useGetNowPlayingQuery,
  useGetTrendingTvQuery,
  useGetSearchMovieQuery,
  useGetMovieDetialQuery,
  useGetTopratedQuery,
  useGetPopularTvQuery,
  useGetTopratedTvQuery,
  useGetMovieVideoQuery,
  useGetTrendingMovieQuery,
  useGetTvDetialQuery,
  useGetTvVideoQuery,
} = movieApi;
