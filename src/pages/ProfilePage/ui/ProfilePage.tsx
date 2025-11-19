import { Page } from 'shared/ui/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';

const ProfilePage = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  if (!id) {
    return <Text text={t('Профиль не найден')} />;
  }

  return (
    <Page>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;