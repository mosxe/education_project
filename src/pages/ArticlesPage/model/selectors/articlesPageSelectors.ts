import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';

export const getArtcilesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArtcilesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArtcilesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
export const getArtcilesPageNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArtcilesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArtcilesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArtcilesPageInited = (state: StateSchema) => state.articlesPage?._inited;
export const getArtcilesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc';
export const getArtcilesPageSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticleSortField.CREATED;
export const getArtcilesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? '';
export const getArtcilesPageType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL;