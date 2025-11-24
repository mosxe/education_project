import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types/sort';
import { ArticleSortField } from 'entities/Article';
import { ArticleType } from 'entities/Article';

export interface articlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleView;
  page: number;
  limit: number;
  hasMore: boolean;
  search: string;
  order: SortOrder;
  sort: ArticleSortField;
  type: ArticleType;
  _inited: boolean;
};