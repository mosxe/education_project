import { ScrollToTopButton } from 'features/scrollToTopButton';
import { VStack } from 'shared/ui/Stack';
import cls from './ScrollToolbar.module.scss';

export const ScrollToolbar = () => {
  return (
    <VStack max justify='center' align='center' className={cls.ScrollToolbar}>
      <ScrollToTopButton />
    </VStack>
  );
};
