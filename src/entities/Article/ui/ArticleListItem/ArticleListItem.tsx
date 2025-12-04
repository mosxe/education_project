import { FC, HTMLAttributeAnchorTarget } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { Text } from 'shared/ui/Text';
import { Icon } from 'shared/ui/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card';
import { Avatar } from 'shared/ui/Avatar';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { getRouteArticleDetails } from 'shared/const/router';
import { AppLink } from 'shared/ui/AppLink';
import { HStack, VStack } from 'shared/ui/Stack';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import { AppImage } from 'shared/ui/AppImage';
import { Skeleton } from 'shared/ui/Skeleton';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
  const { className, article, view, target = '_self' } = props;
  const { t } = useTranslation();

  const views = (
    <HStack gap='8'>
      <Icon Svg={EyeIcon} />
      <Text text={String(article.views)} />
    </HStack>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;

    return (
      <Card data-testid='ArticleListItem' padding='24' border='round'>
        <VStack max gap='16' className={classNames(cls[view], {}, [className])}>
          <HStack gap='8'>
            <Avatar size={32} src={article.user.avatar} />
            <Text text={article.user.username} bold />
            <Text text={article.createdAt} />
          </HStack>
          <Text title={article.title} className={cls.title} bold />
          <Text title={article.subtitle} size='s' />
          <AppImage
            src={article.img}
            className={cls.img}
            alt={article.title}
            fallback={<Skeleton width='100%' height={250} />}
          />
          {textBlock && (
            <Text
              className={cls.textBlock}
              text={textBlock?.paragraphs.slice(0, 2).join(' ')}
            />
          )}
          <HStack
            max
            gap='8'
            align='center'
            justify='between'
            className={cls.footer}
          >
            <AppLink to={getRouteArticleDetails(article.id)}>
              <Button variant='outline'>{t('Читать далее...')}</Button>
            </AppLink>
            {views}
          </HStack>
        </VStack>
      </Card>
    );
  }

  return (
    <AppLink
      data-testid='ArticleListItem'
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls[view], {}, [className])}
    >
      <Card className={cls.card} border='round'>
        <AppImage
          fallback={<Skeleton width={200} height={200} />}
          alt={article.title}
          src={article.img}
          className={cls.img}
        />
        <VStack className={cls.info} gap='4'>
          <Text title={article.title} className={cls.title} />
          <VStack gap='4' className={cls.footer} max>
            <HStack justify='between' max gap='4'>
              <Text text={article.createdAt} className={cls.date} />
              {views}
            </HStack>
            <HStack gap='4'>
              <Avatar size={32} src={article.user.avatar} />
              <Text text={article.user.username} />
            </HStack>
          </VStack>
        </VStack>
      </Card>
    </AppLink>
  );
};
