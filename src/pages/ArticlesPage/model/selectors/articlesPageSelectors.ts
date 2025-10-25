import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArtcilesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArtcilesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArtcilesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;