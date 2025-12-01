import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import {
  getRouteMain,
  getRouteAbout,
  getRouteProfile,
  getRouteArticles
} from 'shared/const/router';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/Info.svg';
import ProfileIcon from 'shared/assets/icons/avatar.svg';
import ArticlesIcon from 'shared/assets/icons/article.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: HomeIcon,
      text: 'Главная'
    },
    {
      path: getRouteAbout(),
      Icon: AboutIcon,
      text: 'О сайте'
    }
  ];

  if (userData) {
    sidebarItemList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true
      },
      {
        path: getRouteArticles(),
        Icon: ArticlesIcon,
        text: 'Статьи',
        authOnly: true
      }
    );
  }
  return sidebarItemList;
});
