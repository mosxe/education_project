import { classNames } from 'shared/lib/classNames/classNames';
import cls from './StartRating.module.scss';
import { Icon } from 'shared/ui/Icon';
import StartIcon from 'shared/assets/icons/star.svg';
import { useState } from 'react';

interface StartRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StartRating = (props: StartRatingProps) => {
  const { className, size = 30, selectedStars = 0, onSelect } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState<number>(0);
  const [isSelected, setIsSelected] = useState<boolean>(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.StartRating, {}, [className])}>
      {stars.map(starNumber => (
        <Icon
          key={starNumber}
          Svg={StartIcon}
          className={classNames(cls.startIcon, {
            [cls.hovered]: currentStarsCount >= starNumber,
            [cls.selected]: isSelected
          }, [])}
          width={size}
          height={size}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  );
};