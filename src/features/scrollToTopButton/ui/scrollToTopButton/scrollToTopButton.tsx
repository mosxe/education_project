import { memo } from 'react';
import { Icon } from 'shared/ui/Icon';
import CircleIcon from 'shared/assets/icons/circle-up.svg';

export const ScrollToTopButton = memo(() => {
  const onCLick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Icon Svg={CircleIcon} clickable onClick={onCLick} width={32} height={32} />
  );
});
