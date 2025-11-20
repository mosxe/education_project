import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from '../../model/consts/consts';
import ListSmallIcon from 'shared/assets/icons/list_small.svg';
import ListBigIcon from 'shared/assets/icons/list_big.svg';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import cls from './ArticleViewSelector.module.scss';
import { HStack } from 'shared/ui/Stack';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: ListSmallIcon
  },
  {
    view: ArticleView.BIG,
    icon: ListBigIcon
  },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = (props) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => {
    onViewClick?.(newView);
  };

  return (
    <HStack gap='4' className={classNames('', {}, [className])}>
      {
        viewTypes.map(viewType => (
          <Button theme={ButtonTheme.CLEAR} key={viewType.view} onClick={() => onClick(viewType.view)}>
            <Icon Svg={viewType.icon} className={classNames('', { [cls.isNotSelected]: viewType.view !== view }, [])} />
          </Button>)
        )
      }
    </HStack>
  );
};