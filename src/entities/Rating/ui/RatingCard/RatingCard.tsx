import { classNames } from 'shared/lib/classNames/classNames';
import { HStack, VStack } from 'shared/ui/Stack';
import { Card } from 'shared/ui/Card';
import { Text } from 'shared/ui/Text';
import { StartRating } from 'shared/ui/StartRating';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import { Input } from 'shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice';
import { Drawer } from 'shared/ui/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = (props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept,
    rate = 0
  } = props;

  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeeback] = useState('');
  const isMobile = useDevice();

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept]
  );

  const acceptHandle = useCallback(() => {
    setIsOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, starsCount, onAccept]);

  const cancelHandle = useCallback(() => {
    setIsOpen(false);
    onCancel?.(starsCount);
  }, [starsCount, onCancel]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        value={feedback}
        onChange={setFeeback}
        placeholder={t('Ваш отзыв')}
        data-testid='RatingCard.Input'
      />
    </>
  );

  return (
    <Card className={classNames('', {}, [className])} data-testid='RatingCard'>
      <VStack align='center' gap='8'>
        <Text title={starsCount > 0 ? t('Спасибо за оценку!') : title} />
        <StartRating
          size={30}
          onSelect={onSelectStars}
          selectedStars={starsCount}
        />
      </VStack>
      {isMobile ? (
        <Drawer isOpen={isOpen} onClose={cancelHandle} lazy>
          <VStack gap='32'>
            {modalContent}
            <Button onClick={acceptHandle} fullWidth>
              {t('Отправить')}
            </Button>
          </VStack>
        </Drawer>
      ) : (
        <Modal isOpen={isOpen} lazy>
          <VStack gap='32' max>
            {modalContent}
            <HStack max gap='16' justify='end'>
              <Button
                variant='clear'
                onClick={cancelHandle}
                data-testid='RatingCard.Close'
              >
                {t('Закрыть')}
              </Button>
              <Button onClick={acceptHandle} data-testid='RatingCard.Send'>
                {t('Отправить')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      )}
    </Card>
  );
};
