import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from 'entities/Article';
import BurgerIcon from 'shared/assets/icons/burger.svg';
import TiledIcon from 'shared/assets/icons/tile.svg';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import cls from './ArticleViewSelector.module.scss';
import { HStack } from 'shared/ui/Stack';
import { Card } from 'shared/ui/Card';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: BurgerIcon
  },
  {
    view: ArticleView.BIG,
    icon: TiledIcon
  }
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = (props) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => {
    onViewClick?.(newView);
  };

  return (
    <Card border='round' padding='8'>
      <HStack gap='4' className={classNames('', {}, [className])}>
        {viewTypes.map((viewType) => (
          <Button
            variant='clear'
            key={viewType.view}
            onClick={() => onClick(viewType.view)}
          >
            <Icon
              Svg={viewType.icon}
              className={classNames(
                '',
                { [cls.isNotSelected]: viewType.view !== view },
                []
              )}
            />
          </Button>
        ))}
      </HStack>
    </Card>
  );
};
